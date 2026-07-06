import { useEffect, useState } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";

const HeroBanner = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
	  const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

      const heroContent = {
        bg: "/assets/img/hero/herobackground.png",
        subtitle: "",
        title: "we create identity, clarity, and measurable growth.",
        content:
          "we help you stand out in a crowded digital world and turn visibility into real results.Let’s Grow Your Brand",
        content2:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.",
        img: "/assets/img/hero/hero-text.png",
        review: "450+ reviews",
      };

    return (
      <section
        className="hero-section fix hero-1 bg-cover"
        // data-background={heroContent.bg}
        style={{ backgroundImage: `url(${heroContent.bg})` }}
      >
        <div className="mike-shape">
          <img src="/assets/img/hero/mike-shape.png" alt="img" />
        </div>
        <div className="energy-shape float-bob-y">
          <img src="/assets/img/hero/energy-shape.png" alt="img" />
        </div>
        <div className="rocket-shape">
          <img
            src="/assets/img/hero/rocket.png"
            alt="img"
            className="float-bob-y"
          />
        </div>
        <div className="container-fluid">
          <div
            className="hero-title wow img-custom-anim-left"
            data-wow-duration="1.5s"
            data-wow-delay="0.3s"
          >
            <img src={heroContent.img} alt="img" />
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="hero-content">
                <span
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <span className="hero-responsive-text">At Adyalam,</span> we
                  dont just market
                </span>
                <h3
                  className="wow img-custom-anim-right text-white"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  {heroContent.title}
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  {heroContent.content}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="hero-image">
                <img
                  src="/assets/img/hero/hero-main.webp"
                  alt="Digital marketing success illustration with social media icons around a celebrating person"
                  className="wow img-custom-anim-left"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.3s"
                />
                <div className="bg-shape">
                  <img src="/assets/img/hero/bg-shape.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HeroBanner;