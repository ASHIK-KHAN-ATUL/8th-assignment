import { Outlet } from "react-router-dom";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";


const ProductsMain = ({}) => {

    return (
        <div className="flex flex-col justify-center items-center relative bottom-16 md:bottom-40 xl:bottom-60">
            <h2 className="text-xl md:text-3xl xl:text-4xl font-medium text-purple-500 text-center ">Explore Cutting-Edge Gadgets</h2>
            <div className=" md:flex w-[85%] mx-auto gap-5  ">
                 <div className=" mb-5  md:w-[30%] lg:w-[22%] xl:w-[18%] mx-auto"><Categories></Categories></div>
                 <div className="  md:w-[70%]  lg:w-[78%] xl:w-[82%] mx-auto"><Products></Products></div>
             </div>
        </div>
    );
};

export default ProductsMain;