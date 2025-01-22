import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { navItems } from "../utils";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";

const Drawer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <IoIosMenu onClick={handleShow} size="30px" className="cursor-pointer" />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div
              className="text-customLightGray rounded-5 p-2 w-64 d-flex align-items-center gap-4 text-lg"
              style={{ backgroundColor: "#EAE9E9" }}
            >
              <IoIosSearch />
              <span>Search</span>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="gap-4 flex-column d-flex text-lg font-family-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-customDarkBlue fw-bold no-underline"
                    : "text-customBlue no-underline"
                }
                onClick={handleClose}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <hr />
          <NavLink
            to="/profile"
            className="no-underline text-black"
            onClick={handleClose}
          >
            <div className="d-flex align-items-center gap-5">
              <span className="font-family-2 text-xl">Profile</span>
              <CgProfile className="text-navIcon text-3xl" />
            </div>
          </NavLink>
          <NavLink
            to="/cart"
            className="no-underline text-black"
            onClick={handleClose}
          >
            <div className="d-flex align-items-center gap-5 mt-3">
              <span className="font-family-2 text-xl">Cart</span>
              <TbShoppingBag className="text-navIcon text-3xl" />
            </div>
          </NavLink>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Drawer;
