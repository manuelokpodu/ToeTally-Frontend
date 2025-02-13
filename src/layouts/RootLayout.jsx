import { Outlet } from "react-router-dom";
import { Nav } from "../components";
import { BsInstagram } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineFacebook } from "react-icons/ai";
import { Image } from "react-bootstrap";
import { whiteLogo } from "../assets";
import { StoreProvider } from "../store";

const RootLayout = () => {
  return (
    <StoreProvider>
      <div className="w-full mx-auto 2xl:container">
        <Nav />
        <Outlet />
        <footer className="bg-black text-white">
          <div className="lg:p-16 p-8 d-none d-md-flex justify-content-between">
            <div className="d-lg-flex d-none gap-2 flex-column">
              <div className="d-flex align-items-center justify-content-start gap-2">
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
            <div className="d-flex flex-column justify-content-start gap-3">
              <h5 style={{ fontFamily: "Averia Serif Libre" }}>Company</h5>
              <a href="/aboutus" className=" font-family-2 font-extralight text-white no-underline">About Us</a>
              <a href="/faq" className="font-family-2 font-extralight text-white no-underline">FAQ</a>
              <a href="/contact-us" className="font-family-2 font-extralight text-white no-underline">Contact</a>
              
            </div>
            <div className="d-flex flex-column justify-content-start gap-3">
              <h5 style={{ fontFamily: "Averia Serif Libre" }}>Legal</h5>
              <a href="/policy" className="font-family-2 font-extralight text-white no-underline">
                Privacy policy
              </a>
              <a href="/terms" className="font-family-2 font-extralight text-white no-underline">
                Terms and Conditions
              </a>
              <a href="/policy" className="font-family-2 font-extralight text-white no-underline">Cookie policy</a>
            </div>
            <div className="d-flex flex-column justify-content-start gap-3">
              <h5 style={{ fontFamily: "Averia Serif Libre" }}>Help</h5>
              <a href="/shipping" className="font-family-2 font-extralight text-white no-underline">
                Shipping and delivery
              </a>
              <a href="/policy" className="font-family-2 font-extralight text-white no-underline">Return policy</a>
              <a href="/security" className="font-family-2 font-extralight text-white no-underline">
                Payment and security
              </a>
            </div>
            <div className="d-flex flex-column justify-content-start gap-3">
              <h5 style={{ fontFamily: "Averia Serif Libre" }}>Shop</h5>
              <a href="/men" className="font-family-2 font-extralight text-white no-underline">Men</a>
              <a href="/women" className="font-family-2 font-extralight text-white no-underline">Women</a>
              <a href="/kids" className="font-family-2 font-extralight text-white no-underline">Kids</a>
              <a href="/sales" className="font-family-2 font-extralight text-white no-underline">Sales</a>
            </div>
          </div>

          {/* small screen */}
          <div className="d-md-none d-block px-3 py-8">
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
                <span className="font-family-1 font-bold text-lg">
                  TOETALLY
                </span>
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
    </StoreProvider>
  );
};

export default RootLayout;
