import BlogsDisplay from "../Components/Home/BlogsDisplay";
import HomeContact from "../Components/Home/HomeContact";
import HeroBanner from "../Components/Home/HeroBanner";
import Marquee1 from "../Components/Home/Marquee1";
import Marquee2 from "../Components/Marquee/Marquee2";
import DMPricing from "../Components/Home/DMPricing";
import WebsitePricing from "../Components/Home/WebsitePricing";
import SuccessStories from "../Components/Home/SuccessStories";
import HomeTestimonials from "../Components/Home/HomeTestimonials";
import WhatWeDo from "../Components/Home/WhatWeDo";
import WhyChooseUs from "../Components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Marquee1 />
      {/* <Marquee2></Marquee2> */}
      <WhatWeDo />
      <BlogsDisplay />
      <SuccessStories />
      <WhyChooseUs />
      <DMPricing CoulmnClass="pricing-section fix section-padding section-bg" />
      <WebsitePricing CoulmnClass="pricing-section fix section-padding section-bg" />
      <HomeTestimonials />
      <HomeContact />
    </div>
  );
};

export default Home;
