import { Dropdown, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets";
import { navItems } from "../utils";
import { CgProfile } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import Drawer from "./Drawer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { MdLogout } from "react-icons/md";

const Nav = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const id = localStorage.getItem("userId");
        console.log("Token:", token);
        console.log("ID:", id);

        if (!token || !id) {
          setUser(null);
          return;
        }
        const response = await axios.get(
          `https://backend-toetally.onrender.com/api/auth/getUser/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Response:", response);
        console.log("User:", response.data);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
        console.log("Component finished rendering");
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUser(null);
    window.location.href = "/";
  };

  const handleBannerClose = () => {
    setBannerVisible(false);
  };

  if (loading) {
    return null;
  }

  return (
    <>
      {bannerVisible && !user && (
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
          <div className="d-flex gap-3 align-items-center">
            {user && (
              <NavLink to="/cart">
                <TbShoppingBag className="text-navIcon text-2xl" />
              </NavLink>
            )}
            {user && (
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="none"
                    id="dropdown-basic"
                    className="d-flex align-items-center"
                  >
                    <CgProfile className="text-navIcon text-2xl me-2" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className="d-flex align-items-center gap-2" style={{ pointerEvents: 'none', cursor: 'default' }}>
                      <span
                        className="text-navIcon font-family-2 text-2xl bg-[#E3F5F6] rounded-5 p-3"
                        style={{ color: "#147C84" }}
                      >
                        {user.user.firstName.charAt(0).toUpperCase()}
                        {user.user.lastName.charAt(0).toUpperCase()}
                      </span>
                      <div className="d-flex flex-column">
                        <span className="font-family-2 text-xl">
                          {user.user.firstName.charAt(0).toUpperCase() +
                            user.user.firstName.slice(1).toLowerCase()}{" "}
                          {user.user.lastName.charAt(0).toUpperCase() +
                            user.user.lastName.slice(1).toLowerCase()}
                        </span>
                        <span className="font-family-2 text-sm">
                          {user.user.email}
                        </span>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={handleLogout}
                      className="d-flex align-items-center gap-2 logout-button"
                    >
                      <MdLogout
                        color="red"
                        size="60px"
                        style={{ backgroundColor: "#FCF0EF" }}
                        className="rounded-5 p-3"
                      />
                      <span className="font-family-2 text-xl text-[red]">
                        Logout
                      </span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
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
      {bannerVisible && !user && (
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
