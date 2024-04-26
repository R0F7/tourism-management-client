import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import Footer from '../pages/Footer/Footer';

const Layout = () => {
    return (
        <div >
            <div className='container md:mx-auto md:my-5'>
                <Navbar></Navbar>
            </div>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <div>
                {/* <Footer></Footer> */}
            </div>
        </div>
    );
};

export default Layout;