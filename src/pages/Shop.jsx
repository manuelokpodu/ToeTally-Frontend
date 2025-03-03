import { Link, useNavigate } from "react-router-dom";
import { ActionButton, Discount, Subscribe } from "../components";
import { Card, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatCurrency } from "../utils";
import { RiArrowDropDownLine } from "react-icons/ri";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://backend-toetally.onrender.com/api/products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBrandClick = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleApplyFilter = () => {
    if (selectedBrands.length === 0) {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) =>
        selectedBrands.includes(product.productTag)
      );
      setFilteredProducts(filteredProducts);
    }
  };

  const handleClick = (productId) => {
    if (!productId) {
      console.error("Product ID is missing!");
      return;
    }
    navigate(`/addtocart/${productId}`); // Navigate with product ID
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div style={{ backgroundColor: "#EBEBEB" }}>
        <div className="px-16 py-4 lg:flex gap-3 hidden mb-5">
          <Link
            to="/"
            className="text-customLightGray font-semibold text-xl font-family-2 no-underline"
          >
            Home
          </Link>
          <span className="font-semibold text-customLightGray font-family-1 text-xl">
            /
          </span>
          <span className="font-semibold font-family-2 text-xl">Shop Now</span>
        </div>
      </div>
      <Row className="h-100 d-none d-lg-flex">
        <Col
        xl={2}
          lg={3}
          className="border-2 py-16 px-3 rounded-3 h-100"
          style={{ marginLeft: "5rem" }}
        >
          <p className="text-[#2C6892] text-xl font-family-2 font-medium">
            Filters
          </p>
          <ActionButton
            variant="none"
            size="md"
            text="ADIDAS"
            style={{
              backgroundColor: selectedBrands.includes("ADIDAS")
                ? "#2C6892"
                : "white",
              fontFamily: "Alexandria variable",
              color: selectedBrands.includes("ADIDAS") ? "white" : "black",
            }}
            hoverStyle={{
              backgroundColor: "#2C6892",
              color: "white",
            }}
            onClick={() => handleBrandClick("ADIDAS")}
            className="font-family-2 rounded-2 w-100 text-start font-medium"
          />
          <hr className="gradient-hr" />
          <ActionButton
            variant="none"
            size="md"
            text="BALENCIAGA"
            style={{
              backgroundColor: selectedBrands.includes("BALENCIAGA")
                ? "#2C6892"
                : "white",
              fontFamily: "Alexandria variable",
              color: selectedBrands.includes("BALENCIAGA") ? "white" : "black",
            }}
            hoverStyle={{
              backgroundColor: "#2C6892",
              color: "white",
            }}
            onClick={() => handleBrandClick("BALENCIAGA")}
            className="font-family-2 rounded-2 w-100 text-start font-medium"
          />
          <hr className="gradient-hr" />
          <ActionButton
            variant="none"
            size="md"
            text="LOUBOUTIN"
            style={{
              backgroundColor: selectedBrands.includes("Christian Louboutin")
                ? "#2C6892"
                : "white",
              fontFamily: "Alexandria variable",
              color: selectedBrands.includes("Christian Louboutin")
                ? "white"
                : "black",
            }}
            hoverStyle={{
              backgroundColor: "#2C6892",
              color: "white",
            }}
            onClick={() => handleBrandClick("Christian Louboutin")}
            className="font-family-2 rounded-2 w-100 text-start font-medium"
          />
          <hr className="gradient-hr" />
          <ActionButton
            variant="none"
            size="md"
            text="LOUIS VUITTON"
            style={{
              backgroundColor: selectedBrands.includes("LOUIS VUITTON")
                ? "#2C6892"
                : "white",
              fontFamily: "Alexandria variable",
              color: selectedBrands.includes("LOUIS VUITTON")
                ? "white"
                : "black",
            }}
            hoverStyle={{
              backgroundColor: "#2C6892",
              color: "white",
            }}
            onClick={() => handleBrandClick("LOUIS VUITTON")}
            className="font-family-2 rounded-2 w-100 text-start font-medium"
          />
          <hr className="gradient-hr" />
          <ActionButton
            variant="none"
            size="md"
            text="SKETCHERS"
            style={{
              backgroundColor: selectedBrands.includes("Skechers")
                ? "#2C6892"
                : "white",
              fontFamily: "Alexandria variable",
              color: selectedBrands.includes("Skechers") ? "white" : "black",
            }}
            hoverStyle={{
              backgroundColor: "#2C6892",
              color: "white",
            }}
            onClick={() => handleBrandClick("Skechers")}
            className="font-family-2 rounded-2 w-100 text-start font-medium"
          />
          <ActionButton
            variant="none"
            size="sm"
            text="Apply Filter"
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
            onClick={handleApplyFilter}
            className="font-family-2 rounded-2 w-100 mt-4 p-2"
          />
        </Col>
        <Col xl={9} lg={8} className="h-100">
          <div className="font-family-2 d-flex align-items-center justify-content-between">
            <h1>
              {" "}
              {selectedBrands.length === 0
                ? "All"
                : selectedBrands
                    .map(
                      (brand) =>
                        brand.charAt(0).toUpperCase() +
                        brand.slice(1).toLowerCase()
                    )
                    .join(", ")}
            </h1>
            <div
              className="font-family-2 d-flex gap-2 align-items-center"
            >
              <span>
                {indexOfFirstProduct + 1} -{" "}
                {Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} Products
              </span>
              <span>
                Sort by:<> Most Popular </>
              </span>
              <RiArrowDropDownLine />
            </div>
          </div>
          {!loading && !error && (
            <div className="d-flex gap-5 flex-wrap">
              {currentProducts.length === 0 ? (
                <p>No products found for the selected brand.</p>
              ) : (
                currentProducts.map((item) => (
                  <Card
                    key={item._id || item.id}
                    className="flex-shrink-0 border-0 pb-4 hover-brightness card"
                    style={{
                     
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
                      <Card.Text className="font-family-2 fw-bold xl:text-xl lg:text-lg">
                        {item.title}
                      </Card.Text>
                      <Card.Text className="font-family-2 fw-medium xl:text-xl lg:text-base">
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
                ))
              )}
            </div>
          )}
          <div className="pagination d-flex justify-content-center align-items-center gap-5 mt-3">
            {[
              ...Array(Math.ceil(filteredProducts.length / productsPerPage)),
            ].map((_, index) => (
              <button
                key={index}
                className={`pagination-button font-family-2 ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => paginate(index + 1)}
              >
                {currentPage === index + 1 ? <b>{index + 1}</b> : index + 1}
              </button>
            ))}
          </div>
        </Col>
      </Row>
      <Discount />
      <div className="mx-auto lg:w-11/12">
        
        <Subscribe/>
  
        </div>
    </div>
  );
};

export default Shop;
