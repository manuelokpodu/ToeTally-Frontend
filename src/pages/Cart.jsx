import { Link, useNavigate } from "react-router-dom";
import { ActionButton, Subscribe } from "../components";
import { useState, useEffect } from "react";
import { cartImg } from "../assets";
import { Col, Image, Row } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { formatCurrency } from "../utils";
import { FaArrowRight } from "react-icons/fa6";
import { GoTag } from "react-icons/go";

const API_BASE_URL = "https://backend-toetally.onrender.com/api";

const Cart = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
          credentials: "include", // Ensure cookies/session are sent
        });
        const data = await response.json();
        setCartData(data.items || []);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCart();
  }, []);

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/update/${productId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ quantity }),
      });
      if (response.ok) {
        setCartData((prev) =>
          prev.map((item) =>
            item.product._id === productId ? { ...item, quantity } : item
          )
        );
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeItem = async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/remove/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (response.ok) {
        setCartData((prev) => prev.filter((item) => item.product._id !== productId));
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const totalPrice = cartData.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <>
      <div style={{ backgroundColor: "#EBEBEB" }}>
        <div className="px-16 py-4 lg:flex gap-3 hidden">
          <Link to="/" className="text-customLightGray font-semibold text-xl font-family-2 no-underline">
            Home
          </Link>
          <span className="font-semibold text-customLightGray font-family-1 text-xl">/</span>
          <span className="font-semibold font-family-2 text-xl">Cart</span>
        </div>
      </div>

      <h1 className="py-3 lg:px-16 md:px-3 font-family-3 lg:text-5xl text-black hidden lg:block">Your Cart</h1>

      <Row>
        <Col md={12} lg={7} style={{ paddingLeft: "5rem" }}>
          <div className="border rounded-3 p-4">
            {cartData.map((item, index) => (
              <div key={item.product._id}>
                <div className="d-flex gap-2">
                  <Image src={item.product.image || cartImg} />
                  <div className="d-flex flex-column gap-3" style={{ width: "100%" }}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="font-family-2 text-xl">{item.product.name}</span>
                      </div>
                      <RiDeleteBinFill color="red" onClick={() => removeItem(item.product._id)} style={{ cursor: "pointer" }} size="20px" />
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="font-family-2 text-2xl">{formatCurrency(item.product.price)}</p>
                      <div className="border-2 d-flex align-items-center rounded-3 gap-8 p-2">
                        <FaMinus onClick={() => updateQuantity(item.product._id, Math.max(1, item.quantity - 1))} style={{ cursor: "pointer" }} />
                        {item.quantity}
                        <FaPlus onClick={() => updateQuantity(item.product._id, item.quantity + 1)} style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                  </div>
                </div>
                {index < cartData.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </Col>

        <Col md={12} lg={5} style={{ paddingRight: "5rem" }}>
          <div className="border rounded-4 p-3">
            <h1 className="font-family-3 text-4xl">Order Summary</h1>
            <div className="d-flex justify-content-between font-family-2 text-xl">
              <p className="text-gray-400">Subtotal</p>
              {formatCurrency(totalPrice)}
            </div>
            <div className="d-flex justify-content-between font-family-2 text-xl">
              <p className="text-gray-400">Delivery Fee</p>
              {formatCurrency(5000)}
            </div>
            <hr />
            <div className="d-flex justify-content-between font-family-2 text-2xl">
              <p>Total</p>
              {formatCurrency(totalPrice + 5000)}
            </div>
            <ActionButton
              variant="none"
              size="md"
              text="Go to Checkout"
              style={{ backgroundColor: "#01497C", color: "white" }}
              hoverStyle={{ backgroundColor: "white", color: "#01497C", border: "1px solid #01497C" }}
              className="font-family-2 rounded-5 w-100 p-2 my-3"
              onClick={() => navigate("/checkout")}
            />
          </div>
        </Col>
      </Row>

      <Subscribe />
    </>
  );
};

export default Cart;
