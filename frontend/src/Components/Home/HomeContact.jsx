import React, { useState } from "react";
import { API_BASE_URL } from "../../config";
import { Link } from "react-router-dom";
import { digitalMarketingPlans } from "../../Components/PricingDetails/DigitalMarketingPlans";
import { websitePlans } from "../../Components/PricingDetails/WebsitePlans";

const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("subject");
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const [dmPlan, setDmPlan] = useState(null);
  const [websitePlan, setWebsitePlan] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(null);
    setError(null);
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          dmPlan,
          websitePlan,
          accepted,
          message,
        }),
      });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || "Failed to submit");
      }
      setSuccess("Message sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setSubject("subject");
      setDmPlan(null);
      setWebsitePlan(null);
      setAccepted(false);
    } catch (err) {
      setError(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // Name
    const trimmedName = name.trim();

    if (!trimmedName) {
      newErrors.name = "Full name is required";
    } else if (!/^[A-Za-z.\s]+$/.test(trimmedName)) {
      newErrors.name = "Name must contain only letters";
    }

    // Email
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone (Indian format)
    if (!phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    // Subject
    if (subject === "subject") {
      newErrors.subject = "Please select a subject";
    }

    // Checkbox
    if (!accepted) {
      newErrors.accepted = "You must accept the terms";
    }

    setValidationErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <section className="contact-section fix section-padding">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <div className="sub-title bg-color-3 wow fadeInUp">
              <span className="wow fadeInUp">Contact us</span>
            </div>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              How can we help you today?
            </h2>
          </div>
        </div>
        <div className="contact-wrapper">
          <div className="row g-4">
            <div className="col-xl-6">
              <div className="contact-form-area">
                <h3>Get in Touch</h3>
                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label htmlFor="name" className="text-sm">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          aria-invalid={!!validationErrors.name}
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);

                            if (validationErrors.name) {
                              setValidationErrors((prev) => {
                                const updated = { ...prev };
                                delete updated.name;
                                return updated;
                              });
                            }
                          }}
                        />
                        {validationErrors.name && (
                          <small className="text-danger">
                            {validationErrors.name}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label htmlFor="email" className="text-sm">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          aria-invalid={!!validationErrors.email}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);

                            if (validationErrors.email) {
                              setValidationErrors((prev) => {
                                const updated = { ...prev };
                                delete updated.email;
                                return updated;
                              });
                            }
                          }}
                        />
                        {validationErrors.email && (
                          <small className="text-danger">
                            {validationErrors.email}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label htmlFor="phone" className="text-sm">
                          Contact Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={10}
                          minLength={10}
                          placeholder="Phone Number"
                          aria-invalid={!!validationErrors.phone}
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);

                            if (validationErrors.phone) {
                              setValidationErrors((prev) => {
                                const updated = { ...prev };
                                delete updated.phone;
                                return updated;
                              });
                            }
                          }}
                        />
                        {validationErrors.phone && (
                          <small className="text-danger">
                            {validationErrors.phone}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label htmlFor="subject" className="text-sm">
                          Select Subject <span className="text-danger">*</span>
                        </label>
                        <select
                          name="subject"
                          className="single-select"
                          aria-label="Subject"
                          aria-invalid={!!validationErrors.subject}
                          value={subject}
                          onChange={(e) => {
                            setSubject(e.target.value);

                            if (validationErrors.subject) {
                              setValidationErrors((prev) => {
                                const updated = { ...prev };
                                delete updated.subject;
                                return updated;
                              });
                            }
                          }}
                        >
                          <option value="subject" disabled>
                            Subject
                          </option>
                          <option value="reels-visual-storytelling">
                            Reels & Visual Storytelling
                          </option>
                          <option value="ad-creatives">Ad Creatives</option>
                          <option value="meta-campaigns">
                            Meta Campaigns (FB & Insta Ads)
                          </option>
                          <option value="google-campaigns">
                            Google Campaigns
                          </option>
                          <option value="social-media-management">
                            Social Media Management
                          </option>
                          <option value="whatsapp-marketing">
                            WhatsApp Marketing
                          </option>
                          <option value="email-marketing">
                            Email Marketing
                          </option>
                          <option value="seo">SEO</option>
                          <option value="lead-generation">
                            Lead Generation
                          </option>
                          <option value="other">Other</option>
                        </select>
                        {validationErrors.subject && (
                          <small className="text-danger">
                            {validationErrors.subject}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label
                          htmlFor="digital marketing plans"
                          className="text-sm"
                        >
                          Select Digital Marketing Plan{" "}
                          {/* <span className="text-danger">*</span> */}
                        </label>
                        <select
                          name="digital marketing plans"
                          className="single-select"
                          aria-label="digital marketing plans"
                          value={dmPlan || ""}
                          onChange={(e) => {
                            setDmPlan(e.target.value);
                          }}
                        >
                          <option value="">Select plan</option>
                            {Object.keys(digitalMarketingPlans).map((plan) => (
                              <option key={plan} value={plan}>
                                {digitalMarketingPlans[plan].name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-clt">
                        <label htmlFor="website plans" className="text-sm">
                          Select Website Plan{" "}
                        </label>
                        <select
                          name="website plans"
                          className="single-select"
                          aria-label="website plans"
                          value={websitePlan || ""}
                          onChange={(e) => {
                            setWebsitePlan(e.target.value);
                          }}
                        >
                          <option value="" >
                            Select plan
                          </option>
                          {Object.keys(websitePlans).map((plan) => (
                            <option key={plan} value={plan}>
                              {websitePlans[plan].name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-clt">
                        <label htmlFor="message" className="text-sm">
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Messages"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                          checked={accepted}
                          onChange={(e) => {
                            setAccepted(e.target.checked);

                            if (validationErrors.accepted) {
                              setValidationErrors((prev) => {
                                const updated = { ...prev };
                                delete updated.accepted;
                                return updated;
                              });
                            }
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckChecked"
                        >
                          I have read and agree to{" "}
                          <Link to={"/terms"}>terms and conditions</Link>
                        </label>
                        {validationErrors.accepted && (
                          <small className="text-danger d-block mt-1">
                            {validationErrors.accepted}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="theme-btn"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Submit Now"}
                        <i className="bi bi-arrow-right ms-1"></i>
                      </button>
                    </div>
                    {success && (
                      <div className="col-12 mt-2 text-success">{success}</div>
                    )}
                    {error && (
                      <div className="col-12 mt-2 text-danger">{error}</div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contact-map">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d343.6849679652788!2d80.25720787195785!3d12.949342544986216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1772619562678!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="contact-info-wrapper">
                  <h2>Contact Info</h2>
                  <div className="shape-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="39"
                      viewBox="0 0 29 39"
                      fill="none"
                    >
                      <path d="M0 0L29 39V0H0Z" fill="#6A47ED" />
                    </svg>
                  </div>
                  <div className="shape-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="39"
                      viewBox="0 0 29 39"
                      fill="none"
                    >
                      <path d="M29 0L0 39V0H29Z" fill="#6A47ED" />
                    </svg>
                  </div>
                  <div className="contact-info style2">
                    <div className="icon">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <div className="content">
                      <h3>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://maps.app.goo.gl/RUjc3Fvzr3rPSdYB6"
                        >
                          200&201, 1st Floor, 1st Cross Rd, Sri Kapaleeswarar
                          Nagar, Neelankarai, Chennai, Tamil Nadu 600115
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div className="contact-info style2">
                    <div className="icon">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="content">
                      <h3>
                        <a href="tel:89259 75486">+91 89259 75486</a>
                      </h3>
                    </div>
                  </div>
                  <div className="contact-info style2 border-none">
                    <div className="icon">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="content">
                      <h3>
                        <a href="mailto:hello.adyalam@gmail.com">
                          hello.adyalam@gmail.com
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;