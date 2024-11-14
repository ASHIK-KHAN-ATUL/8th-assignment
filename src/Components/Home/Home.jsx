import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import ProductsMain from "../ProductsMain/ProductsMain";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductsMain></ProductsMain>            
        </div>
    );
};

export default Home;