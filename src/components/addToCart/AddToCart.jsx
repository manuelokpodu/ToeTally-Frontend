import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OfferForYou from "../OfferForYou";
import Alert from "../alert/Alert";

const AddToCart = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [previewImage, setPreviewImage] = useState("");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://backend-toetally.onrender.com/api/products/${productId}`
        );
        if (!response.data) throw new Error("No product found.");
        console.log("Fetched product:", response.data); // Debugging
        setProduct(response.data);
        setPreviewImage(response.data.thumbnail || "");
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    if (productId) fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    if (!product || !product._id) {
      setAlert({ message: "Product information is missing.", type: "error" });
      return;
    }

    if (!selectedSize) {
      setAlert({ message: "Please select a size before adding to cart.", type: "warning" });
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setAlert({ message: "You need to be logged in to add items to the cart.", type: "error" });
      navigate("/login");
      return;
    }

    const cartItem = {
      productId: product._id,
      title: product.title, // Ensure title is included
      quantity: 1,
      size: selectedSize,
    };

    console.log("Sending to cart:", cartItem);

    try {
      const response = await axios.post(
        "https://backend-toetally.onrender.com/api/cart/add",
        cartItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Cart response:", response.data);
      setAlert({ message: "Item added to cart!", type: "success" });
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error.response?.data || error);
      setAlert({ message: error.response?.data?.message || "Failed to add item to cart.", type: "error" });
    }
  };

  if (!product) return <div className="text-center mt-10">Loading product details...</div>;

  return (
    <>
      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

      <div className="bg-[#EBEBEB] w-full mt-3 md:px-4 lg:px-14">
        <div className="flex font-font-family-2  font-bold gap-2 2xl:container px-3  mx-auto py-4">
          <Link to="/" className="text-[#00000073] font-bold no-underline text-[16px]">Home</Link>
          <h4 className="text-[#00000073] text-[12px] mt-[3px] px-2">/</h4>
          <h4 className="text-[16px] font-bold">Back</h4>
        </div>
      </div>

      <div className="mx-auto 2xl:container px-3 lg:w-11/12 mt-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full">
            <div className="bg-[#B5B5B54D] rounded-3xl p-4">
              <img src={previewImage} alt={product.title} className="w-full h-[370px] object-contain" />
            </div>
            <div className="flex gap-2 mt-4 ">
              {product.image?.map((img, index) => (
                <img key={index} src={img} alt="shoe" className="w-16 lg:w-24 xl:w-32 cursor-pointer hover:border-gray-500" onClick={() => setPreviewImage(img)} />
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

            <div className="sm:mt-3 md:mt-6 md:w-5/6">
              <h3>Quantity</h3>
              <div className="grid grid-cols-3 border-[1px] border-black rounded-lg items-center gap-2 mt-2 w-3/6 md:w-3/6 max-w-full">
                <button
                  className="sm:px-3 md:px-4 py-2 flex items-center justify-center rounded-l-lg hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
                <span className="text-lg text-center font-semibold min-w-0 truncate">{quantity}</span>
                <button
                  className="sm:px-3 md:px-4 py-2 flex items-center justify-center rounded-r-lg hover:bg-gray-200"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-3 flex-col">
              <button className="custom-button add-to-cart" onClick={handleAddToCart}>
                Add To Cart
              </button>

              <button
                className="custom-button shop-now mt-3"
                onClick={() => {
                  if (!selectedSize) {
                    setAlert({ message: "Please select a size before purchasing.", type: "warning" });
                    return;
                  }

                  navigate("/checkout", {
                    state: {
                      productId: product._id,
                      title: product.title,
                      price: product.price,
                      size: selectedSize,
                      quantity: quantity,
                      image: product.thumbnail || "",
                    },
                  });
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <OfferForYou />
    </>
  );
};

export default AddToCart;
