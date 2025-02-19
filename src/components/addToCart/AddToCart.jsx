import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OfferForYou from "../OfferForYou";

const AddToCart = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://backend-toetally.onrender.com/api/products/${productId}`);
        if (!response.data) throw new Error("No product found.");
        setProduct(response.data);
        setPreviewImage(response.data.thumbnail || "");
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (productId) fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    try {
      await axios.post("https://backend-toetally.onrender.com/api/cart/add", {
        productId: product._id,
        quantity: 1,
      });
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  if (!product) return <div className="text-center mt-10">Loading product details...</div>;

  return (
    <>
      <div className="bg-[#EBEBEB] w-full mt-3 md:px-4 lg:px-14">
        <div className="flex font-bold gap-2 mx-auto px-3 py-4">
          <Link to="/" className="text-[#00000073] text-[16px]">Home</Link>
          <h4 className="text-[#00000073] text-[12px] mt-[3px] px-2">/</h4>
          <h4 className="text-[16px] font-bold">Back</h4>
        </div>
      </div>

      <div className="mx-auto container px-3 mt-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full">
            <div className="bg-[#B5B5B54D] rounded-3xl p-4">
              <img src={previewImage} alt={product.title} className="w-full h-[370px] object-contain" />
            </div>
            <div className="flex gap-2 mt-4">
              {product.image?.map((img, index) => (
                <img key={index} src={img} alt="shoe" className="w-16 cursor-pointer hover:border-gray-500" onClick={() => setPreviewImage(img)} />
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <h3 className="text-gray-600 text-[18px]">{product.productTag}</h3>
            <h1 className="text-[#01497C] text-xl font-semibold text-[36px]">₦{product.price?.toLocaleString()}</h1>

            <h3 className="text-[22px] mt-[34px]">Colour</h3>
            <h3 className="text-[#5C5C5C] text-[22px]">{product.color}</h3>

            <div className="mt-2">
              <h3 className="text-[22px] sm:mt-2 md:mt-4">Size</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.size?.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md ${selectedSize === size ? "border-blue-500 bg-[#01497C] text-white" : "border-gray-300 hover:border-blue-500"}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3 flex-col">
              <button className="px-6 py-2 bg-[#01497C] text-white rounded-md w-full" onClick={handleAddToCart}>Add To Cart</button>
              <button className="px-6 py-2 mt-3 bg-[#01497C] text-white rounded-md w-full">Shop Now</button>
            </div>

            <div className="mt-6">
              <h3 className="text-[22px] font-bold">Product Details</h3>
              <ul className="list-disc pl-5">
                {product.productDetails?.map((detail, index) => (
                  <li key={index} className="text-gray-700 text-[16px]">{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <OfferForYou />
    </>
  );
};

export default AddToCart;
