import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Footer from '../pages/Footer/Footer';

const Layout = () => {
    return (
        <div >
            <div className='container md:mx-auto mb-5 md:mt-2 md:mb-3 lg:my-5'>
                <Navbar></Navbar>
            </div>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;