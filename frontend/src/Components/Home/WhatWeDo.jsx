import { Link } from "react-router-dom";
import parse from 'html-react-parser';

const WhatWeDo = () => {

    const heading = { 
        subtitle:"services",
        title:'Our services',
        content:'Pellentesque ut vehicula sapien <br> dictumst. Maecenas ante.',  
      }

    const whyContent = [
      {
        img: "/assets/img/service/icon-1.png",
        title: "Digital Marketing",
        content: "We connect you with the right audience.",
        list1: "Social media management",
        list2: "Paid advertising (Meta & Google)",
        list3: "Campaign planning",
        list4: "Audience targeting",
      },
      {
        img: "/assets/img/service/icon-2.png",
        title: "Creative & Content",
        content: "We tell your story in a way people remember.",
        list1: "Content creation",
        list2: "Ad creatives",
        list3: "Reels & visual storytelling",
        list4: "Communication design",
      },

      {
        img: "/assets/img/service/icon-3.png",
        title: "Performance Growth",
        content: "We turn marketing into measurable success.",
        list1: "Lead generation",
        list2: "Conversion optimization",
        list3: "Analytics & reporting",
        list4: "Continuous scaling",
      },
    ];  

    return (
      <section className="service-section fix section-padding">
        <div className="left-shape float-bob-y">
          <img src="/assets/img/service/left-shape.png" alt="img" />
        </div>
        <div className="right-shape">
          <img src="/assets/img/service/right-shape.png" alt="img" />
        </div>
        <div className="bg-shape">
          <img src="/assets/img/service/bg-shape.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>{heading.subtitle}</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(heading.title)}
              </h2>
            </div>
            {/* <p className="wow fadeInUp" data-wow-delay=".5s">
              {parse(heading.content)}
            </p> */}
          </div>
          <div className="row justify-content-center">
            {whyContent.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp d-flex"
                data-wow-delay=".3s"
              >
                <div className="service-box-items">
                  <div className="icon">
                    <img src={item.img} alt="img" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link to="/service/service-details">{item.title}</Link>
                    </h4>
                    <p>{item.content}</p>
                    <ul className="common-list">
                      <li>{item.list1}</li>
                      <li>{item.list2}</li>
                      <li>{item.list3}</li>
                      <li>{item.list4}</li>
                    </ul>
                    <Link to="/service" className="link-btn">
                      Read More <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default WhatWeDo;