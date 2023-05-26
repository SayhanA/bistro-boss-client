import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const headerFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    
    return (
        <div className='relative'>
            { headerFooter || <Navbar /> }
            <Outlet />
            { headerFooter || <Footer /> }
            
        </div>
    );
};

export default Main;