import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../api/blogApi";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";


const BlogsDisplay = () => {
  const [blogs, setBlogs] = useState([]);
    const [activeBlog, setActiveBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // useEffect(() => {
    //     document.querySelectorAll('.box').forEach(box => {
    //         box.addEventListener('mouseenter', function () {
    //             document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
    //             this.classList.add('active');
    //         });
    //     });
    // }, []);

    useEffect(() => {
      const loadBlogs = async () => {
          try {
            const data = await fetchBlogs();
            if (Array.isArray(data)) {
              setBlogs(data);
              if (data.length > 0) {
                setActiveBlog(data[data.length - 1].id);
              }
            } else {
              setBlogs([]);
              console.error("Invalid blogs data format:", data);
            }
          } catch (error) {
            console.error("Failed to load blogs:", error);
          } finally {
            setLoading(false);
          }
      };

      loadBlogs();
    }, []);

    console.log("blogs: ", blogs);

      if (loading) return <div>Loading...</div>;
      if (!Array.isArray(blogs) || !blogs.length) return <div>No blogs found</div>;

      const defaultBlog = blogs[0];

    console.log("BASE URL:", import.meta.env.VITE_API_BASE_URL);

    const truncateTitle = (title, wordLimit = 4) => {
      if (!title) return "";

      const words = title.split(" ");
      if (words.length <= wordLimit) return title;

      return words.slice(0, wordLimit).join(" ") + "...";
    };

    return (
      <section className="case-study-section fix section-padding2">
        <div className="overlay-shape">
          <img src="/assets/img/case-studies/overlay-shape.png" alt="img" />
        </div>
        <div className="left-shape float-bob-x">
          <img src="/assets/img/case-studies/left-shape.png" alt="img" />
        </div>
        <div className="right-shape float-bob-x">
          <img src="/assets/img/case-studies/right-shaape.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>Blogs</span>
              </div>
              <h2 className="wow fadeInUp " data-wow-delay=".3s">
                We Are A Creative Digital <br />
                Marketing Agency
              </h2>
            </div>
            <div className="main-button wow fadeInUp" data-wow-delay=".5s">
              <Link to="/ourstory">
                {" "}
                <span className="theme-btn"> EXPLORE MORE </span>
                <span className="arrow-btn">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="case-study-wrapper">
            <div className="row">
              <div className="col-xxl-6 wow fadeInUp">
                <div className="case-study-box-items">
                  <div
                    className="thumb"
                    onClick={() => navigate(`/blog/${defaultBlog.id}`)}
                  >
                    <img
                      src={`${API_BASE_URL}${encodeURI(defaultBlog.image_url)}`}
                      alt="blog image"
                    />
                    {/* <h3 className="project-title p-8 text-white">
                      {defaultBlog?.title}
                    </h3> */}
                    <span className="project-title blog-title-primary">
                      {defaultBlog?.title}
                    </span>
                    <span className="number">01</span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="main-box">
                  {blogs.slice(1).map((blog, index) => (
                    <div
                      key={blog.id}
                      onClick={() => navigate(`/blog/${blog.id}`)}
                      className={`box wow fadeInUp ${activeBlog === blog.id ? "active" : ""} `}
                      data-wow-delay={`.${index * 2}s`}
                      onMouseEnter={() => setActiveBlog(blog.id)}
                      style={{
                        backgroundImage: `url(${API_BASE_URL}${encodeURI(blog.image_url)})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        cursor: "pointer",
                      }}
                    >
                      {/* {activeBlog !== blog.id && (
                        <div className="blur-overlay"></div>
                      )} */}
                      <div className="title-items">
                        <p
                          className={`blog-display-text-xs ${activeBlog === blog.id ? "active-title" : ""}`}
                        >
                          <Link to={`blog/${blog.id}`}>
                            {truncateTitle(blog.title, 6)}
                          </Link>
                        </p>
                        <span className="number">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="number-hover">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <div className="project-content">
                        <span className="blog-title">{blog.title}</span> <br />
                        Read More <i className="bi bi-arrow-right"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BlogsDisplay;