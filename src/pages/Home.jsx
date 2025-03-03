import { Col, Image, Row } from "react-bootstrap";
import {
  ActionButton,
  BrandCarousel,
  Discount,
  NewArrival,
  OfferForYou,
  StyleInspirations,
  Subscribe,
  Trending,
} from "../components";
import {
  discountBg,
  heroImg,
} from "../assets";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const imageContainerRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => {
      const element = imageContainerRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add("animate-moveLeft");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="py-lg-4">
      <div className="d-md-flex justify-content-center align-items-center">
        <div
          className="d-md-flex d-none gap-lg-3 flex-column md:px-3 lg:px-16"
          style={{ width: "65vw" }}
        >
          <h1 className="font-family-3 text-customVeryDarkBlue text-5xl/[4rem] lg:text-7xl/[6rem]">
            Step into Comfort. Walk <br />
            with Confidence.
          </h1>
          <p className="font-family-2 text-customLightGray text-base lg:text-2xl">
            Explore footwear crafted for style, durability, and unmatched
            comfort. Designed to elevate every step you take
          </p>
          <ActionButton
            variant="none"
            size="lg"
            text="Shop Now"
            onClick={() => navigate("/shop")}
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
            className="font-family-2 rounded-2 lg:w-48 w-32 p-lg-2 p-1"
          />
        </div>
        <Image
          src={heroImg}
          style={{ width: "45vw" }}
          className="d-none d-md-block"
        />
        {/* hero small screen */}
        <div className="d-flex flex-column text-center align-items-center p-3 d-md-none d-block">
          <h1 className="font-family-3 text-customVeryDarkBlue text-4xl/[3rem]">
            Step into Comfort. Walk with Confidence
          </h1>
          <p className="font-family-2 text-customLightGray text-base/[20px]">
            Explore footwear crafted for style, durability, and unmatched
            comfort. Designed to elevate every step you take
          </p>
          <ActionButton
            variant="none"
            size="md"
            text="Shop Now"
            onClick={() => navigate("/shop")}
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
            className="font-family-2 rounded-2 w-32 p-2"
          />
        </div>
        <Image src={heroImg} className="d-block d-md-none" />
      </div>
      <BrandCarousel />

      <Trending />

      <div className="d-none d-md-block mt-14 md:px-3 lg:px-16">
        <Row>
          <Col sm={12} md={6} lg={5}>
            <Image
            src="https://s3-alpha-sig.figma.com/img/7011/b796/16e9a6426e45a3c88c397b2a4cdc2e7f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QyoWoRucIhCAgxH7vOxbv7Kj4v2xWJFgXIS3muVmg71r~Q2OQ~YqEuwTaebQt9nxABq6y6uRV2od23QxuC1WAP-e51Hn7sKFG5if6WCgHMUULXAyvkAJuyCL454c8zopcg1ZnW2-Kv1xRMGW4d40kHBU-YUGGIrPX-cEZ11zl4CcmP-v9kuG6RUS8fr92Wo5JLll7oLTckz2DtiP5QKHDrngphaLPf-8uXfIloi136VLXFwFBj91cBIzCZehTshlukfseGxw~MoXQKD6xAZMEzdS32rfrNFUXFUvXoDUgtN~q4C7PAWGV9uuZIs6HwHCAy1qII0D1LxUSBUY3bmMpA__"
       className="w-100"
            />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={7}
            className="d-flex flex-column gap-2 text-center align-items-center justify-content-center"
          >
            <Image src={discountBg} />
            <h1 className="font-family-4 text-2xl lg:text-5xl">
              EXPERIENCE THE “HIGH” CONIC DUNK
            </h1>
            <h1 className="font-family-2 fw-bold text-3xl lg:text-6xl">
              ICONIC FOR A REASON
            </h1>
            <p className="font-family-2 fw-medium text-xl lg:text-2xl">
              Timeless Style, Unmatched Legacy
            </p>
            <ActionButton
              variant="none"
              size="lg"
              text="Shop Dunk Now"
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
              className="font-family-2 rounded-2 w-64 p-lg-3"
            />
          </Col>
        </Row>
      </div>

      <NewArrival />

      {/* gif small screen */}
      <div className="d-md-none d-block relative mt-12">
        <Image src="https://s3-alpha-sig.figma.com/img/7011/b796/16e9a6426e45a3c88c397b2a4cdc2e7f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QyoWoRucIhCAgxH7vOxbv7Kj4v2xWJFgXIS3muVmg71r~Q2OQ~YqEuwTaebQt9nxABq6y6uRV2od23QxuC1WAP-e51Hn7sKFG5if6WCgHMUULXAyvkAJuyCL454c8zopcg1ZnW2-Kv1xRMGW4d40kHBU-YUGGIrPX-cEZ11zl4CcmP-v9kuG6RUS8fr92Wo5JLll7oLTckz2DtiP5QKHDrngphaLPf-8uXfIloi136VLXFwFBj91cBIzCZehTshlukfseGxw~MoXQKD6xAZMEzdS32rfrNFUXFUvXoDUgtN~q4C7PAWGV9uuZIs6HwHCAy1qII0D1LxUSBUY3bmMpA__"/><div className="d-flex flex-column text-center align-items-center justify-content-center absolute top-0 px-3">
          <Image src={discountBg} className="w-64" />
          <h1 className="font-family-4 text-2xl">
            EXPERIENCE THE “HIGH” CONIC DUNK
          </h1>
          <h1 className="font-family-2 fw-bold text-3xl">
            ICONIC FOR A REASON
          </h1>
          <p className="font-family-2 fw-medium text-base">
            Timeless Style, Unmatched Legacy
          </p>
          <ActionButton
            variant="none"
            size="sm"
            text="Shop Dunk Now"
            style={{
              backgroundColor: "black",
              fontFamily: "Alexandria variable",
              color: "white",
            }}
            hoverStyle={{
              backgroundColor: "white",
              color: "#01497C",
              border: "1px solid #01497C",
            }}
            className="font-family-2 rounded-2 w-40 p-lg-3"
          />
        </div>
      </div>

      <Discount />
      <StyleInspirations />
      <OfferForYou />

      <Subscribe/>
    </div>
  );
};

export default Home;
