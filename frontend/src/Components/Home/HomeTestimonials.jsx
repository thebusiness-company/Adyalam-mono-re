import { useRef } from "react";
import Slider from "react-slick";

const HomeTestimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

      const sliderRef = useRef(null);

      const next = () => {
        sliderRef.current.slickNext();
      };
    
      const previous = () => {
        sliderRef.current.slickPrev();
      }; 

    const testimonialContent = [
      {
        img: "/assets/img/testimonial/usericon.jpeg",
        title:
          "“We finally found the best digital marketing agency in Chennai.”",
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

    const chooseContent = {
      list1: " Strong brand recognition",
      list2: "Consistent online presence",
      list3: "Better-qualified leads",
      list4: "Clear return on marketing investment",
      list5: "Sustainable growth",
    };

    return (
      <section className="testimonial-section fix section-padding">
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="section-title-area">
              <div className="section-title">
                <div className="sub-title bg-color-2 wow fadeInUp">
                  <span>TESTIMONIALS</span>
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  What You Can Expect <br /> With Adyalam, you gain
                </h2>
              </div>
              <div className="list-items wow fadeInUp" data-wow-delay=".3s">
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z"
                        fill="#6A47ED"
                      />
                    </svg>
                    {chooseContent.list1}
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z"
                        fill="#6A47ED"
                      />
                    </svg>
                    {chooseContent.list2}
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z"
                        fill="#6A47ED"
                      />
                    </svg>
                    {chooseContent.list3}
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z"
                        fill="#6A47ED"
                      />
                    </svg>
                    {chooseContent.list4}
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z"
                        fill="#6A47ED"
                      />
                    </svg>
                    {chooseContent.list5}
                  </li>
                </ul>
                <ul></ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-4">
                <div
                  className="testimonial-left wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="client-img"></div>
                  <div
                    className="array-button wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <button onClick={previous} className="array-prev">
                      <i className="bi bi-arrow-left"></i>
                    </button>
                    <button onClick={next} className="array-next">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-xl-10 col-lg-8">
                <div className="swiper testimonial-slider">
                  <div className="swiper-wrapper cs_slider_gap_30">
                    <Slider ref={sliderRef} {...settings}>
                      {testimonialContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                          <div className="testimonial-box-items">
                            <div className="icon">
                              <img
                                src="/assets/img/testimonial/icon.png"
                                alt="img"
                              />
                            </div>
                            <div className="testimonial-img">
                              <img
                                src={item.img}
                                alt="img"
                                className="object-cover"
                              />
                              <div className="shape-img">
                                <img
                                  src="/assets/img/testimonial/shape.png"
                                  alt="img"
                                />
                              </div>
                            </div>
                            <div className="content">
                              <div className="client-info">
                                <h6 className="mt-14">{item.title}</h6>
                                <span>{item.subtitle}</span>
                              </div>
                              <p>{item.content}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HomeTestimonials;