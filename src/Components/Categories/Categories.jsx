import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import { Link } from "react-router-dom";


const Categories = () => {

    const [categorires , setCategorires] = useState([]);

    useEffect( () => { 
        fetch('./categories.json')
        .then(res => res.json())
        .then(data => setCategorires(data))
        console.log(data)
    } ,[])


    return (
        <div className="mt-6">

            <div className="bg-purple-200 shadow-lg p-5 md:flex md:flex-col md:gap-6 rounded-2xl grid  grid-cols-2 gap-4 ">
            <Link to="../" > <button className="py-3 w-full px-7 bg-sky-400 rounded-full hover:scale-110 hover:bg-purple-500 transition-transform font-medium text-sm ">All Product</button></Link>
                { 
                    categorires.map(category => <Category 
                        key={category.id} 
                        category={category}></Category> )
                }
            </div>
        </div>
    );
};

export default Categories;
