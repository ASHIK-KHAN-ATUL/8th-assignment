import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-7 justify-center items-center mt-20">
            <h2 className="text-3xl md:text-5xl xl:text-7xl  font-bold ">Page Not Found</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-red-500">Status : 404</h3>
            <Link to="">
                <button className="p-5 bg-red-600 hover:bg-violet-500 hover:scale-110 transition-transform rounded-xl text-xl text-black hover:text-white font-bold" >Back to Home </button>
            </Link>
        </div>
    );
};

export default ErrorPage;