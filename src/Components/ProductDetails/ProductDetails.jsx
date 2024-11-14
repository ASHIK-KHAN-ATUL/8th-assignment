import { useLoaderData, useParams } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { BsHeart } from "react-icons/bs";
import { addToCartList, addWishList } from "../../utility/addToDb";

const ProductDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);

  const data = useLoaderData();

  const product = data.find((product) => product.product_id === id);
  console.log(product);

  const {image, product_title, price, availability , description ,Specification , rating } = product;



  const handleAddToCart = (id) => {
    addToCartList(id)
  }


  const handleWishlist = (id) => {
    addWishList(id)
  }




  return (
    <div className=" ">
      <div className=" text-white text-center   backdrop-blur-lg bg-white/50 ">
        <div className="bg-purple-500 pt-14 p-10 md:pt-16 xl:pt-28 md:pb-32 xl:pb-64 md:px-24 xl:px-48  flex flex-col gap-6 justify-center items-center ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold pt-6 xl:pt-0"> Product Details </h1>
          <p className=" xl:mx-20">  Explore the latest gadgets that will take your experience to the next level. From smart devices to  the coolest accessories, we have it all!
          </p>
        </div>
      </div>


     <div className=" bg-base-200 border-2 border-purple-500 w-[70%] rounded-2xl mx-auto relative bottom-9 md:bottom-28 xl:bottom-36 ">
        <div className="hero-content flex-col lg:flex-row bg-purple-100 rounded-2xl ">
          <div className="  object-cover w-[50%]"> 
                <img src={image} className=" object-cover rounded-lg "/>
          </div>
          <div className="flex flex-col gap-4  py-8">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold">{product_title}</h1>
            <p className="font-medium text-gray-400">Price : ${price}</p>
            <p className={`${availability ? 'bg-green-200 border-green-400 text-green-600': 'bg-red-200 border-red-400 text-red-600' } w-[60%] md:w-[40%] lg:w-[40%] py-2 px-4 rounded-full border-2 font-medium`}  >{availability ? 'In Stock':'Out of Stock' }</p>
            <p className="font-medium text-gray-400">{description}</p>
            <div>
                <p className="text-black font-semibold text-xl">Speccification</p>
                <ol>
                    {Specification.map(spec => (
                        <li className="text-base text-gray-400 pl-4" >*{spec}</li>
                    ))}
                </ol>
            </div>
            <p>Rating</p>
            <div className="flex gap-5 items-center">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-sm font-semibold py-2 px-5 bg-sky-200 rounded-full">{rating}</p>
             </div>
             <div className="flex items-center gap-7">
                <button className="flex items-center gap-2 py-3 px-5 bg-purple-500 rounded-full text-white" onClick={ ()=>handleAddToCart(id)}  >Add to Cart <CgShoppingCart></CgShoppingCart> </button>
                <button onClick={()=>handleWishlist(id)} className="text-2xl bg-sky-200 p-3 rounded-full"><BsHeart></BsHeart></button>
             </div>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default ProductDetails;
