import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formatCurrency, validateFields } from "../utils";
import { Subscribe } from "../components";

const Checkout = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {};
  return (
    <>
      <div style={{ backgroundColor: "#EBEBEB" }}>
        <div className="px-16 py-4 lg:flex gap-3 hidden">
          <Link
            to="/"
            className="text-customLightGray font-semibold text-xl font-family-2 no-underline"
          >
            Home
          </Link>
          <span className="font-semibold font-family-1 text-xl text-customLightGray">
            /
          </span>
          <Link
            to="/cart"
            className="font-semibold font-family-2 text-xl text-customLightGray no-underline"
          >
            Cart
          </Link>
          <span className="font-semibold font-family-1 text-xl text-customLightGray">
            /
          </span>
          <span className="font-semibold font-family-2 text-xl">Checkout</span>
        </div>
        <div className="py-2 px-3  lg:hidden gap-2 flex">
          <Link
            to="/"
            className="text-customLightGray font-semibold text-xs md:text-base font-family-2 no-underline"
          >
            Home
          </Link>
          <span className="text-customLightGray font-semibold font-family-1 text-xs md:text-base">
            /
          </span>
          <Link
            to="/cart"
            className="text-customLightGray font-semibold font-family-2 text-xs md:text-base"
          >
            Cart
          </Link>
          <span className="text-customLightGray font-semibold font-family-1 text-xs md:text-base">
            /
          </span>
          <span className="text-customLightGray font-semibold font-family-2 text-xs md:text-base">
            Checkout
          </span>
        </div>
      </div>
      <Row>
        <Col
          md={6}
          style={{
            paddingLeft: "5rem",
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
          className="d-none d-lg-block"
        >
          <h1 className=" font-family-3 text-5xl text-black">
            Billing Details
          </h1>
          <div className="d-flex mt-4 justify-content-between">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Control
                {...register("name", validateFields.name)}
                placeholder="First Name"
                type="text"
                size="lg"
                className="font-family-2 ps-4"
              />
            </Form>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Control
                {...register("name", validateFields.name)}
                placeholder="Last Name"
                type="text"
                size="lg"
                className="font-family-2 ps-4"
              />
            </Form>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Control
              {...register("country", validateFields.country)}
              placeholder="Country/region"
              type="text"
              size="lg"
              className="font-family-2 ps-4"
            />
          </Form>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Control
              {...register("address", validateFields.address)}
              placeholder="Street Address"
              type="text"
              size="lg"
              className="font-family-2 ps-4"
            />
          </Form>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Control
              {...register("city", validateFields.city)}
              placeholder="Town/city"
              type="text"
              size="lg"
              className="font-family-2 ps-4"
            />
          </Form>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Control
              {...register("state", validateFields.state)}
              placeholder="State"
              type="text"
              size="lg"
              className="font-family-2 ps-4"
            />
          </Form>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Control
              {...register("phone", validateFields.phone)}
              placeholder="Phone"
              type="text"
              size="lg"
              className="font-family-2 ps-4"
            />
          </Form>
          <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Form.Control
              {...register("email", validateFields.email)}
              placeholder="Email Address"
              type="text"
              size="lg"
              className="font-family-2 ps-4"
            />
          </Form>
        </Col>
        <Col
          md={5}
          style={{
            paddingLeft: "6rem",
            marginTop: "7rem",
            marginBottom: "5rem",
          }}
          className="d-none d-lg-block"
        >
          <h1 className="font-family-3 text-4xl text-black">Your Order</h1>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <p>Product</p>
              <p>Sketchers Monsters white top shoes x2</p>
            </div>
            <div className="d-flex flex-column">
              <p>Subtotal</p>
              <p>{formatCurrency(225000)}</p>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Subtotal</p>
            <p>{formatCurrency(225000)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Shipping</p>
            <p>(Regular Shipping) {formatCurrency(5000)}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Total</p>
            <p>{formatCurrency(230000)}</p>
          </div>
        </Col>
      </Row>
      <Subscribe/>
    </>
  );
};

export default Checkout;
