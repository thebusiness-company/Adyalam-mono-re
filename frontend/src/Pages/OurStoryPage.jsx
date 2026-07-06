import OurStory from "../Components/OurStory/OurStory";
import BreadCumb from "../Components/Common/BreadCumb";
import YTVideo from "../Components/OurStory/YTVideo";
import OurApproach from "../Components/OurStory/OurApproach";
import QuoteSection from "../Components/OurStory/QuoteSection";

const OurStoryPage = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/breadcrumb.jpg"
        Title="Our Story"
      ></BreadCumb>
      <OurStory addclass="about-section-2 fix section-padding" />
      <YTVideo />
      <OurApproach />
      <QuoteSection />
    </div>
  );
};

export default OurStoryPage;
