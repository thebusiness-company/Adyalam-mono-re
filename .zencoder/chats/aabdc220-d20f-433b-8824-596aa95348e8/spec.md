# Technical Specification - Blog Feature Dynamic Implementation

## Technical Context
- **Frontend**: React, React Router DOM
- **Backend**: FastAPI, SQLAlchemy, SQLite
- **Communication**: REST API (fetch)

## Implementation Approach
The goal is to move from static blog data to dynamic data fetched from the backend.

### Frontend Changes:
1.  **AdminBlog.jsx**: Ensure it correctly handles form submission and provides feedback. (Mostly done, might need minor UX tweaks).
2.  **Blog4.jsx**: Replace static `blogContent` array with state fetched from `GET /blogs`. Update `Link` paths to `/blog/:id`.
3.  **Blog3.jsx**: Replace static `blogContent` array with state fetched from `GET /blogs`. Update `Link` paths to `/blog/:id`.
4.  **BlogDetails.jsx**: Already has some dynamic logic, but needs to handle content better (e.g., rendering long text, using the fetched data everywhere).

### Backend Changes:
- None required as the endpoints `POST /blogs`, `GET /blogs`, and `GET /blogs/{id}` are already implemented.

## Source Code Structure Changes
No new files, only modifications to existing components in `frontend/src/Components/Blog/` and `frontend/src/Components/BlogDetails/`.

## Data Model / API / Interface Changes
Existing `Blog` model:
- `id`: Integer
- `title`: String
- `content`: Text
- `image_url`: String
- `created_at`: DateTime

## Verification Approach
1.  **Manual Testing**:
    - Create a blog via `/admin/blogs`.
    - Verify it appears on `/blog`.
    - Click on it and verify details on `/blog/:id`.
2.  **Linting**: Run `npm run lint` if available.
