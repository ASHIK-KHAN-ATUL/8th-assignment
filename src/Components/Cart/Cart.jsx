import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { getStoredCartList } from "../../utility/addToDb";
import SingleCartProduct from "../SingleCartProduct/SingleCartProduct";

const Cart = () => {

    const [cartList , setCartList] = useState([]);


    const allProducts = useLoaderData();

    useEffect( () => {
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id) );

        console.log(storedCartList, allProducts , storedCartListInt);

        const cartProductList = allProducts.filter(product => storedCartListInt.includes(product.product_id) )

        setCartList(cartProductList)
    } ,[])

    

    return (
        <div className="w-[85%] mx-auto pt-11">

            <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-0">
                <h1 className="text-2xl font-semibold md:font-bold md:text-3xl text-purple-500">Cart : {cartList.length}</h1>
                <div className="flex justify-between gap-4 items-center">
                    <p className="md:text-2xl font-semibold">Total Cost : </p>
                    <button className="flex justify-center items-center border-2 border-purple-500 bg-transparent py-3 px-5 rounded-full font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-200"><p>Sort by price</p> <FaSort /></button>
                    <button className=" border-2 border-purple-500 bg-purple-500 py-3 px-5 rounded-full font-medium transition-transform hover:scale-105 hover:shadow-lg hover:shadow-red-200">Purchase</button>
                </div>
            </div>

            <div>
                {
                    cartList.map(singleCartProduct => 
                    <SingleCartProduct singleCartProduct={singleCartProduct} 
                    key={singleCartProduct.product_id}> </SingleCartProduct> )
                }
            </div>

        </div>
    );
};

export default Cart;
