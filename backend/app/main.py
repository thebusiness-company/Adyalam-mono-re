import os
import logging
from fastapi import FastAPI, Depends, HTTPException, UploadFile, File, Form, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from sqlalchemy.sql import text
from . import models, schemas, crud
from .database import SessionLocal, engine, Base

logger = logging.getLogger("uvicorn.error")

app = FastAPI(title="Adyalam Contact API")
api_router = APIRouter(prefix="/api")

# Allow requests from the frontend during development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve uploaded files
UPLOAD_DIR = os.path.join(os.path.dirname(__file__), "..", "static", "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)
app.mount("/uploads", StaticFiles(directory=os.path.abspath(UPLOAD_DIR)), name="uploads")
app.mount("/api/uploads", StaticFiles(directory=os.path.abspath(UPLOAD_DIR)), name="uploads-api")




def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/health", tags=["Health"])
def health():
    return {"status": "ok"}

@app.on_event("startup")
def on_startup():
    try:
        Base.metadata.create_all(bind=engine)
        logger.info("Database tables created/verified")
    except Exception as e:
        # Log the error but don't crash the whole app — allows the server to run
        logger.error("Failed to create/verify database tables: %s", e)
    # Ensure new contact columns exist (non-destructive if they already do)
    # Run each column addition in a separate transaction block because in PostgreSQL
    # any failed statement in a transaction block aborts the entire transaction.
    for col_name, col_sql in [
        ("phone", "ALTER TABLE contacts ADD COLUMN phone VARCHAR(64)"),
        ("subject", "ALTER TABLE contacts ADD COLUMN subject VARCHAR(256)"),
        ("accepted", "ALTER TABLE contacts ADD COLUMN accepted BOOLEAN DEFAULT FALSE"),
        ("dm_plan", "ALTER TABLE contacts ADD COLUMN dm_plan VARCHAR(256)"),
        ("website_plan", "ALTER TABLE contacts ADD COLUMN website_plan VARCHAR(256)"),
    ]:
        try:
            with engine.begin() as conn:
                conn.execute(text(col_sql))
        except Exception:
            pass


@api_router.post("/contact", response_model=schemas.ContactOut, status_code=201)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    created = crud.create_contact(db, contact)
    return created


@api_router.post("/blogs", response_model=schemas.BlogOut, status_code=201)
def create_blog(
    title: str = Form(...),
    content: str = Form(...),
    image: UploadFile | None = File(None),
    image_url_form: str | None = Form(None),
    db: Session = Depends(get_db),
):
    try:
        image_url = None
        if image:
            # save to uploads folder
            filename = f"{int(__import__('time').time())}_{image.filename}"
            dest_path = os.path.join(UPLOAD_DIR, filename)
            with open(dest_path, "wb") as f:
                f.write(image.file.read())
            # exposed path
            image_url = f"/uploads/{filename}"
        # if no uploaded file but client provided an image_url form field, use it
        final_image_url = image_url if image_url else image_url_form
        blog_in = schemas.BlogCreate(title=title, content=content, image_url=final_image_url)
        created = crud.create_blog(db, blog_in)
        return created
    except Exception as e:
        logger.error("Failed to create blog: %s", e)
        raise HTTPException(status_code=500, detail=str(e))


@api_router.get("/blogs", response_model=list[schemas.BlogOut])
def list_blogs(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_blogs(db, skip=skip, limit=limit)


@api_router.get("/blogs/{blog_id}", response_model=schemas.BlogOut)
def get_blog(blog_id: int, db: Session = Depends(get_db)):
    b = crud.get_blog(db, blog_id)
    if not b:
        raise HTTPException(status_code=404, detail="Blog not found")
    return b


@api_router.put("/blogs/{blog_id}", response_model=schemas.BlogOut)
def update_blog_endpoint(
    blog_id: int,
    title: str | None = Form(None),
    content: str | None = Form(None),
    image: UploadFile | None = File(None),
    image_url_form: str | None = Form(None),
    db: Session = Depends(get_db),
):
    image_url = None
    if image:
        filename = f"{int(__import__('time').time())}_{image.filename}"
        dest_path = os.path.join(UPLOAD_DIR, filename)
        with open(dest_path, "wb") as f:
            f.write(image.file.read())
        image_url = f"/uploads/{filename}"

    final_image_url = image_url if image_url else image_url_form
    update_data = {
        "title": title,
        "content": content,
        "image_url": final_image_url,
    }
    updated = crud.update_blog(db, blog_id, update_data)
    if not updated:
        raise HTTPException(status_code=404, detail="Blog not found")
    return updated


@api_router.delete("/blogs/{blog_id}")
def delete_blog_endpoint(blog_id: int, db: Session = Depends(get_db)):
    ok = crud.delete_blog(db, blog_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Blog not found")
    return {"success": True}

app.include_router(api_router)

