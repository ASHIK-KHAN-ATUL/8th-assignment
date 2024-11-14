

const SingleCartProduct = ({singleCartProduct}) => {

    console.log(singleCartProduct)
    return (
        <div>
        <div className="p-6 border-2 rounded-2xl mt-6  flex justify-between items-center bg-green-100 bg-opacity-40 backdrop-blur-lg mb-10">
                <div className="flex justify-between items-center gap-6">
                        <div className="h-20 w-20">
                            <img className="  object-cover object-top rounded-xl" src={singleCartProduct.image} alt="" />
                        </div>
                        <div>
                            <p className=" font-medium text-lg md:font-bold md:text-2xl pb-3">{singleCartProduct.product_title}</p>
                            <p className="text-sm">{singleCartProduct.description}</p>
                            <p className="font-medium text-lg md:font-bold md:text-xl text-gray-500">{singleCartProduct.price}</p>
                        </div>
                </div>
                <div className="h-9 w-9">
                        <button >
                            <img className="object-cover" src="https://img.icons8.com/?size=100&id=102350&format=png&color=000000" alt="" />
                        </button>
                </div>
        </div>
    </div>
    );
};

export default SingleCartProduct;