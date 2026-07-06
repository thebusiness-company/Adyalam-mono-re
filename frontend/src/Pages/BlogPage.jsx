import Blog from "../Components/Blog/Blog";
import BreadCumb from "../Components/Common/BreadCumb";

const BlogPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/breadcrumb.jpg"
                Title="Blog"
            ></BreadCumb>     
            <Blog></Blog>       
        </div>
    );
};

export default BlogPage;