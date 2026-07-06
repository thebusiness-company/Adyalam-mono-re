import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Footer1 = () => {

        useEffect(() => {
            loadBackgroudImages();
        }, []);

    return (
      <div>
        <section className="cta-section section-bg section-padding pb-0">
          <div className="rokect-shape float-bob-y">
            <img src="/assets/img/rokect.png" alt="img" />
          </div>
          <div className="container">
            <div
              className="cta-wrapper bg-cover"
              data-background="/assets/img/cta-bg.jpg"
            >
              <div
                className="cta-img wow img-custom-anim-left"
                data-wow-duration="1.5s"
                data-wow-delay="0.3s"
              >
                <img
                  src="/assets/img/stayconnected.webp"
                  alt="Adyalam team helping businesses stay connected with modern IT services"
                />
              </div>
              <h2 className="wow fadeInUp ml-10" data-wow-delay=".3s">
                Stay Connected
              </h2>
              <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                <Link to="/contact">
                  {" "}
                  <span className="theme-btn"> talk to Us </span>
                  <span className="arrow-btn">
                    {" "}
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-section footer-bg fix">
          <div className="container">
            <div className="footer-widgets-wrapper">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <Link to="/">
                        <img
                          src="/assets/img/logo/adyalamlogo.png"
                          alt="adyalam logo"
                          className="footer-logo"
                        />
                      </Link>
                    </div>
                    <div className="footer-content">
                      <div className="social-icon d-flex align-items-center">
                        <a
                          href="https://www.instagram.com/hello.adyalam?igsh=cTY0b3ppbjVxc2Vh"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Adyalam Instagram"
                        >
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCqSUoEqIn69Rxt-yptRIQVw"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Adyalam YouTube"
                        >
                          <i className="bi bi-youtube"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/adyalam-chennai-52645541b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Adyalam Linkedin"
                        >
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Quick Links</h3>
                    </div>
                    <ul className="list-area">
                      <li>
                        <Link to="/ourstory">
                          <i className="bi bi-arrow-right"></i>
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link to="/service">
                          <i className="bi bi-arrow-right"></i>
                          Our Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog">
                          <i className="bi bi-arrow-right"></i>
                          Our Blogs
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq">
                          <i className="bi bi-arrow-right"></i>
                          FAQ’S
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          <i className="bi bi-arrow-right"></i>
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay=".6s"
                ></div>
                <div
                  className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="single-footer-widget">
                    <div className="widget-head">
                      <h3>Contact Us</h3>
                    </div>
                    <div className="footer-content">
                      <ul className="contact-info">
                        <li>
                          <i className="fa-regular fa-envelope"></i>
                          <a href="mailto:hello.adyalam@gmail.com">
                            hello.adyalam@gmail.com
                          </a>
                        </li>
                        <li>
                          <i className="fa-solid fa-phone-volume"></i>
                          <a href="tel:89259 75486">+91 89259 75486</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-wrapper d-flex align-items-center justify-content-between">
                <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                  © All Copyright 2026 by Adyalam
                </p>
                <ul
                  className="footer-menu wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <li>
                    <Link to={"/terms"}>Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to={"/privacy-policy"}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="bi bi-arrow-up"></i>
            </a>
          </div>
        </section>
      </div>
    );
};

export default Footer1;