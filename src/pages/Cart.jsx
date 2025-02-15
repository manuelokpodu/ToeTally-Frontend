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
import { GoTag } from "react-icons/go";

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
      <div style={{ backgroundColor: "#EBEBEB" }}>
        <div className="px-16 py-4 lg:flex gap-3 hidden">
          <Link
            to="/"
            className="text-customLightGray font-bold text-xl font-family-2 no-underline"
          >
            Home
          </Link>
          <span className="font-bold font-family-1 text-xl">/</span>
          <span className="font-bold font-family-2 text-xl">Cart</span>
        </div>
        <div className="py-2 px-3  lg:hidden gap-2 flex">
          <Link
            to="/"
            className="text-customLightGray font-bold text-xs md:text-base font-family-2 no-underline"
          >
            Home
          </Link>
          <span className="font-bold font-family-1 text-xs md:text-base">/</span>
          <span className="font-bold font-family-2 text-xs md:text-base">Cart</span>
        </div>
      </div>
      <h1 className="py-3 lg:px-16 md:px-3 font-family-3 lg:text-5xl text-black hidden lg:block">
        Your Cart
      </h1>
      <h1 className=" px-3 font-family-3 text-xl mb-3 text-black lg:hidden block">
        Your Cart
      </h1>
      <Row>
        <Col md={12} lg={7} style={{ paddingLeft: "5rem" }} className="d-none d-lg-block">
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
                        <span className="font-family-2 text-xl">
                          {item.name}
                        </span>
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
                      <p className="font-family-2 text-2xl">
                        {formatCurrency(item.price)}
                      </p>
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

        <Col md={12} lg={7} className="d-block d-lg-none px-4">
          <div className="border rounded-3 p-2">
            {cartData.map((item, index) => (
              <div key={item.id}>
                <div className="d-flex gap-2">
                  <Image src={cartImg} style={{maxWidth: "80px"}}/>
                  <div
                    className="d-flex flex-column gap-2"
                    style={{ width: "100%" }}
                  >
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-column">
                        <span className="font-family-2 text-sm">
                          {item.name}
                        </span>
                        <span className="font-family-2 text-xs">{`Size: ${item.size}`}</span>
                        <span className="font-family-2 text-xs">{`Color: ${item.color}`}</span>
                      </div>

                      <RiDeleteBinFill
                        color="red"
                        onClick={() => removeItem(item.id)}
                        style={{ cursor: "pointer" }}
                        size="15px"
                      />
                    </div>
                    <div className="d-flex justify-content-between ">
                      <p className="font-family-2 text-sm">
                        {formatCurrency(item.price)}
                      </p>
                      <div className="border-2 d-flex align-items-center rounded-3 gap-4 p-1">
                        <FaMinus
                          onClick={() => decreaseQuantity(item.id)}
                          style={{ cursor: "pointer" }}
                          size="10px"
                        />
                        <span className="text-sm">{item.quantity}</span>
                        <FaPlus
                          onClick={() => increaseQuantity(item.id)}
                          style={{ cursor: "pointer" }}
                          size="10px"
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

        <Col md={12} lg={5} style={{ paddingRight: "5rem" }} className="d-none d-lg-block">
          <div className="border rounded-4 p-3">
            <h1 className="font-family-3 text-4xl">Order Summary</h1>
            <div className="d-flex justify-content-between font-family-2 text-xl">
              <p className="text-gray-400">Subtotal</p>
              {formatCurrency(totalPrice)}
            </div>
            <div className="d-flex justify-content-between font-family-2 text-xl">
              <p className="text-gray-400">Discount (-20%)</p>
              <span style={{ color: "red" }}>{formatCurrency(-25000)}</span>
            </div>
            <div className="d-flex justify-content-between font-family-2 text-xl">
              <p className="text-gray-400">Delivery Fee</p>
              {formatCurrency(5000)}
            </div>
            <hr />
            <div className="d-flex justify-content-between font-family-2 text-2xl">
              <p>Total</p>
              {formatCurrency(totalPrice)}
            </div>
            <div className="d-flex gap-4 relative">
              <div className="absolute top-3 left-3">
                <GoTag className="text-gray-500" size="20px" />
              </div>
              <input
                type="text"
                placeholder="Add promo code"
                className="font-family-2 w-2/3 rounded-5 pl-10 py-2 bg-[#F0F0F0] text-gray-500 placeholder-gray-500 outline-none pl-8"
              />
              <ActionButton
                variant="none"
                size="md"
                text="Apply"
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
                className="font-family-2 rounded-5 p-2 w-1/3"
              />
            </div>
            <ActionButton
              variant="none"
              size="md"
              text={
                <span className="d-flex align-items-center gap-2 justify-content-center">
                  <span>Go to Checkout</span>
                  <FaArrowRight />
                </span>
              }
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
              className="font-family-2 rounded-5 w-100 p-2 my-3"
            />
          </div>
        </Col>

        <Col md={12} lg={5} className="d-lg-none d-block px-4 mt-2">
            <h1 className="font-family-3 text-xl">Order Summary</h1>
            <div className="d-flex justify-content-between font-family-2 text-sm">
              <p className="text-gray-400">Subtotal</p>
              {formatCurrency(totalPrice)}
            </div>
            <div className="d-flex justify-content-between font-family-2 text-sm">
              <p className="text-gray-400">Discount (-20%)</p>
              <span style={{ color: "red" }}>{formatCurrency(-25000)}</span>
            </div>
            <div className="d-flex justify-content-between font-family-2 text-sm">
              <p className="text-gray-400">Delivery Fee</p>
              {formatCurrency(5000)}
            </div>
            <hr />
            <div className="d-flex justify-content-between font-family-2 text-base">
              <p>Total</p>
              {formatCurrency(totalPrice)}
            </div>
            <div className="d-flex gap-2 relative">
              <div className="absolute top-2 left-3">
                <GoTag className="text-gray-500" size="15px" />
              </div>
              <input
                type="text"
                placeholder="Add promo code"
                className="font-family-2 w-3/4 text-xs rounded-5 pl-10 bg-[#F0F0F0] text-gray-500 placeholder-gray-500 outline-none"
              />
              <ActionButton
                variant="none"
                size="sm"
                text="Apply"
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
                className="font-family-2 rounded-5 w-1/4"
              />
            </div>
            <ActionButton
              variant="none"
              size="sm"
              text={
                <span className="d-flex align-items-center gap-2 justify-content-center">
                  <span>Go to Checkout</span>
                  <FaArrowRight />
                </span>
              }
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
              className="font-family-2 rounded-5 w-100 mt-3 mb-4"
            />
        </Col>
      </Row>

      <Subscribe />
    </>
  );
};

export default Cart;
