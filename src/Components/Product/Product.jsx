import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";


const Product = ({ product }) => {
  const {product_id, image, product_title, price } = product;


  return (
    <div className="card card-compact bg-base-100 w-[290px] h-[400px] shadow-xl  p-5 md:scale-90 hover:scale-95 transition-transform duration-300 ease-in-out border-2 border-purple-100 ">
      <figure>
        <img className=" h-full w-full object-cover  border-2 rounded-2xl" src={image} alt="Product" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl font-medium text-black">{product_title}</h2>
        <p className="font-medium text-xl text-gray-500"> Price :{price}k</p>
        <div className="card-actions ">
          <Link to={`/product/${product_id}`} className="btn bg-purple-500 border-2 hover:border-purple-500 rounded-full text-white font-medium hover:bg-transparent hover:text-purple-500 hover:shadow-md hover:shadow-sky-400">View Details</Link>
        </div>
      </div>
    </div>
    
  );
};

export default Product;
