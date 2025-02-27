import { Link, useNavigate } from "react-router-dom";
import { ActionButton, Subscribe } from "../components";
import { useState, useEffect, useCallback } from "react";
import { cartImg } from "../assets";
import { Col, Image, Row } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { formatCurrency } from "../utils";

const API_BASE_URL = "https://backend-toetally.onrender.com/api";

const Cart = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCart = useCallback(async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("No token found. Redirecting to login.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to fetch cart");

      const data = await response.json();
      console.log("Fetched cart data:", data);
      const filteredCartData = data.items?.filter(item => item.product) || [];
      setCartData(filteredCartData);
      localStorage.setItem("cart", JSON.stringify(filteredCartData)); // Store cart data
    } catch (error) {
      console.error("Error fetching cart data:", error);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  
  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartData(prev =>
      prev.map(item =>
        item.product?._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/cart/update/${productId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (!response.ok) throw new Error("Failed to update quantity");
    } catch (error) {
      console.error("Error updating quantity:", error);
      fetchCart();
    }
  };

  const removeItem = async (productId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in localStorage. User may not be authenticated.");
      return;
    }

    console.log(`Attempting to remove product ${productId} from cart`);
    console.log("Token found, sending DELETE request with Authorization header");

    setCartData(prev => prev.filter(item => item.product?._id !== productId));

    try {
      const response = await fetch(`${API_BASE_URL}/cart/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Failed to remove item: ${response.statusText}`);
      }

      console.log(`Product ${productId} removed successfully`);
    } catch (error) {
      console.error("Error removing item:", error);
      fetchCart();
    }
  };

  const totalPrice = cartData.reduce((acc, item) => acc + (item.product?.price || 0) * item.quantity, 0);

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

      <h1 className="py-3 lg:px-16 md:px-3 font-family-3 lg:text-5xl text-black hidden lg:block">
        Your Cart
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : cartData.length === 0 ? (
        <div className="text-center py-5">
          <h2 className="font-family-3 text-2xl">Your cart is empty</h2>
          <ActionButton text="Shop Now" className="mt-3" onClick={() => navigate("/shop")} />
        </div>
      ) : (
        <Row>
          <Col md={12} lg={7} style={{ paddingLeft: "5rem" }}>
            <div className="border rounded-3 p-4">
              {cartData.map((item, index) => (
                <div key={item.product._id}>
                  <div className="d-flex gap-2">
                    <Image
                      src={item.product.thumbnail || item.product.image || cartImg}
                      style={{ maxWidth: "100px", height: "auto" }}
                    />

                    <div className="d-flex flex-column gap-3" style={{ width: "100%" }}>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <span className="font-family-2 text-xl">{item.product.title}</span>
                        </div>
                        <RiDeleteBinFill
                          color="red"
                          onClick={() => removeItem(item.product._id)}
                          style={{ cursor: "pointer" }}
                          size="20px"
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="font-family-2 text-2xl">{formatCurrency(item.product.price)}</p>
                        <div className="border-2 d-flex align-items-center rounded-3 gap-8 p-2">
                          <FaMinus
                            onClick={() => updateQuantity(item.product._id, Math.max(1, item.quantity - 1))}
                            style={{ cursor: "pointer" }}
                          />
                          {item.quantity}
                          <FaPlus
                            onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                            style={{ cursor: "pointer" }}
                          />
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
                text="Go to Checkout"
                className="font-family-2 bg-[#01497C] rounded-5 w-100 p-2 my-3"
                onClick={() => navigate("/checkout")}
              />
            </div>
          </Col>
        </Row>
      )}

      <Subscribe />
    </>
  );
};

export default Cart;
