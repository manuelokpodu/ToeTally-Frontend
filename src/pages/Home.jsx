import { Col, Image, Row } from "react-bootstrap";
import {
  ActionButton,
  Discount,
  NewArrival,
  OfferForYou,
  StyleInspirations,
  Trending,
} from "../components";
import {
  adidas,
  ballenciaga,
  champion,
  discountBg,
  fila,
  gap,
  heroImg,
  newBalance,
  nike,
  reebok,
  vans,
  vector1,
  vector2,
  vector3,
  vector4,
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
    <div className="py-lg-5">
      <div className="d-md-flex justify-content-center align-items-center">
        <div
          className="d-md-flex d-none flex-column mx-lg-5 mx-3 px-4"
          style={{ maxWidth: "50vw" }}
        >
          <h1 className="font-family-3 text-customVeryDarkBlue text-5xl/[4rem] lg:text-6xl/[6rem]">
            Step into Comfort. Walk with Confidence
          </h1>
          <p className="font-family-2 text-customLightGray  text-base lg:text-xl">
            Explore footwear crafted for style, durability, and unmatched
            comfort. Designed to elevate every step you take
          </p>
          <ActionButton
            variant="none"
            size="lg"
            text="Shop Now"
            style={{
              backgroundColor: "#2C6892",
              fontFamily: "Alexandria variable",
              color: "white",
            }}
            hoverStyle={{
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid black",
            }}
            className="font-family-2 rounded-2 lg:w-48 w-32 p-lg-2 p-1"
          />
        </div>
        {/* hero small screen */}
        <div className="d-flex flex-column text-center align-items-center p-4 d-md-none d-block">
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
              backgroundColor: "#2C6892",
              fontFamily: "Alexandria variable",
              color: "white",
            }}
            hoverStyle={{
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid black",
            }}
            className="font-family-2 rounded-2 w-32 p-2"
          />
        </div>
        <Image src={heroImg} style={{ minWidth: "50vw" }} />
      </div>

      <div className="bg-customGray p-2 overflow-hidden">
        <div
          ref={imageContainerRef}
          className=" d-flex justify-content-between  align-items-center"
        >
          <Image src={nike} className="lg:w-28 md:w-14 w-8" />
          <Image src={fila} className="lg:w-28 md:w-14 w-8" />
          <Image src={reebok} className="lg:w-28 md:w-14 w-8" />
          <Image src={ballenciaga} className="lg:w-40 md:w-32 w-14" />
          <Image src={champion} className="lg:w-40 md:w-32 w-14" />
          <Image src={vans} className="lg:w-28 md:w-14 w-8" />
          <Image src={newBalance} className="lg:w-28 md:w-14 w-8" />
          <Image src={gap} className="lg:w-28 md:w-14 w-8" />
          <Image src={adidas} className="lg:w-28 md:w-14 w-8" />
        </div>
      </div>

      <Trending />

      <div className="mx-lg-5 mx-3 d-none d-md-block p-4 mt-14">
        <Row>
          <Col sm={12} md={6} lg={5}>
            <Image
              src="https://s3-alpha-sig.figma.com/img/7011/b796/16e9a6426e45a3c88c397b2a4cdc2e7f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nV3rHZ1xzp79iG1f~mTQFSs8~Q~2Y0rVVsZBrcO3drM0NVLTkC0XhgE7wRGllVje8~FPhJ1YlP0jvPlF7h~VbuwJTAuQHMN-egm1Ltyu0-SoZ-LLBV1vmWIEpAWEMBNnwrdovY9y8BTNp6buBr-gAVUKe1HRENvgWBAp0ZQvlIHF3A3WUidxoIi0k~ZHf5cZQZhrTbhYFIWhpmHJudLqT7bpSv5h2YDwshccy~UPxZFRQFG-bQbVZS7dfxdU0~JgABPEr8xWh7oIM-0ysraEVL1S6dBVr3ViEy2WFUApgSAMSmGJDdxTKTe5Q3nv1Adi2FRwBgs5FBmnzC3QsyCQZQ__"
              className="w-100"
            />
          </Col>
          <Col
            sm={12}
            md={6}
            lg={7}
            className="d-flex flex-column text-center align-items-center justify-content-center"
          >
            <Image src={discountBg} />
            <h1 className="font-family-4 text-3xl lg:text-4xl">
              EXPERIENCE THE “HIGH” CONIC DUNK
            </h1>
            <h1 className="font-family-2 fw-bold text-4xl lg:text-5xl">
              ICONIC FOR A REASON
            </h1>
            <p className="font-family-2 fw-medium text-2xl lg:text-3xl">
              Timeless Style, Unmatched Legacy
            </p>
            <ActionButton
              variant="none"
              size="lg"
              text="Shop Dunk Now"
              style={{
                backgroundColor: "#2C6892",
                fontFamily: "Alexandria variable",
                color: "white",
              }}
              hoverStyle={{
                backgroundColor: "transparent",
                color: "black",
                border: "1px solid black",
              }}
              className="font-family-2 rounded-2 w-64 p-lg-3"
            />
          </Col>
        </Row>
      </div>

      <NewArrival />

      {/* gif small screen */}
      <div className="d-md-none d-block relative mt-12">
        <Image
          src="https://s3-alpha-sig.figma.com/img/7011/b796/16e9a6426e45a3c88c397b2a4cdc2e7f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nV3rHZ1xzp79iG1f~mTQFSs8~Q~2Y0rVVsZBrcO3drM0NVLTkC0XhgE7wRGllVje8~FPhJ1YlP0jvPlF7h~VbuwJTAuQHMN-egm1Ltyu0-SoZ-LLBV1vmWIEpAWEMBNnwrdovY9y8BTNp6buBr-gAVUKe1HRENvgWBAp0ZQvlIHF3A3WUidxoIi0k~ZHf5cZQZhrTbhYFIWhpmHJudLqT7bpSv5h2YDwshccy~UPxZFRQFG-bQbVZS7dfxdU0~JgABPEr8xWh7oIM-0ysraEVL1S6dBVr3ViEy2WFUApgSAMSmGJDdxTKTe5Q3nv1Adi2FRwBgs5FBmnzC3QsyCQZQ__"
        />
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
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid black",
            }}
            className="font-family-2 rounded-2 w-40 p-lg-3"
          />
        </div>
      </div>

      <Discount />
      <StyleInspirations />
      <OfferForYou />

      <div className="mx-16 mt-16 p-4 d-none d-lg-block">
        <div className="bg-customBlue rounded-5 text-center text-white p-16 position-relative">
          <h1 className="font-family-3 text-6xl">
            Subscribe to our Newsletter
          </h1>
          <p className="font-family-2 w-50 mx-auto mt-4 font-light">
            By providing your email, you agree to the Terms & Conditions and
            Privacy Policy. You may unsubscribe later.
          </p>
          <div className="relative bg-transparent mt-5 text-start ps-4 border w-50 mx-auto border-white rounded-4 p-2">
            <h4>Email Address</h4>
            <ActionButton
              variant="none"
              size="lg"
              text="Subscribe"
              style={{
                backgroundColor: "white",
                fontFamily: "Alexandria variable",
                color: "black",
              }}
              className="font-family-2 rounded-4 w-64 p-2 absolute top-0.5 right-0"
            />
          </div>
          <img src={vector1} className="vector-image1" />
          <img src={vector2} className="vector-image2" />
          <img src={vector3} className="vector-image3" />
          <img src={vector4} className="vector-image4" />
        </div>
      </div>

      {/* subsribe with us small screen */}
      <div className="bg-customBlue d-block d-lg-none text-white px-4 py-16 position-relative">
        <h1 className="font-family-3 text-center text-white text-2xl md:text-4xl">
          Subscribe to our Newsletter
        </h1>
        <p className="font-family-2 text-center text-white mt-2 text-xs font-light">
            By providing your email, you agree to the Terms & Conditions and
            Privacy Policy. You may unsubscribe later.
          </p>
          <div className="relative bg-transparent mt-2 text-start ps-4 border w-100 mx-auto border-white rounded-4 p-2">
            <span>Email Address</span>
            <ActionButton
              variant="none"
              size="smal"
              text="Subscribe"
              style={{
                backgroundColor: "white",
                fontFamily: "Alexandria variable",
                color: "black",
              }}
              className="font-family-2 rounded-4 w-32 p-2 absolute top-0 right-0"
            />
          </div>
          <img src={vector1} className="vector-image1S" />
          <img src={vector2} className="vector-image2S" />
          <img src={vector3} className="vector-image3S" />
          <img src={vector4} className="vector-image4S" />
      </div>
    </div>
  );
};

export default Home;
