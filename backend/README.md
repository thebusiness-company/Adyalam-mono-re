Simple FastAPI backend for Digtek contact form

Requirements
- Python 3.9+
- PostgreSQL database

Setup
1. Copy `.env.example` to `.env` and set `DATABASE_URL`.
2. Create a Python venv and install dependencies:

```bash
python -m venv .venv
source .venv/bin/activate  # or .venv\\Scripts\\activate on Windows
pip install -r requirements.txt
```

3. Run the server:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Notes
- The app will create the `contacts` table automatically on startup if it doesn't exist.
