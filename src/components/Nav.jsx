import { Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets";
import { navItems } from "../utils";
import { CgProfile } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Drawer from "./Drawer";
import { useState } from "react";
import { useStore } from "../hooks/useStore";

const Nav = () => {
  const { loggedInUser } = useStore();
  const [bannerVisible, setBannerVisible] = useState(true);

  const handleBannerClose = () => {
    setBannerVisible(false);
  };

  return (
    <>
      {console.log("bannerVisible:", bannerVisible)}
      {console.log("loggedInUser:", loggedInUser)}
      {bannerVisible && !loggedInUser && (
        <div className="d-none d-md-flex align-items-center bg-[#000000] py-2 px-20 text-center">
          <div className="flex-grow-1">
            <span className="font-family-2 text-white text-sm">
              {" "}
              Sign up and get 20% off to your first order.{" "}
            </span>
            <Link to="/signup" className="font-family-2 text-white text-sm">
              {" "}
              Sign Up Now{" "}
            </Link>
          </div>
          <IoClose
            color="white"
            onClick={handleBannerClose}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}

      <header className="border-b-2 d-none d-md-block">
        <div className="d-flex justify-content-between align-items-center md:px-3 lg:px-16 py-4 ">
          <NavLink to="/" className="no-underline">
            <div className="d-flex align-items-center gap-2">
              <Image src={logo} />
              <span className="font-family-1 text-black font-bold text-xl">
                TOETALLY
              </span>
            </div>
          </NavLink>

          <div className="d-flex gap-4 align-items-center text-sm font-family-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-customDarkBlue underline"
                    : "text-customLightGray no-underline"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="d-flex align-items-center gap-2">
            <div
              className="text-customLightGray rounded-5 p-2 w-48 d-lg-flex d-none align-items-center gap-4 text-lg"
              style={{ backgroundColor: "#EAE9E9", marginRight: "2rem" }}
            >
              <IoIosSearch />
              <span>Search</span>
            </div>
            <div className="d-flex gap-2 align-items-center">
              <NavLink to="/cart">
                <IoIosSearch className="text-navIcon text-2xl d-lg-none" />
              </NavLink>
              <NavLink to="/cart">
                <TbShoppingBag className="text-navIcon text-2xl" />
              </NavLink>
              {console.log("loggedInUser:", loggedInUser)}
              {loggedInUser && (
                <NavLink to="/profile">
                  <CgProfile className="text-navIcon text-2xl" />
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* small screen */}
      <header className="d-block d-md-none">
        <div className="d-flex justify-content-between align-items-center p-3 ">
          <NavLink to="/" className="no-underline">
            <div className="d-flex align-items-center gap-2">
              <Image src={logo} />
              <span className="font-family-1 text-black font-bold text-base">
                TOETALLY
              </span>
            </div>
          </NavLink>
          <Drawer />
        </div>
      </header>
      {bannerVisible && !loggedInUser && (
        <div className="d-md-none d-flex align-items-center bg-[#000000] text-center py-2 px-4">
          <div className="flex-grow-1">
            <span
              className="font-family-2 text-white"
              style={{ fontSize: "10px" }}
            >
              Sign up and get 20% off to your first order.{" "}
            </span>
            <Link
              to="/signup"
              className="font-family-2 text-white"
              style={{ fontSize: "10px" }}
            >
              Sign Up Now
            </Link>
          </div>
          <IoClose
            color="white"
            onClick={handleBannerClose}
            style={{ cursor: "pointer" }}
          />
        </div>
      )}
    </>
  );
};

export default Nav;
