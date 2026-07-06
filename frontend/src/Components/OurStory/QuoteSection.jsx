import Slider from "react-slick";

const QuoteSection = () => {
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

  const testimonialContent = [
    {
      img: "/assets/img/quotes/einstein.png",
      subtitle: "Theoretical physicist",
      title: "Albert Einstein",
      content: " Creativity is intelligence having fun.",
    },
    {
      img: "/assets/img/quotes/henryford.png",
      subtitle: "American industrialist and business magnate",
      title: "Henry Ford",
      content:
        " Stopping advertising to save money is like stopping your watch to save time.",
    },
  ];

  return (
    <section className="testimonial-section-3 section-padding pt-0 mt-80">
      <div className="overlay-shape">
        <img src="/assets/img/testimonial/overlay-shape.png" alt="img" />
      </div>
      <div className="overlay-shape-2">
        <img src="/assets/img/testimonial/overlay-shape-2.png" alt="img" />
      </div>
      <div className="left-shape">
        <img src="/assets/img/testimonial/left-shape.webp" alt="img" />
      </div>
      <div className="right-shape">
        <img src="/assets/img/testimonial/right-shape.png" alt="img" />
      </div>
      <div className="container">
        <div className="testimonial-wrapper-3">
          <div className="client-1">
            <img src="/assets/img/testimonial/dec80top.webp" alt="img" />
          </div>
          <div className="client-2">
            <img src="/assets/img/testimonial/dec60.webp" alt="img" />
          </div>
          <div className="client-3">
            <img src="/assets/img/testimonial/dec56.webp" alt="img" />
          </div>
          <div className="client-4">
            <img src="/assets/img/testimonial/dec80bottom.webp" alt="img" />
          </div>
          <div className="swiper testimonial-slider-2">
            <div className="swiper-wrapper">
              <Slider {...settings}>
                {testimonialContent.map((item, i) => (
                  <div key={i} className="swiper-slide">
                    <div className="testimonial-content">
                      <div className="icon">
                        <img
                          src="/assets/img/testimonial/quote.png"
                          alt="img"
                        />
                      </div>
                      <p>{item.content}</p>
                      <div className="client-info">
                        <div className="client-img">
                          <img src={item.img} alt={item.title} />
                        </div>
                        <div className="content">
                          <h6>{item.title}</h6>
                          <span>{item.subtitle}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;