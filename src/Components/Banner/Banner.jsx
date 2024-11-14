import BannerImage from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <div className=' relative bottom-20'>
      <div className="p-2 text-white text-center  rounded-[32px] backdrop-blur-lg bg-white/50 ">

        <div className="bg-purple-500 pt-14 p-10 md:pt-16 xl:pt-28 md:pb-32 xl:pb-64 md:px-24 xl:px-48 rounded-[32px] flex flex-col gap-6 justify-center items-center   ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold pt-6 xl:pt-0">
            Upgrade Your Tech Accessories with Gadget Heaven
          </h1>
          <p className=" xl:mx-20">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="text-purple-600 font-medium hover:scale-110 transition-transform duration-300 ease-in-out bg-white py-4 px-7 rounded-full">
            Shop Now
          </button>
        </div>

      </div>
            <div className="  w-[70%] mt-4 xl:mt-0  mx-auto p-2 backdrop-blur-lg bg-white/20 rounded-3xl relative bottom-12 md:bottom-36 xl:bottom-64">
                <img className=' md:h-[300px] lg:h-[350px] xl:h-[450px] w-full object-cover rounded-3xl' src={BannerImage} alt="" />
            </div>
    </div>
  );
};

export default Banner;
