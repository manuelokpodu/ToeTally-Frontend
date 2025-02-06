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

const Home = () => {
  const imageContainerRef = useRef(null);

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
              src="https://s3-alpha-sig.figma.com/img/7011/b796/16e9a6426e45a3c88c397b2a4cdc2e7f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jDxnFiZ2oDE2GpWrH~8kFGs21JNU~80QH6Mwoi9jAGYstNqcYVD17jweZh9VNKDlK9JtdAi41G1kTELQGA6gd18sQbtB4J1ptI2sQDffO-TUM6ECLLtot0Fd7ItxebU-r97MrRGkyiHSFGmMFpEwN~oNyHBXSGbgFOOidcKFE8rhdhw5DQ10kmpXcUXJxNNMcCPBfeGOqNASSKvsysvdNgx1NAKC-6KFbm30q3VriwSBNSagbv2iDptLIss3TQwc3~hd9gygEMxmDo0J9pX-8cB5P13ejtkoDsVC1R8wDdkvQJesYxATALiqt~J6CFsgH3-CJDLLtXxAn~H5T9FI6A__"
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
        <Image src="https://s3-alpha-sig.figma.com/img/7011/b796/16e9a6426e45a3c88c397b2a4cdc2e7f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jDxnFiZ2oDE2GpWrH~8kFGs21JNU~80QH6Mwoi9jAGYstNqcYVD17jweZh9VNKDlK9JtdAi41G1kTELQGA6gd18sQbtB4J1ptI2sQDffO-TUM6ECLLtot0Fd7ItxebU-r97MrRGkyiHSFGmMFpEwN~oNyHBXSGbgFOOidcKFE8rhdhw5DQ10kmpXcUXJxNNMcCPBfeGOqNASSKvsysvdNgx1NAKC-6KFbm30q3VriwSBNSagbv2iDptLIss3TQwc3~hd9gygEMxmDo0J9pX-8cB5P13ejtkoDsVC1R8wDdkvQJesYxATALiqt~J6CFsgH3-CJDLLtXxAn~H5T9FI6A__" />
        <div className="d-flex flex-column text-center align-items-center justify-content-center absolute top-0 px-3">
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
