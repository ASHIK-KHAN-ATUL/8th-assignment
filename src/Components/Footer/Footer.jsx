

const Footer = () => {
    return (
        <footer className=" bg-slate-100 w-full  text-black">
            <div className="text-center p-10">
              <h1 className="text-4xl font-semibold">Gadget Heaven </h1>
              <p className="font-medium pt-5">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="  p-10  grid  grid-cols-2 md:grid-cols-3 place-content-center gap-5">
              <nav className="flex flex-col">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Product Support</a>
                <a className="link link-hover">Order Tracking</a>
                <a className="link link-hover">Shipping & Delivery</a>
                <a className="link link-hover">Returns</a>
              </nav>
              <nav className="flex flex-col">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Contact</a>
              </nav>
              <nav className="flex flex-col">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
              </nav>
            </div>
        </footer>
    );
};

export default Footer;