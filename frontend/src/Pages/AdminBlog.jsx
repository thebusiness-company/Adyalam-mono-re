import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");

  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // ===============================
  // Fetch Blogs
  // ===============================
  const fetchBlogs = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs`);
      const data = await res.json();
          console.log(data);
          console.log(`${API_BASE_URL}/blogs`);
      setBlogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ===============================
  // Reset Form
  // ===============================
  const resetForm = () => {
    setTitle("");
    setContent("");
    setImageUrl("");
    setFile(null);
    setEditingId(null);
  };

  // ===============================
  // Create or Update
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const form = new FormData();
      form.append("title", title);
      form.append("content", content);
      if (file) form.append("image", file);
      if (imageUrl) form.append("image_url_form", imageUrl);

      let res;
      const token = localStorage.getItem("token");

      if (editingId) {
        // UPDATE
        res = await fetch(`${API_BASE_URL}/blogs/${editingId}`, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          body: form,
        });
      } else {
        // CREATE
        res = await fetch(`${API_BASE_URL}/blogs`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          body: form,
        });
      }

      if (!res.ok) throw new Error("Operation failed");

      setSuccess(editingId ? "Blog updated successfully" : "Blog created successfully");

      resetForm();
      fetchBlogs();

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // Edit Blog
  // ===============================
  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setImageUrl(blog.image_url || "");
    setEditingId(blog.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ===============================
  // Delete Blog
  // ===============================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/blogs/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Delete failed");

      fetchBlogs();
    } catch (err) {
      alert("Delete error");
    }
  };

  return (
    <div className="container py-5">
      {/* Admin Navigation */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 pb-3 border-bottom gap-3">
        <h2 className="m-0 fw-bold text-primary">Adyalam Control Panel</h2>
        <div className="d-flex align-items-center gap-3">
          <div className="nav nav-pills">
            <Link to="/admin/blogs" className="nav-link active">Manage Blogs</Link>
            <Link to="/admin/contacts" className="nav-link">Contact Submissions</Link>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/admin/login";
            }}
            className="btn btn-outline-danger"
          >
            Logout
          </button>
        </div>
      </div>

      <h2>{editingId ? "Update Blog" : "Create Blog Post"}</h2>

      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL (optional)</label>
          <input
            className="form-control"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Or Upload Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
            accept="image/*"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Saving..." : editingId ? "Update Blog" : "Create Blog"}
        </button>

        {editingId && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={resetForm}
          >
            Cancel
          </button>
        )}

        {success && <div className="mt-3 text-success">{success}</div>}
        {error && <div className="mt-3 text-danger">{error}</div>}
      </form>

      {/* 👉 FORMAT NOTE */}
      <div className="format-guide">
        <p className="format-guide-title">Formatting Guide:</p>

        <p>
          • Use{" "}
          <span className="format-highlight">
            --&gt; Heading (double dash followed by greater than symbol at the
            beginning of text)
          </span>{" "}
          for main headings
        </p>

        <p>
          • Use{" "}
          <span className="format-highlight">
            Text: (colon symbol at the end of text)
          </span>{" "}
          for subheadings
        </p>

        <p>
          • No need to leave blank lines after headings or subheadings. Leave
          a blank line only if you want additional spacing between paragraphs.
        </p>

        <div className="format-example">
          <strong>Example:</strong>

          <pre className="format-example-code">
            {`--> Section Title
Subheading:
Paragraph text here...`}
          </pre>
        </div>
      </div>

      {/* ================= BLOG LIST ================= */}
      <hr className="my-5" />

      <h4>All Blogs</h4>

      <div className="list-group">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{blog.title}</strong>
            </div>

            <div>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => handleEdit(blog)}
              >
                Edit
              </button>

              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {blogs.length === 0 && (
          <div className="text-muted">No blogs available</div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;