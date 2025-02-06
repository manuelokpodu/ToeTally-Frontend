import { Card, Image } from "react-bootstrap";
import { discountOffer, formatCurrency } from "../utils";
import ActionButton from "./ActionButton";
import { discountBadge } from "../assets";

const Discount = () => {
  return (
    <>
      <div className="mt-24  d-none d-lg-block pl-16">
        <h1 className="font-family-3 text-5xl text-black">DISCOUNT OFFERS</h1>
        <div className="mt-4 d-flex gap-8 align-items-center text-sm font-family-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
          {discountOffer.map((item) => (
            <Card
              key={item.id}
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
                  src={item.image}
                  className="object-fit-contain p-2"
                  style={{ height: "15rem" }}
                />
              </div>
              <Card.Body>
                <div style={{ height: "3rem", width: "auto" }}>
                  <Image src={item.logo} style={item.logoSize} />
                </div>
                <div style={{ height: "3rem", width: "auto" }}>
                  <Card.Text className="font-family-2 fw-bold text-xl">
                    {item.name}
                  </Card.Text>
                </div>
                <Card.Text className="font-family-2 fw-medium text-xl">
                  {item.category} | {item.color}
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
                  />
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* small screen */}
      <div className="mt-12 p-3 d-block d-lg-none">
        <h1 className="font-family-3 text-3xl md:text-4xl text-black">DISCOUNT OFFERS</h1>
        <div className="mt-4 d-flex gap-3 align-items-center text-sm font-family-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
          {discountOffer.map((item) => (
            <Card
              key={item.id}
              className="flex-shrink-0 border-0 pb-2 hover-brightness position-relative"
              style={{
                width: "15rem",
                minHeight: "15rem",
                backgroundColor: "#B5B5B51A",
              }}
            >
              {item.discount && (
                <div
                  className="font-family-4 text-xl position-absolute"
                  style={{
                    width: "150px",
                    height: "50px",
                    left: "-10px",
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
              <div style={{ height: "8rem", width: "auto" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="object-fit-contain p-2"
                  style={{ height: "10rem" }}
                />
              </div>
              <Card.Body>
                <div style={{ height: "3rem", width: "auto" }}>
                  <Image src={item.logo} style={item.logoSize} />
                </div>
                <div style={{ height: "3rem", width: "auto" }}>
                  <Card.Text className="font-family-2 fw-bold text-base">
                    {item.name}
                  </Card.Text>
                </div>
                <Card.Text className="font-family-2 fw-medium text-base">
                  {item.category} | {item.color}
                </Card.Text>
                <hr className="border-2" />
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="font-family-2 fw-bold text-lg mb-0">
                    {formatCurrency(item.price)}
                  </Card.Text>
                  <ActionButton
                    variant="none"
                    size="sm"
                    text="Buy Now"
                    style={{
                      backgroundColor: "black",
                      fontFamily: "Alexandria variable",
                    }}
                    className="font-family-2 buy-now-button rounded-1 text-white p-1 w-24"
                  />
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Discount;
