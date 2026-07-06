import { Outlet } from 'react-router-dom';
import Header2 from '../Components/Header/Header2';
import Footer2 from '../Components/Footer/Footer2';
import ScrollToTop from '../Components/Common/ScrollToTop';

const Layout2 = () => {
    return (
        <div className='main-page-area2'>
            <ScrollToTop />
            <Header2 />
            <Outlet />
            <Footer2 />
        </div>
    );
};

export default Layout2;