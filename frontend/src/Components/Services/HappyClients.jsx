import { useEffect, useRef } from "react";
import Slider from "react-slick";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const HappyClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const testimonialContent = [
    {
      img: "/assets/img/testimonial/usericon.jpeg",
      title: "“We finally found the best digital marketing agency in Chennai.”",
      subtitle: "Arun Balakrishnan",
      content:
        "After struggling with inconsistent marketing, Adyalam helped us with social media management, SEO, and lead generation. We now receive regular enquiries and have a much stronger online presence.",
    },
    {
      img: "/assets/img/testimonial/usericon.jpeg",
      title: "“Their SEO and Google Ads actually brought us customers.”",
      subtitle: "Deepa Krishnamurthy",
      content:
        "Adyalam optimized our website and ran targeted Google campaigns that improved our search visibility. We started ranking better and saw quality leads coming in within a short time.",
    },
    {
      img: "/assets/img/testimonial/usericon.jpeg",
      title: "“The Meta campaigns and ad creatives made a huge difference.”",
      subtitle: "R. Karthikeyan",
      content:
        " Their Facebook and Instagram marketing helped us reach the right audience. The ad creatives were engaging, and the campaigns generated real conversions, not just likes.",
    },
    {
      img: "/assets/img/testimonial/usericon.jpeg",
      title:
        "“From content creation to WhatsApp marketing, everything worked together.”",
      subtitle: "Anitha Patil",
      content:
        "Adyalam handled our digital marketing end-to-end - reels, content, email marketing, and WhatsApp campaigns. Customers now connect with us faster and more frequently.",
    },
    {
      img: "/assets/img/testimonial/usericon.jpeg",
      title: "“A performance-driven digital marketing partner.”",
      subtitle: "Ann Grace Thomas",
      content:
        "Their team focused on conversion optimization, analytics, and continuous scaling. We always know how our campaigns are performing, and the results are measurable.",
    },
    {
      img: "/assets/img/testimonial/usericon.jpeg",
      title:
        "“They helped us grow with the right mix of SEO, social media marketing, and lead generation.”",
      subtitle: "Vijay Narayanan",
      content:
        "Instead of random promotion, we now have structured campaigns that consistently bring traffic and enquiries to our business.",
    },
    {
      img: "/assets/img/testimonial/usericon.jpeg",
      title:
        "“Professional, responsive, and truly focused on business growth.”",
      subtitle: "Mohammed Idris",
      content:
        "Adyalam combined Google Ads, Meta advertising, and content strategy to give us strong digital visibility. We’ve seen steady improvement in reach, engagement, and sales.",
    },
  ];

  return (
    <section
      className="testimonial-section fix section-padding pt-20 bg-cover mt-60"
      data-background="/assets/img/testimonial/testimonial-bg.jpg"
    >
      <div className="container">
        <div className="testimonial-wrapper-2">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-image">
                <img
                  src="/assets/img/testimonial/testimonials.webp"
                  alt="Illustration showing positive customer testimonials attracting new customers"
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                />
                <div className="rocket-shape">
                  <img src="/assets/img/testimonial/rocket.webp" alt="" />
                </div>
                <div className="msg-shape float-bob-y">
                  <img src="/assets/img/testimonial/msg.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-content">
                <div className="section-title">
                  <div className="sub-title bg-color-2 wow fadeInUp">
                    <span>Testimonials</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Your Marketing Solutions Happy Clients Says?
                  </h2>
                </div>
                <div className="swiper testimonial-slider-3">
                  <div className="swiper-wrapper">
                    <Slider ref={sliderRef} {...settings}>
                      {testimonialContent.map((item, i) => (
                        <div key={i} className="swiper-slide d-flex">
                          <div className="testimonial-card-items d-flex flex-column h-100">
                            <div className="client-info">
                              <div className="client-img">
                                <img src={item.img} alt="img" />
                              </div>
                              <div className="client-content mt-14">
                                <h5>{item.title}</h5>
                                <span>{item.subtitle}</span>
                              </div>
                            </div>
                            <p>{item.content}</p>
                            <div className="icon">
                              <img
                                src="/assets/img/testimonial/icon.png"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
                <div className="array-button">
                  <button onClick={previous} className="array-prev">
                    <i className="bi bi-arrow-up"></i>
                  </button>
                  <button onClick={next} className="array-next">
                    <i className="bi bi-arrow-down"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyClients;