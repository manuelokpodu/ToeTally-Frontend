import { Card, Image } from "react-bootstrap";
import { formatCurrency, offers } from "../utils";
import ActionButton from "./ActionButton";

const OfferForYou = () => {
  return (
    <>
      <div className="mx-lg-5 mx-3 p-4 mt-12 d-none d-md-block">
        <h1 className="font-family-3 text-5xl text-black">OFFERS FOR YOU</h1>
        <div className="mt-4 d-flex gap-8 align-items-center text-sm font-family-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
          {offers.map((item) => (
            <Card
              key={item.id}
              className="flex-shrink-0 border-0 pb-4 hover-brightness"
              style={{
                width: "24vw",
                minHeight: "30vh",
                backgroundColor: "#B5B5B51A",
              }}
            >
              <div style={{ height: "15rem", width: "auto" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="object-fit-contain p-2"
                  style={{ height: "14rem" }}
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
                  {item.category}
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
                      color: "white",
                    }}
                    hoverStyle={{
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid black",
                    }}
                    className="font-family-2 rounded-1 w-32  p-2"
                  />
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* small screen */}
      <div className="mt-12 p-3 d-block d-md-none">
        <h1 className="font-family-3 text-3xl text-black">OFFERS FOR YOU</h1>
        <div className="mt-4 d-flex gap-2 align-items-center text-sm font-family-2 overflow-x-auto overflow-y-hidden hide-scrollbar">
          {offers.map((item) => (
            <Card
              key={item.id}
              className="flex-shrink-0 border-0 pb-2 hover-brightness"
              style={{
                width: "15rem",
                minHeight: "15rem",
                backgroundColor: "#B5B5B51A",
              }}
            >
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
                  {item.category}
                </Card.Text>
                <hr className="border-2" />
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="font-family-2 fw-bold text-xl mb-0">
                    {formatCurrency(item.price)}
                  </Card.Text>
                  <ActionButton
                    variant="none"
                    size="sm"
                    text="Buy Now"
                    style={{
                      backgroundColor: "black",
                      fontFamily: "Alexandria variable",
                      color: "white",
                    }}
                    hoverStyle={{
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid black",
                    }}
                    className="font-family-2 rounded-1 w-24  p-2"
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

export default OfferForYou;
