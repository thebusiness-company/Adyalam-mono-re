import { useEffect, useRef, useState } from "react";

const Faq = ({addclass}) => {

    const faqContent = [
      {
        title: "Why should I hire a digital marketing agency for my business?",
        content:
          "A digital marketing agency helps you reach the right audience, build visibility, and generate consistent enquiries through structured campaigns. Instead of trial-and-error marketing, you get focused execution that delivers measurable results.",
      },
      {
        title: "What makes Adyalam different from other agencies?",
        content:
          "We focus on practical marketing that drives responses — not just posts or impressions. Our approach combines creative communication, targeted campaigns, and performance tracking to ensure your marketing contributes directly to business growth.",
      },
      {
        title: "Do you work with small businesses or only large companies?",
        content:
          "We work with startups, growing businesses, and established brands. Whether you're building your presence or scaling operations, our services are tailored to match your stage and goals.",
      },
      {
        title: "How soon can I expect results from digital marketing?",
        content:
          "Some channels like Meta Ads, Google Campaigns, and WhatsApp Marketing can generate engagement and enquiries quickly, while SEO builds steady long-term traffic. We balance both for immediate momentum and sustained growth.",
      },
      {
        title: "What services do you offer?",
        content:
          "Our services include: Social Media Management, SEO (Search Engine Optimization), Meta & Google Advertising Campaigns, Content Creation & Ad Creatives, Lead Generation & Conversion Optimization, Email & WhatsApp Marketing, Analytics, Reporting, and Campaign Scaling",
      },
      {
        title: "Do you provide customized marketing plans?",
        content:
          "Yes. Every business is different, so we design campaigns based on your industry, audience, and objectives instead of using one-size-fits-all packages.",
      },
      {
        title: "How do you measure campaign performance?",
        content:
          "We track key metrics such as reach, engagement, leads generated, and conversion rates. You receive clear reports so you always understand how your marketing investment is performing.",
      },
      {
        title: "Can you help if we have never done digital marketing before?",
        content:
          "Absolutely. We guide you from the ground up — setting up platforms, creating content, launching campaigns, and building a consistent online presence.",
      },
      {
        title: "Do you manage both creative work and advertising?",
        content:
          "Yes. We handle everything from communication design and videos to ad execution and optimization, ensuring your brand message stays consistent across all channels.",
      },
      {
        title:
          "Where are you based, and do you work with clients outside the city?",
        content:
          "We are based in Chennai and work with businesses locally and remotely. Digital marketing allows us to support clients across different locations efficiently.",
      },
    ]; 

      const accordionContentRef = useRef(null);
      const [openItemIndex, setOpenItemIndex] = useState(-1);
      const [firstItemOpen, setFirstItemOpen] = useState(true);
    
      const handleItemClick = index => {
        if (index === openItemIndex) {
          setOpenItemIndex(-1);
        } else {
          setOpenItemIndex(index);
        }
      };
      useEffect(() => {
        if (firstItemOpen) {
          setOpenItemIndex(0);
          setFirstItemOpen(false);
        }
      }, [firstItemOpen]);

    return (
      <section className={addclass}>
        <div className="faq-overlay">
          <img src="/assets/img/faq-overlay.png" alt="img" />
        </div>
        <div className="faq-shape">
          <img src="/assets/img/faq-shape.png" alt="img" />
        </div>
        <div className="container terms-padding">
          <div className="faq-wrapper">
            <div className="row g-4 justify-content-between">
              <div className="col-xl-5 col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <div className="sub-title bg-color-2 wow fadeInUp">
                      <span>FAQs</span>
                    </div>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Execute marketing that is agile and
                      performance-driven
                    </h2>
                  </div>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    We are not just another agency - we are your digital growth
                    partners. With years of industry experience and a passion
                    for innovation, our team is dedicated to delivering
                    measurable results propel your business forward.
                  </p>
                  {/* <ul className="faq-list">
                                    <li className="wow fadeInUp" data-wow-delay=".3s">
                                    <i className="bi bi-check-circle"></i>
                                        Top quality service
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay=".5s">
                                    <i className="bi bi-check-circle"></i>
                                        Intermodal Shipping
                                    </li>
                                </ul> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="faq-accordion-items">
                  <div className="faq-accordion">
                    <div className="accordion" id="accordion">
                      {faqContent.map((item, index) => (
                        <div
                          key={index}
                          className={`accordion-item mb-3 ${index === openItemIndex ? "active" : ""}`}
                          data-wow-delay=".3s"
                        >
                          <h5
                            onClick={() => handleItemClick(index)}
                            className="accordion-header"
                          >
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#faq"
                              aria-expanded="true"
                              aria-controls="faq"
                            >
                              {item.title}
                            </button>
                          </h5>
                          <div
                            ref={accordionContentRef}
                            id="faq"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">{item.content}</div>
                          </div>
                        </div>
                      ))}
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

export default Faq;