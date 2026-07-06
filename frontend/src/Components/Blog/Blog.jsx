import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../api/blogApi";
import { API_BASE_URL } from "../../config";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (loading) return <p className="text-center mt-5">Loading blogs...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <section className="news-section section-padding fix">
      <div className="container">
        <div className="row g-4">
          {blogs.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="news-box-items mt-0">
                <div className="news-image">
                  <img
                    src={
                      item.image_url
                        ? `${API_BASE_URL}${item.image_url}`
                        : "/assets/img/news/01.jpg"
                    }
                    alt={item.title}
                  />
                </div>

                <div className="news-content">
                  <ul className="post-cat">
                    <li>
                      {new Date(item.created_at).toLocaleDateString()}
                    </li>
                  </ul>

                  <h5>
                    <Link to={`/blog/${item.id}`}>
                      {item.title}
                    </Link>
                  </h5>

                  <div className="news-btn">
                    <Link
                      to={`/blog/${item.id}`}
                      className="link-btn"
                    >
                      Read More <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {blogs.length === 0 && (
            <p className="text-center">No blogs available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;