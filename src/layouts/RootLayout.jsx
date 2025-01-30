import { Outlet } from "react-router-dom";
import { Nav } from "../components";
import { BsInstagram } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { Image } from "react-bootstrap";
import { whiteLogo } from "../assets";

const RootLayout = () => {
  return (
    <div className="w-full mx-auto 2xl:container">
      <Nav />
      <Outlet />
      <footer className=" bg-black text-white px-4">
        <div className="px-4 py-16 d-none d-md-flex justify-content-between">
          <div className="d-lg-flex d-none gap-2 flex-column justify-content-center">
            <div className="d-flex align-items-center gap-2">
              <Image src={whiteLogo} />
              <span className="font-family-1 font-bold fs-5">TOETALLY</span>
            </div>
            <div className="d-flex gap-4">
              <BsInstagram size="25px" />
              <FaSnapchat size="25px" />
              <AiOutlineFacebook size="25px" />
              <FaXTwitter size="25px" />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-start">
            <h5 style={{ fontFamily: "Averia Serif Libre" }}>Company</h5>
            <p className="mt-4 font-family-2 font-extralight">About Us</p>
            <p className="font-family-2 font-extralight">FAQ</p>
            <p className="font-family-2 font-extralight">Contact</p>
            <a href="/Login" className="font-family-2 font-extralight">login</a>
          </div>
          <div className="d-flex flex-column justify-content-start">
            <h5 style={{ fontFamily: "Averia Serif Libre" }}>Legal</h5>
            <p className="mt-4 font-family-2 font-extralight">Privacy policy</p>
            <p className="font-family-2 font-extralight">
              Terms and Conditions
            </p>
            <p className="font-family-2 font-extralight">Cookie policy</p>
          </div>
          <div className="d-flex flex-column justify-content-start">
            <h5 style={{ fontFamily: "Averia Serif Libre" }}>Help</h5>
            <p className="mt-4 font-family-2 font-extralight">
              Shipping and delivery
            </p>
            <p className="font-family-2 font-extralight">Return policy</p>
            <p className="font-family-2 font-extralight">
              Payment and security
            </p>
          </div>
          <div className="d-flex flex-column justify-content-start">
            <h5 style={{ fontFamily: "Averia Serif Libre" }}>Shop</h5>
            <p className="mt-4 font-family-2 font-extralight">Men</p>
            <p className="font-family-2 font-extralight">Women</p>
            <p className="font-family-2 font-extralight">Kids</p>
            <p className="font-family-2 font-extralight">Sales</p>
          </div>
        </div>
        {/* small screen */}
        <div className="d-md-none d-block px-2 py-8">
          <div className=" flex-wrap gap-3  d-flex ">
            <div className="d-flex flex-column justify-content-start">
              <h5
                style={{ fontFamily: "Averia Serif Libre" }}
                className="text-lg"
              >
                Company
              </h5>
              <p className=" font-family-2 font-light text-sm">About Us</p>
              <p className="font-family-2 font-light text-sm">FAQ</p>
              <p className="font-family-2 font-light text-sm">Contact</p>
            </div>
            <div className="d-flex flex-column justify-content-start">
              <h5
                style={{ fontFamily: "Averia Serif Libre" }}
                className="text-lg"
              >
                Legal
              </h5>
              <p className="font-family-2 font-light text-sm">
                Privacy policy
              </p>
              <p className="font-family-2 font-light text-sm">
                Terms and Conditions
              </p>
              <p className="font-family-2 font-light text-sm">
                Cookie policy
              </p>
            </div>
            <div className="d-flex flex-column justify-content-start">
              <h5
                style={{ fontFamily: "Averia Serif Libre" }}
                className="text-lg"
              >
                Shop
              </h5>
              <p className="font-family-2 font-light text-sm">Men</p>
              <p className="font-family-2 font-light text-sm">Women</p>
              <p className="font-family-2 font-light text-sm">Kids</p>
              <p className="font-family-2 font-light text-sm">Sales</p>
            </div>
            <div className="d-flex flex-column justify-content-start">
              <h5
                style={{ fontFamily: "Averia Serif Libre" }}
                className="text-lg"
              >
                Help
              </h5>
              <p className="font-family-2 font-light text-sm">
                Shipping and delivery
              </p>
              <p className="font-family-2 font-light text-sm">
                Return policy
              </p>
              <p className="font-family-2 font-light text-sm">
                Payment and security
              </p>
            </div>
          </div>
          <div className="d-flex mt-3 d-md-none gap-2 flex-column justify-content-center">
            <div className="d-flex align-items-center gap-2">
              <Image src={whiteLogo} />
              <span className="font-family-1 font-bold text-lg">TOETALLY</span>
            </div>
            <div className="d-flex gap-4">
              <BsInstagram size="25px" />
              <FaSnapchat size="25px" />
              <AiOutlineFacebook size="25px" />
              <FaXTwitter size="25px" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
