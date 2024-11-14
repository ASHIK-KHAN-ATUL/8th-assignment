import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";




const Navbar = () => {


  const location = useLocation();
  const path = location.pathname;

  const links = <>
            <li><NavLink  to="/" >Home</NavLink></li>
            <li><NavLink  to="/statistics" >Statistics</NavLink></li>
            <li><NavLink  to="/dashboard" >Dashboard</NavLink></li>
        </>



  return (
    <div className={`navbar bg-base-100 flex justify-between md:px-18 px-10 pt-7 relative bg-transparent z-10  ${path === '/' ? 'text-white' : 'text-black'}`}>
      <div className="t">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost md:text-3xl font-bold">Gadget Heaven </a>
      </div>
      <div className=" hidden sm:flex">
        <ul className="menu menu-horizontal px-1">
         {links}
        </ul>
      </div>
      <div className=" flex justify-between md:gap-6 gap-3 ">
        <button className= {`md:scale-125 hover:text-violet-500 border-2 text-black rounded-full p-2 bg-white`}> 
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </button>
        <button className=" md:scale-125 hover:text-violet-500 border-2 text-black rounded-full p-2 bg-white"> <FaRegHeart />  </button>
      </div>
    </div>
  );
};

export default Navbar;
