import React, { useState, useEffect } from "react";
import OfferForYou from "../OfferForYou";

const AddToCart = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          size: selectedSize,
          quantity,
        }),
      });
      if (!response.ok) throw new Error("Failed to add to cart");
      alert("Added to cart successfully!");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!product) return <p className="text-center py-10">Product not found</p>;

  return (
    <div className="mx-auto 2xl:container px-3 mt-4">
      <div className="grid md:px-6 lg:px-12 grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full">
          <div className="bg-[#B5B5B54D] rounded-3xl p-4">
            <img src={product.image} alt={product.name} className="w-full h-[370px] object-contain" />
          </div>
        </div>
        <div className="font-font-family-2">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <h3 className="text-gray-600 text-[18px]">{product.brand}</h3>
          <img src="/stars.svg" alt="stars" className="my-2" />
          <h1 className="text-[#01497C] text-xl font-semibold text-[36px]">₦{product.price}</h1>
          <div className="mt-4">
            <h3 className="text-[22px]">Size</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-[12px] py-2 border-[1px] border-[#464646] rounded-md transition duration-300 ease-in-out ${
                    selectedSize === size ? "border-blue-500 text-white bg-[#01497C]" : "border-gray-300 hover:border-blue-500"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h3>Quantity</h3>
            <div className="grid grid-cols-3 border-[1px] border-black rounded-lg items-center gap-2 mt-2 w-3/6">
              <button className="px-4 py-2 hover:bg-gray-200" onClick={() => setQuantity((q) => Math.max(q - 1, 1))}>-</button>
              <span className="text-lg text-center font-semibold">{quantity}</span>
              <button className="px-4 py-2 hover:bg-gray-200" onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
          </div>
          <div className="mt-4 flex-col">
            <button onClick={handleAddToCart} className="px-6 py-2 border-[1px] border-[#01497C66] bg-[#ffffff] rounded-md w-full hover:bg-blue-100 text-[#01497C]">
              Add To Cart
            </button>
            <button className="px-6 py-2 mt-4 bg-[#01497C] text-white rounded-md w-full hover:bg-[#356d9f]">Shop Now</button>
          </div>
        </div>
      </div>
      <OfferForYou />
    </div>
  );
};

export default AddToCart;
