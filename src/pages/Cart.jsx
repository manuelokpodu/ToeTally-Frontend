import { Subscribe } from "../components";

const Cart = () => {
  return (
    <>
      <div style={{ backgroundColor: "#EBEBEB" }}>
        <div className="px-16 py-4 d-flex gap-3">
          <span className="text-customLightGray font-bold text-xl font-family-2">
            Home
          </span>
          <span className="font-bold font-family-1 text-xl">/</span>
          <span className="font-bold font-family-2 text-xl">Cart</span>
        </div>
      </div>
      <h1 className="py-3 px-16 font-family-3 text-5xl text-black">Your Cart</h1>
      <Subscribe/>

    </>
  );
};

export default Cart;
