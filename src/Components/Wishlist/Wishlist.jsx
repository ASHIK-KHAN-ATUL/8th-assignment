import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredWishList } from "../../utility/addToDb";
import SingleWishProduct from "../SingleWishProduct/SingleWishProduct";


const Wishlist = () => {

    const [wishList , setWishList] = useState([]);

    const allProducts = useLoaderData();

    useEffect( () => {
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));


        const wishLProductList = allProducts.filter(product => storedWishListInt.includes(product.product_id))
        
        setWishList(wishLProductList)
    } ,[])

    return (
        <div className="w-[85%] mx-auto pt-11">

        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold md:font-bold md:text-3xl">Wish-List</h1>
           
        </div>

        <div>
                {
                    wishList.map(singleWishProduct => 
                    <SingleWishProduct singleWishProduct={singleWishProduct} 
                    key={singleWishProduct.product_id}> </SingleWishProduct> )
                }
        </div>
    </div>
    );
};

export default Wishlist;