import { NavLink } from "react-router-dom";


const Category = ({category}) => {

    const {id , name} = category;



    return (
        <NavLink to={`/category/${name}`} className={`text-start font-medium text-sm py-3 px-7 bg-purple-50 rounded-full hover:bg-purple-600 hover:text-white hover:scale-110 transition-transform duration-300 ease-in-out `}>
            <button  className=" ">  {name} </button>
        </NavLink>
    );
};

export default Category;