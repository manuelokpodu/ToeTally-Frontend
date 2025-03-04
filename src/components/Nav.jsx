import { Button, Dropdown, Image, Modal } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { navItems } from "../utils";
import { CgProfile } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import Drawer from "./Drawer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { MdLogout } from "react-icons/md";
import ActionButton from "./ActionButton";

const Nav = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

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
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setUser(null);
    window.location.href = "/";
  };

  if (loading) {
    return null;
  }

  return (
    <>
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
                    <Dropdown.Item
                      className="d-flex align-items-center gap-2"
                      style={{ pointerEvents: "none", cursor: "default" }}
                    >
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
                    <Modal
                      show={showLogoutModal}
                      onHide={() => setShowLogoutModal(false)}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Confirm Logout</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to log out?</Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="secondary"
                          onClick={() => setShowLogoutModal(false)}
                        >
                          Cancel
                        </Button>
                        <Button variant="danger" onClick={handleConfirmLogout}>
                          Logout
                        </Button>
                      </Modal.Footer>
                    </Modal>
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
            {!user && (
              <>
                <NavLink to="/login">
                  <ActionButton
                    variant="none"
                    size="md"
                    text="Login"
                    style={{
                      backgroundColor: "white",
                      fontFamily: "Alexandria variable",
                      color: "black",
                    }}
                    hoverStyle={{
                      backgroundColor: "white",
                      fontFamily: "Alexandria variable",
                      color: "#01497C",
                    }}
                    className="font-family-2 rounded-3 p-2"
                  />
                </NavLink>
                <NavLink to="/signup">
                  <ActionButton
                    variant="none"
                    size="md"
                    text="Sign Up"
                    style={{
                      backgroundColor: "#01497C",
                      fontFamily: "Alexandria variable",
                      color: "white",
                    }}
                    hoverStyle={{
                      backgroundColor: "white",
                      fontFamily: "Alexandria variable",
                      color: "#01497C",
                      border: "1px solid #01497C"
                    }}
                    className="font-family-2 rounded-3 p-2 w-32"
                  />
                </NavLink>
              </>
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
    </>
  );
};

export default Nav;
