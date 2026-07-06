import BreadCumb from "../Components/Common/BreadCumb";
import Faq from "../Components/Faq/Faq";

const FaqPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Faq"
            ></BreadCumb>   
            <Faq addclass="faq-section section-padding"></Faq>        
        </div>
    );
};

export default FaqPage;