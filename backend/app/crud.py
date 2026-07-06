from sqlalchemy.orm import Session
from . import models, schemas


def create_contact(db: Session, contact: schemas.ContactCreate):
    db_contact = models.Contact(
        name=contact.name,
        email=contact.email,
        message=contact.message,
        phone=getattr(contact, 'phone', None),
        subject=getattr(contact, 'subject', None),
        accepted=bool(getattr(contact, 'accepted', False)),
        dm_plan=getattr(contact, 'dm_plan', None),
        website_plan=getattr(contact, 'website_plan', None),
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact


def create_blog(db: Session, blog: schemas.BlogCreate):
    db_blog = models.Blog(title=blog.title, content=blog.content, image_url=blog.image_url)
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return db_blog


def get_blogs(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Blog).order_by(models.Blog.created_at.desc()).offset(skip).limit(limit).all()


def get_blog(db: Session, blog_id: int):
    return db.query(models.Blog).filter(models.Blog.id == blog_id).first()


def update_blog(db: Session, blog_id: int, update_data: dict):
    db_blog = get_blog(db, blog_id)
    if not db_blog:
        return None
    # only update provided fields
    if 'title' in update_data and update_data['title'] is not None:
        db_blog.title = update_data['title']
    if 'content' in update_data and update_data['content'] is not None:
        db_blog.content = update_data['content']
    if 'image_url' in update_data and update_data['image_url'] is not None:
        db_blog.image_url = update_data['image_url']
    db.add(db_blog)
    db.commit()
    db.refresh(db_blog)
    return db_blog


def delete_blog(db: Session, blog_id: int):
    db_blog = get_blog(db, blog_id)
    if not db_blog:
        return False
    db.delete(db_blog)
    db.commit()
    return True
