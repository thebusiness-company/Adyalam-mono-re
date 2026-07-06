import { Link } from "react-router-dom";

const OurStory = ({ addclass }) => {
  const aboutContent = {
    img: "/assets/img/about/ourstory.webp",
    subtitle: "Our Story",
    title: "Lets make something awesome together",
    content:
      "Many businesses struggle not because they lack quality, but because they lack clarity and recognition. Adyalam was founded to solve that gap. We believe marketing should not just promote - it should define who you are and why you matter.",
    icon1: "bi bi-people",
    title2: "Our Philosophy",
    content2:
      "Marketing is not about shouting louder. It’s about being understood faster.",
    subcontent: " When your brand is clear:",
    list1: "Customers trust you",
    list2: "Sales become easier",
    list3: "Growth becomes consistent",
    icon2: "bi bi-pie-chart",
    title3: "Our Mission",
    content3:
      "To help businesses create a strong identity and scale through strategic digital marketing.",
  };

  return (
    <section className={addclass}>
      <div className="bg-shape">
        <img src="/assets/img/about/bg-shape-2.png" alt="" aria-hidden="true" />
      </div>
      <div className="right-shape float-bob-x">
        <img
          src="/assets/img/case-studies/right-shaape.png"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-image">
                <img
                  src={aboutContent.img}
                  alt="Illustration showing business growth and progress through strategic marketing"
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                />
                <div className="box-shape float-bob-y">
                  <img
                    src="/assets/img/about/box-shape-2.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <div className="gap-shape float-bob-x">
                  <img
                    src="/assets/img/about/grap-2.png"
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <Link to="/ourstory" className="circle-button">
                  <i className="bi bi-arrow-up-right"></i>
                  <span className="text-circle">
                    <img
                      src="/assets/img/about/white-text.png"
                      alt=""
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>{aboutContent.subtitle}</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {aboutContent.title}
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  {aboutContent.content}
                </p>
                <div className="icon-items-area">
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="icon">
                                            <i className={aboutContent.icon1}></i>
                                        </div> */}
                    <div className="content">
                      <h3>{aboutContent.title2}</h3>
                      <p>{aboutContent.content2}</p>
                      <p className="mt-2">{aboutContent.subcontent}</p>
                      <ul className="common-list">
                        <li>{aboutContent.list1}</li>
                        <li>{aboutContent.list2}</li>
                        <li>{aboutContent.list3}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                    {/* <div className="icon">
                                            <i className={aboutContent.icon2}></i>
                                        </div> */}
                    <div className="content">
                      <h3>{aboutContent.title3}</h3>
                      <p>{aboutContent.content3} </p>
                    </div>
                  </div>
                </div>
                {/* <div className="about-button">
                                    <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                                        <Link to="/about"> <span className="theme-btn">ABOUT US MORE </span><span className="arrow-btn"><i className="bi bi-arrow-up-right"></i></span></Link>
                                    </div>
                                    <Link to="/about" className="link-btn wow fadeInUp" data-wow-delay=".5s">EXPLORE MORE</Link>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;