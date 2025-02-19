import React, { useState } from "react";
import OfferForYou from "../OfferForYou";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [previewImage, setPreviewImage] = useState("/shoe3.svg");

  const sizes = [10, 10.5, 11, 11.5, 12, 12.5, 8.5];
  const images = ["/shoe4.svg", "/shoe3.svg", "/shoe4.svg", "/shoe5.svg"];

  return (
    <>
      {/* Route History */}
      <div className="bg-[#EBEBEB] w-full mt-3 md:px-4 lg:px-14">
        <div className="flex font-font-family-2  font-bold gap-2 mx-auto 2xl:container px-3 py-4">
          <Link to="/" className="text-[#00000073] font-bold no-underline text-[16px]">Home</Link>
          <h4 className="text-[#00000073] text-[12px] mt-[3px] px-2">/</h4>
          <h4 className="text-[16px] font-bold">Back</h4>
        </div>
      </div>

      <div className=" mx-auto 2xl:container px-3 mt-4">
        <div className="grid md:px-6 lg:px-12 grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Preview */}
          <div className="w-full">
            <div className="bg-[#B5B5B54D] rounded-3xl p-4">
              <img src={previewImage} alt="Preview" className="w-full h-[370px] object-contain" />
            </div>
            <div className="flex w-full gap-2 mt-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="shoe"
                  className="w-16 md:w-20 md:h-20 lg:w-32 cursor-pointer border-2 border-transparent hover:border-gray-500"
                  onClick={() => setPreviewImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="font-font-family-2">
            <h1 className="text-2xl font-bold">ADIDAS LITE RACER</h1>
            <h3 className="text-gray-600 text-[18px]">ADIDAS</h3>
            <img src="/stars.svg" alt="stars" className="my-2" />
            <h1 className="text-[#01497C] text-xl font-semibold text-[36px]">₦60,000</h1>

            {/* Color & Size Selection */}
            <div className="">
              <h3 className="text-[22px] mt-[34px]">Colour</h3>
              <h3 className="text-[#5C5C5C] text-[22px]">Black</h3>
              <div className="mt-2">
                <h3 className="text-[22px] sm:mt-2 md:mt-4">Size</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-[12px] py-2 border-[1px] border-[#464646] rounded-md transition duration-300 ease-in-out ${selectedSize === size ? "border-blue-500 text-white bg-[#01497C]" : "border-gray-300 hover:border-blue-500"}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
<div className="sm:mt-3 md:mt-6 md:w-5/6">
  <h3>Quantity</h3>
  <div className="grid grid-cols-3 border-[1px] border-black rounded-lg items-center gap-2 mt-2 w-3/6 md:w-3/6 max-w-full">
    <button
      className="sm:px-3 md:px-4 py-2 flex items-center justify-center rounded-l-lg hover:bg-gray-200"
      onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
    >
      -
    </button>
    <span className="text-lg text-center font-semibold min-w-0 truncate">
      {quantity}
    </span>
    <button
      className="sm:px-3 md:px-4 py-2 flex items-center justify-center rounded-r-lg hover:bg-gray-200"
      onClick={() => setQuantity((prev) => prev + 1)}
    >
      +
    </button>
  </div>
</div>


            {/* Buttons */}
            <div className="mt-3 md:mt-4 flex-col"> 
            <button className="px-6 py-2 border-[1px] border-[#01497C66] bg-[#ffffff] rounded-md w-full transition-all duration-300 ease-in-out hover:bg-blue-100  hover:border-[#01497C] text-[#01497C]">Add To Cart</button>

              <button className="px-6 py-2 mt-3 md:mt-4 bg-[#01497C] text-white rounded-md w-full transition-all duration-300 ease-in-out hover:bg-[#356d9f] hover:shadow-lg">Shop Now</button>
            </div>

          </div>
        </div>
      </div>

      <div className="2xl:container mx-auto px-3 mt-8 font-font-family-2">
        <div className="md:px-6 lg:px-14">

        <h1 className="text-[28px]">Product Details</h1>

<div className="mt-3">
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -ml-4 gap-1">
    <li className="font-semibold"><span className="px-1">• </span>Regular fit</li>
    <li className="font-semibold"><span className="px-1">• </span>Lace closure</li>
    <li className="font-semibold"><span className="px-1">• </span>Imported</li>
    <li className="font-semibold"><span className="px-1">• </span>Textile and suede upper</li>
    <li className="font-semibold"><span className="px-1">• </span>Product code: JI2572</li>
    <li className="font-semibold"><span className="px-1">• </span>Product color: Core Black / Gold Metallic</li>
    <li className="font-semibold"><span className="px-1">• </span>Rubber cupsole</li>
    <li className="font-semibold"><span className="px-1">• </span>Textile lining</li>
  </ul>

</div>

        </div>
        
      </div>


      <div className="2xl:container mx-auto px-3 mt-8 font-font-family-2">
        <div className=" md:px-6 lg:px-14">

        <h1 className="text-[28px]">Description</h1>

<p className="mt-3">These iconic Gazelle shoes get a creative Liberty London makeover. These sneakers are refreshed with a vibrantly printed textile and suede upper, putting everyday street style into a floral state of mind. Their rich history inspires a sense of sporty nostalgia, while Liberty London's artistic influence injects freshness. </p>


        </div>
       
      </div>


      <div className="2xl:container mx-auto px-3 mt-8 font-font-family-2">
        <div className="md:flex md:justify-between md:px-6 lg:px-14">

        <div>
          <h1 className="text-[28px]">Shipping</h1>

          <p className="mt-3 font-semibold">You'll see our shipping options at 
          checkout.</p>
        </div>


        <div className="">
          <img src="/cartimg.svg" alt="cart image" className="w-[400px] md:w-[350px] lg:w-[450px] xl:w-[550px]" />
        </div>


        </div>
        

      </div>



      <div>
        <OfferForYou/>
      </div>




      <div className="px-3">

      <div className="text-[#808080] font-font-family-2 grid grid-cols-1 md:grid-cols-3 py-12 md:px-6 lg:px-14  2xl:container mx-auto w-full max-w-[1390px]">
  
  <div className="md:flex md:gap-3 items-center justify-center text-center md:text-left">
    <div>
      <img src="/bef1.svg" alt="icon" className="w-10 md:w-[70px] mx-auto md:mt-4" />
    </div>
    <div className="fast">
      <h2 className="text-[17px] mt-2 font-bold">Fast & Free Shipping</h2>
      <p className="text-[12px] sm:mt-2 w-4/5 md:w-5/6 mx-auto md:mx-0">
        Every single order ships for free. No extra credit needed.
      </p>
    </div>
  </div>

  
  <div className="lg:border-x-[1px] lg:border-[#808080] px-2 md:flex md:gap-3 items-center justify-center text-center md:text-left">
    <div>
      <img src="/bef2.svg" alt="icon" className="w-10 md:w-[50px] mx-auto md:mt-4" />
    </div>
    <div className="fast">
      <h2 className="text-[17px] mt-2 font-bold">30 Days Returns Policy</h2>
      <p className="text-[12px] sm:mt-2 w-4/5 md:w-5/6 mx-auto md:mx-0">
        Product returns are accepted within 30 days.
      </p>
    </div>
  </div>

 
  <div className="md:flex md:gap-3 items-center justify-center text-center md:text-left">
    <div>
      <img src="/bef3.svg" alt="icon" className="w-10 md:w-[50px] mx-auto md:mt-4" />
    </div>
    <div className="fast">
      <h2 className="text-[17px] mt-2 font-bold">Top Quality Products</h2>
      <p className="text-[12px] sm:mt-2 w-4/5 md:w-5/6 mx-auto md:mx-0">
        We always provide high quality shoes.
      </p>
    </div>
  </div>
</div>



      </div>




      


    </>
  );
};

export default AddToCart;
