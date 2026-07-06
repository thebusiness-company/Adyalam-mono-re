import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config";


const BlogDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/blogs/${id}`);
                if (!res.ok) throw new Error("Not found");

                const data = await res.json();
                setPost(data);
                console.log("Fetched post:", data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchPost();
    }, [id]);

const renderContent = (content) => {
  const lines = content.split(/\r?\n/);

  return lines.map((line, index) => {
    const text = line.trim();

    if (!text) {
      return <div key={index} style={{ height: "16px" }} />;
    }

    if (text.startsWith("-->")) {
      return (
        <h2 key={index} className="blog-section-heading">
          {text.replace("-->", "").trim()}
        </h2>
      );
    }

    if (text.endsWith(":")) {
      return (
        <h4 key={index} className="blog-section-subheading">
          {text.replace(":", "").trim()}
        </h4>
      );
    }

    return (
      <p key={index} className="blog-paragraph">
        {text}
      </p>
    );
  });
};


    return (
      <section className="news-details-section section-padding">
        <div className="container">
          <div className="news-details-wrapper">
            <div className="row g-4">
              <div className="col-12">
                <div className="news-post-details">
                  <div className="single-news-post">
                    {/* Featured Image */}
                    <div className="post-featured-thumb">
                      {loading && (
                        <div className="py-5 text-center">Loading...</div>
                      )}

                      {!loading && error && (
                        <div className="py-5 text-center">Post not found</div>
                      )}

                      {!loading && post && (
                        <img
                          src={
                            post.image_url
                              ? `${API_BASE_URL}${post.image_url}`
                              : "/assets/img/news/details-1.jpg"
                          }
                          alt={post.title}
                          className="w-100"
                        />
                      )}
                    </div>

                    {/* Content */}
                    {!loading && post && (
                      <div className="post-content">
                        <ul className="post-list d-flex align-items-center">
                          {/* <li>
                                                    <i className="fa-regular fa-user"></i>
                                                    By Admin
                                                </li> */}

                          <li>
                            <i className="fa-solid fa-calendar-days"></i>
                            {post.created_at
                              ? new Date(post.created_at).toLocaleDateString()
                              : ""}
                          </li>

                          {/* <li>
                                                    <i className="fa-solid fa-tag"></i>
                                                    {post.category || "General"}
                                                </li> */}
                        </ul>

                        <h3>{post.title}</h3>

                        {/* Blog Content */}
                        <div style={{ whiteSpace: "pre-line" }}>
                          {renderContent(post.content)}
                        </div>

                        {/* Highlight Section (Design Preserved) */}
                        <div className="hilight-text mt-4">
                          <p>
                            At Adyalam, we believe every business deserves a
                            partner who understands its vision, strengthens its
                            presence, and grows with it through every stage of
                            success.
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <path
                              d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
                              stroke="#6A47ED"
                            ></path>
                            <path
                              d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
                              stroke="#6A47ED"
                            ></path>
                          </svg>
                        </div>

                        <div className="pt-5">
                          <Link to="/blog" className="theme-btn">
                            Back to Blogs
                            <i className="fa-solid fa-arrow-right-long"></i>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BlogDetails;