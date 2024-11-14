import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = ({  }) => {

    const [isActive ,setIsActive] = useState({
        cart : true,
        status:"cart"
      })
      const handleIsActive = (status) => {
        if(status === "cart"){
          setIsActive({
            cart : true,
            status:"cart"
          })
        }
        else {
          setIsActive({
            cart: false,
            status:"wishlist"
          });
        }
    
      };


  return (

        <div>
            <div className="bg-purple-500 pt-14 p-10 md:pt-16 xl:pt-28 md:pb-32 xl:pb-64 md:px-24 xl:px-48  flex flex-col gap-6 justify-center items-center text-center font-semibold ">

                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold pt-6 xl:pt-0 text-white"> Dashboard</h1>

                <p className=" xl:mx-20 text-white font-medium"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className=" gap-4 flex flex-col md:flex-row font-medium  ">
                <Link to="dashboard/cart"><button onClick={() => handleIsActive('cart')} className={`${isActive.cart ?'bg-white text-purple-500': 'bg-transparent text-white border-2 border-white'} py-3 px-14 rounded-full transition-transform hover:scale-110`} >Cart</button></Link>
                <Link to="dashboard/wishlist" > <button onClick={() => handleIsActive('wishlist')} className={`${isActive.cart ?'bg-transparent text-white border-2 border-white': 'bg-white text-purple-500'} py-3 px-14 rounded-full transition-transform hover:scale-110   `} >Wishlist</button></Link>
                
                </div>
            </div>

            <Outlet></Outlet>
    

        </div>


  );
};
export default Dashboard;
