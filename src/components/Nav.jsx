import { Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { navItems } from "../utils";
import { CgProfile } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import Drawer from "./Drawer";

const Nav = () => {
  return (
    <>
      <header className="outline outline-navOutline px-2 d-none d-md-block">
        <div className="d-flex justify-content-between  align-items-center p-4 ">
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
                    : "text-customBlue no-underline"
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
              <NavLink to="/profile">
                <CgProfile className="text-navIcon text-2xl" />
              </NavLink>
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
    </>
  );
};

export default Nav;
