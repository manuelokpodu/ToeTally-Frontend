<<<<<<< HEAD
import { vector1, vector2, vector3, vector4 } from "../assets";
import ActionButton from "./ActionButton";

const Subscribe = () => {
  return (
    <>
      <div className="mx-16 mt-16 p-4 d-none d-lg-block">
        <div className="bg-customDarkBlue rounded-5 text-center text-white p-16 position-relative">
          <h1 className="font-family-3 text-6xl">
            Subscribe to our Newsletter
          </h1>
          <p className="font-family-2 w-50 mx-auto mt-4 font-light">
            By providing your email, you agree to the Terms & Conditions and
            Privacy Policy. You may unsubscribe later.
          </p>
          <div className="flex items-center border-[2px] mt-4 text-start ps-4 border w-50 mx-auto border-white rounded-4">
            <input
              type="text"
              placeholder="Email Address"
              className="font-family-2 w-3/4 p-2 bg-[#01497C] text-white placeholder-white outline-none"
            />
            <ActionButton
              variant="none"
              size="lg"
              text="Subscribe"
              style={{
                backgroundColor: "white",
                fontFamily: "Alexandria variable",
                color: "black",
              }}
              className="font-family-2 rounded-4 w-64 py-2 px-4"
            />
          </div>
          <img src={vector1} className="vector-image1" />
          <img src={vector2} className="vector-image2" />
          <img src={vector3} className="vector-image3" />
          <img src={vector4} className="vector-image4" />
        </div>
      </div>

      {/* subsribe with us small screen */}
      <div className="bg-customDarkBlue d-block d-lg-none text-white px-4 py-16 position-relative">
        <h1 className="font-family-3 text-center text-white text-2xl md:text-4xl">
          Subscribe to our Newsletter
        </h1>
        <p className="font-family-2 text-center text-white mt-2 text-xs font-light">
          By providing your email, you agree to the Terms & Conditions and
          Privacy Policy. You may unsubscribe later.
        </p>
        <div className="flex items-center border-[2px] mt-4 text-start ps-4 border mx-auto border-white rounded-4">
          <input
            type="text"
            placeholder="Email Address"
            className="font-family-2 w-4/5 bg-[#01497C] text-white placeholder-white outline-none"
          />
          <ActionButton
            variant="none"
            size="smal"
            text="Subscribe"
            style={{
              backgroundColor: "white",
              fontFamily: "Alexandria variable",
              color: "black",
            }}
            className="font-family-2 rounded-4 w-32 p-2"
          />
        </div>
        <img src={vector1} className="vector-image1S" />
        <img src={vector2} className="vector-image2S" />
        <img src={vector3} className="vector-image3S" />
        <img src={vector4} className="vector-image4S" />
      </div>
    </>
  );
};

export default Subscribe;
=======
import { vector1, vector2, vector3, vector4 } from "../assets";
import ActionButton from "./ActionButton";

const Subscribe = () => {
  return (
    <>
      <div className="mx-16 mt-16 p-4 d-none d-lg-block">
        <div className="bg-customDarkBlue rounded-5 text-center text-white p-16 position-relative">
          <h1 className="font-family-3 text-6xl">
            Subscribe to our Newsletter
          </h1>
          <p className="font-family-2 w-50 mx-auto mt-4 font-light">
            By providing your email, you agree to the Terms & Conditions and
            Privacy Policy. You may unsubscribe later.
          </p>
          <div className="flex items-center border-[2px] mt-4 text-start ps-4 border w-50 mx-auto border-white rounded-4">
            <input
              type="text"
              placeholder="Email Address"
              className="font-family-2 w-3/4 p-2 bg-customDarkBlue text-white placeholder-white outline-none"
            />
            <ActionButton
              variant="none"
              size="lg"
              text="Subscribe"
              style={{
                backgroundColor: "white",
                fontFamily: "Alexandria variable",
                color: "black",
              }}
              className="font-family-2 rounded-4 w-64 py-2 px-4"
            />
          </div>
          <img src={vector1} className="vector-image1" />
          <img src={vector2} className="vector-image2" />
          <img src={vector3} className="vector-image3" />
          <img src={vector4} className="vector-image4" />
        </div>
      </div>

      {/* subsribe with us small screen */}
      <div className="bg-customDarkBlue d-block d-lg-none text-white px-4 py-16 position-relative">
        <h1 className="font-family-3 text-center text-white text-2xl md:text-4xl">
          Subscribe to our Newsletter
        </h1>
        <p className="font-family-2 text-center text-white mt-2 text-xs font-light">
          By providing your email, you agree to the Terms & Conditions and
          Privacy Policy. You may unsubscribe later.
        </p>
        <div className="flex items-center border-[2px] mt-4 text-start ps-4 border mx-auto border-white rounded-4">
          <input
            type="text"
            placeholder="Email Address"
            className="font-family-2 w-4/5 bg-[#01497C] text-white placeholder-white outline-none"
          />
          <ActionButton
            variant="none"
            size="smal"
            text="Subscribe"
            style={{
              backgroundColor: "white",
              fontFamily: "Alexandria variable",
              color: "black",
            }}
            className="font-family-2 rounded-4 w-32 p-2"
          />
        </div>
        <img src={vector1} className="vector-image1S" />
        <img src={vector2} className="vector-image2S" />
        <img src={vector3} className="vector-image3S" />
        <img src={vector4} className="vector-image4S" />
      </div>
    </>
  );
};

export default Subscribe;
>>>>>>> aboutus
