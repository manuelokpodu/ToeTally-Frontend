import { Card, Image } from "react-bootstrap";
import { formatCurrency } from "../utils";
import ActionButton from "./ActionButton";
import { discountBadge } from "../assets";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const brandLogos = {
  "LOUIS VUITTON": "/LOUIS_VUITTON.svg",
  "ADIDAS": "/ADIDAS.svg",
  "BALENCIAGA": "/BALENCIAGA.svg",
  "NIKE": "/NIKE.svg",
  "Christian Louboutin": "/Christian_Louboutin.png",
  "Skechers": "/Skechers.svg",
  "UNDER ARMOUR": "/UNDER_ARMOUR.svg",
};

const Discount = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://backend-toetally.onrender.com/api/products");
        const shuffledProducts = response.data.sort(() => Math.random() - 0.5);
        setProducts(shuffledProducts);
        
        console.log("Fetched Products:", shuffledProducts);
      } catch (error) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleClick = (productId) => {
    navigate(`/addtocart/${productId}`);
  };

  return (
    <div className="mt-24 d-none d-lg-block pl-16">
      <h1 className="font-family-3 text-5xl text-black">DISCOUNT OFFERS</h1>
      <div className="mt-4 d-flex gap-8 align-items-center text-sm font-family-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
        {loading && <p>Loading...</p>}
        {error && <p className="text-danger">{error}</p>}
        {!loading &&
          !error &&
          products.map((item) => (
            <Card
              key={item._id || item.id}
              className="flex-shrink-0 border-0 pb-4 hover-brightness position-relative"
              style={{
                width: "22rem",
                minHeight: "30rem",
                backgroundColor: "#B5B5B51A",
              }}
            >
              {item.discount && (
                <div
                  className="font-family-4 text-4xl position-absolute"
                  style={{
                    width: "200px",
                    height: "70px",
                    left: "-20px",
                    top: "10px",
                    backgroundImage: `url(${discountBadge})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    color: "white",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.discount}
                </div>
              )}
              <div style={{ height: "15rem", width: "auto" }}>
                <Card.Img
                  variant="top"
                  src={item.thumbnail}
                  className="object-fit-contain p-2"
                  style={{ height: "15rem" }}
                />
              </div>

              {/* Render Brand Logos */}
              {item.brand && brandLogos[item.brand] && (
                <div className="mt-2">
                  <Image src={brandLogos[item.brand]} alt={`${item.brand} Logo`} style={{ height: "50px" }} />
                </div>
              )}

              <Card.Body>
                <Card.Text className="font-family-2 fw-bold text-xl">{item.title}</Card.Text>
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

export default Discount;
