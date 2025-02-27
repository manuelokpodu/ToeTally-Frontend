import { Col, Form, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";
import { formatCurrency, validateFields } from "../utils";
import { Subscribe } from "../components";

const API_BASE_URL = "https://backend-toetally.onrender.com/api";

const Checkout = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserData({
        firstName: storedUser.firstName || "",
        lastName: storedUser.lastName || "",
        email: storedUser.email || "",
      });
    }
  }, []);

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
      console.log("Cart data:", data); // Debugging: Check if product names exist
      setCartData(data.items?.filter(item => item.product) || []);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const totalPrice = cartData.reduce(
    (acc, item) => acc + (item.product?.price || 0) * item.quantity,
    0
  );

  const handlePayWithPaystack = () => {
    const publicKey = "pk_test_690bb0f22bd5050c3c8f6f7181d42a8f58632d97";
    const email = userData.email || "uchemadunmerengwa@gmail.com";
    const amountInKobo = (totalPrice + 5000) * 100;
    const currency = "NGN";
    const reference = `ref_${Math.floor(Math.random() * 1000000000)}`;

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email,
      amount: amountInKobo,
      currency: currency,
      ref: reference,
      callback: function (response) {
        console.log("Payment successful:", response);
        alert(`Payment successful! Transaction reference: ${response.reference}`);
        navigate("/OrderConfirmation");
      },
      onClose: function () {
        console.log("Payment window closed.");
        alert("Payment was not completed.");
      },
    });

    handler.openIframe();
  };

  return (
    <>
      <div style={{ backgroundColor: "#EBEBEB" }}>
        <div className="px-16 py-4 lg:flex gap-3 hidden">
          <Link to="/" className="text-customLightGray font-semibold text-xl font-family-2 no-underline">Home</Link>
          <span className="font-semibold font-family-1 text-xl text-customLightGray">/</span>
          <Link to="/cart" className="font-semibold font-family-2 text-xl text-customLightGray no-underline">Cart</Link>
          <span className="font-semibold font-family-1 text-xl text-customLightGray">/</span>
          <span className="font-semibold font-family-2 text-xl">Checkout</span>
        </div>
      </div>

      <Row>
        <Col md={6} className="d-none d-lg-block" style={{ paddingLeft: "5rem", marginTop: "5rem", marginBottom: "5rem" }}>
          <h1 className="font-family-3 text-5xl text-black">Billing Details</h1>
          <Form className="mt-4">
            <Form.Control {...register("firstName", validateFields.name)} placeholder="First Name" type="text" size="lg" className="font-family-2 ps-4" defaultValue={userData.firstName} />
            <Form.Control {...register("email", validateFields.email)} placeholder="Email Address" type="text" size="lg" className="font-family-2 ps-4 mt-4" defaultValue={userData.email} />
            <Form.Control {...register("lastName", validateFields.name)} placeholder="Last Name" type="text" size="lg" className="font-family-2 ps-4 mt-4" defaultValue={userData.lastName} />
            <Form.Control {...register("country", validateFields.country)} placeholder="Country/region" type="text" size="lg" className="font-family-2 ps-4 mt-4" />
            <Form.Control {...register("address", validateFields.address)} placeholder="Street Address" type="text" size="lg" className="font-family-2 ps-4 mt-4" />
            <Form.Control {...register("city", validateFields.city)} placeholder="Town/city" type="text" size="lg" className="font-family-2 ps-4 mt-4" />
            <Form.Control {...register("state", validateFields.state)} placeholder="State" type="text" size="lg" className="font-family-2 ps-4 mt-4" />
            <Form.Control {...register("phone", validateFields.phone)} placeholder="Phone" type="text" size="lg" className="font-family-2 ps-4 mt-4" />
          </Form>
        </Col>

        <Col md={5} className="d-none d-lg-block" style={{ paddingLeft: "6rem", marginTop: "7rem", marginBottom: "5rem" }}>
          <h1 className="font-family-3 text-4xl text-black">Your Order</h1>
          <hr />
          {loading ? <p>Loading cart items...</p> : cartData.length === 0 ? <p>Your cart is empty.</p> : (
            <>
             {cartData.map(item => (
  <div key={item.product?._id || Math.random()} className="d-flex justify-content-between">
    <p>{item.product?.title || "Unnamed Product"} x{item.quantity}</p> {/* Ensure title is used */}
    <p>{formatCurrency(item.product?.price * item.quantity)}</p>
  </div>
))}

              <hr />
              <div className="d-flex justify-content-between">
                <p>Subtotal</p>
                <p>{formatCurrency(totalPrice)}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Shipping</p>
                <p>(Regular Shipping) {formatCurrency(5000)}</p>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>{formatCurrency(totalPrice + 5000)}</p>
              </div>
              <Button onClick={handlePayWithPaystack} className="btn btn-primary w-100 mt-4">Pay with Paystack</Button>
            </>
          )}
        </Col>
      </Row>
      
      <Subscribe />
    </>
  );
};

export default Checkout;
