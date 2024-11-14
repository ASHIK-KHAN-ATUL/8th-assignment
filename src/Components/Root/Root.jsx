import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Helmet } from 'react-helmet';


const Root = () => {

    const location = useLocation();
    const path = location.pathname;

    return (
        <div >
            <Helmet>
                <title>{path}||Gadget Heaven</title>
            </Helmet>
    
            <div className=" mx-auto">
                <Navbar></Navbar>
                <Outlet ></Outlet>              
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;