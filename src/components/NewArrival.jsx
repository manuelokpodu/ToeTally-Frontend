import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";
import ActionButton from "./ActionButton";
import { formatCurrency } from "../utils";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://backend-toetally.onrender.com/api/products"
        );
        setProducts(response.data);
      } catch (error) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (productId) => {
    if (!productId) {
      console.error("Product ID is missing!");
      return;
    }
    navigate(`/addtocart/${productId}`); // Navigate with product ID
  };

  return (
    <div className="mt-24 d-none d-lg-block pl-16">
      <h1 className="font-family-3 text-5xl text-black">NEW ARRIVALS</h1>
      <h2 className="font-family-4 text-4xl">Fresh Looks, New Moves.</h2>

      {loading && <Spinner animation="border" />}
      {error && <p className="text-danger">{error}</p>}

      <div className="mt-4 d-flex gap-8 align-items-center text-sm font-family-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
        {!loading &&
          !error &&
          products.map((item) => (
            <Card
              key={item._id || item.id}
              className="flex-shrink-0 border-0 pb-4 hover-brightness"
              style={{
                width: "22rem",
                minHeight: "30rem",
                backgroundColor: "#B5B5B51A",
              }}
            >
              <div style={{ height: "15rem", width: "auto" }}>
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  className="object-fit-contain p-2"
                  style={{ height: "15rem" }}
                />
              </div>
              <Card.Body>
                <Card.Text className="font-family-2 fw-bold text-xl">
                  {item.title}
                </Card.Text>
                <Card.Text className="font-family-2 fw-medium text-xl">
                  {item.productTag} | {item.color}
                </Card.Text>
                <hr className="border-2" />
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="font-family-2 fw-bold text-xl mb-0">
                    {formatCurrency(item.price)}
                  </Card.Text>
                  <ActionButton
                    variant="none"
                    size="md"
                    text="Buy Now"
                    style={{
                      backgroundColor: "#01497C",
                      fontFamily: "Alexandria variable",
                    }}
                    className="font-family-2 buy-now-button rounded-1 w-32 text-white p-2"
                    onClick={() => handleClick(item._id || item.id)}
                  />
                </div>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default NewArrival;
