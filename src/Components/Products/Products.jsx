import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { useLoaderData, useParams } from "react-router-dom";
import { data } from "autoprefixer";


const Products = () => {

    const {name} = useParams();
    console.log(name);

    // const [products , setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showAll , setShowAll ] = useState(false);

    useEffect( () => {
        fetch('../productData.json')
        .then(res => res.json())
        .then(data => {  setFilteredProducts(data) ;  

            if(name){
                const filtered = data.filter( product => product.category.toLowerCase() === name.toLowerCase());
                setFilteredProducts(filtered); 
            }
            else{
                setFilteredProducts(data);
            }
            
          } )

    } , [name]);

    const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0 , 12);

    

    return (
        <div>

            {  filteredProducts.length === 0 ? (  <div className="text-center text-xl md:text-3xl font-semibold text-sky-600 pt-28">There are no products available in this category. Coming soon! </div>)  :

                  (<div className="grid place-items-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"> { displayedProducts.map(product => <Product key={product.product_id} product={product}  ></Product> )  } </div>)   
            }

             {!showAll && filteredProducts.length > 12 && (
            <div className="text-center my-6">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 font-semibold transition-transform hover:scale-105 text-white border-2 hover:border-purple-500 hover:bg-transparent shadow-xl hover:text-purple-500 bg-purple-500 rounded-lg"
              >
                See All
              </button>
            </div>
          )}

        </div>
    );
};

export default Products;