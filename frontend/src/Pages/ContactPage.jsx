import BreadCumb from "../Components/Common/BreadCumb";
import ContactInfo from "../Components/Contact/ContactInfo";

const ContactPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Contact Us"
            ></BreadCumb>  
            <ContactInfo></ContactInfo>            
        </div>
    );
};

export default ContactPage;