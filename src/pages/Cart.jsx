import { Link } from "react-router-dom";
import { ActionButton, Subscribe } from "../components";
import { useState } from "react";
import { cartImg } from "../assets";
import { Col, Image, Row } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { formatCurrency } from "../utils";
import { FaArrowRight } from "react-icons/fa6";

const Cart = () => {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      image: cartImg,
      name: "Sketchers Stamina Shoe",
      price: 75000,
      quantity: 1,
      size: "Medium",
      color: "grey",
    },
    {
      id: 2,
      image: cartImg,
      name: "Sketchers Stamina Shoe",
      price: 75000,
      quantity: 1,
      size: "Medium",
      color: "grey",
    },
    {
      id: 3,
      image: cartImg,
      name: "Sketchers Stamina Shoe",
      price: 75000,
      quantity: 1,
      size: "Medium",
      color: "grey",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartData((prevCartData) =>
      prevCartData.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartData((prevCartData) =>
      prevCartData.filter((item) => item.id !== id)
    );
  };

  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <div style={{ backgroundColor: "#EBEBEB" }} >
        <div className="px-16 py-4 d-flex gap-3">
          <Link
            to="/"
            className="text-customLightGray font-bold text-xl font-family-2 no-underline"
          >
            Home
          </Link>
          <span className="font-bold font-family-1 text-xl">/</span>
          <span className="font-bold font-family-2 text-xl">Cart</span>
        </div>
      </div>
      <h1 className="py-3 lg:px-16 md:px-3 font-family-3 lg:text-5xl text-black">
        Your Cart
      </h1>
      <Row>
        <Col md={12} lg={7} style={{ paddingLeft: "5rem" }}>
          <div className="border rounded-3 p-4">
            {cartData.map((item, index) => (
              <div key={item.id}>
                <div className="d-flex gap-2">
                  <Image src={cartImg} />
                  <div
                    className="d-flex flex-column gap-3"
                    style={{ width: "100%" }}
                  >
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="font-family-2 text-xl">{item.name}</span>
                        <span className="font-family-2 text-sm">{`Size: ${item.size}`}</span>
                        <span className="font-family-2 text-sm">{`Color: ${item.color}`}</span>
                      </div>

                      <RiDeleteBinFill
                        color="red"
                        onClick={() => removeItem(item.id)}
                        style={{ cursor: "pointer" }}
                        size="20px"
                      />
                    </div>
                    <div className="d-flex justify-content-between ">
                      <p className="font-family-2 text-2xl">{formatCurrency(item.price)}</p>
                      <div className="border-2 d-flex align-items-center rounded-3 gap-8 p-2">
                        <FaMinus
                          onClick={() => decreaseQuantity(item.id)}
                          style={{ cursor: "pointer" }}
                        />
                        {item.quantity}
                        <FaPlus
                          onClick={() => increaseQuantity(item.id)}
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
        <Col md={12} lg={5}  style={{ paddingRight: "5rem" }}>
          <div className="border rounded-4 p-3">
            <h1 className="font-family-3 text-4xl">Order Summary</h1>
            <div className="d-flex justify-content-between font-family-2 text-xl">
              <p>Subtotal</p>
              {formatCurrency(totalPrice)}
            </div>
            <div className="d-flex justify-content-between font-family-2 text-xl">
              <p>Discount (-20%)</p>
              <span style={{ color: "red" }}>{formatCurrency(-25000)}</span>
            </div>
            <div className="d-flex justify-content-between font-family-2 text-xl">
              <p>Delivery Fee</p>
              {formatCurrency(5000)}
            </div>
            <hr />
            <div className="d-flex justify-content-between font-family-2 text-2xl">
              <p>Total</p>
              {formatCurrency(totalPrice)}
            </div>
            <ActionButton
              variant="none"
              size="md"
              text={<span className="d-flex align-items-center gap-2 justify-content-center"><span>Go to Checkout</span><FaArrowRight /></span> }
              style={{
                backgroundColor: "#01497C",
                fontFamily: "Alexandria variable",
                color: "white",
              }}
              hoverStyle={{
                backgroundColor: "white",
                color: "#01497C",
                border: "1px solid #01497C",
              }}
              className="font-family-2 rounded-5 w-100 p-2 mb-3"
            />
          </div>
        </Col>
      </Row>

      <Subscribe />
    </>
  );
};

export default Cart;
