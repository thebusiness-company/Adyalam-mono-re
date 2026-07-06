import BreadCumb from "../Components/Common/BreadCumb";
import DMPricing from "../Components/Home/DMPricing";
import WebsitePricing from "../Components/Home/WebsitePricing";
import Services from "../Components/Services/Services";
// import TalkToUs from "../Components/Services/TalkToUs"; 
import HappyClients from "../Components/Services/HappyClients";

const ServicesPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/breadcrumb.jpg" Title="Our Services" />
      <Services />
      <DMPricing CoulmnClass="pricing-section section-padding" />
      <WebsitePricing CoulmnClass="pricing-section section-padding" />
      {/* <TalkToUs /> */}
      <HappyClients />
    </div>
  );
};

export default ServicesPage;
