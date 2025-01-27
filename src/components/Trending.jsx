import { useRef } from "react";
import { useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { trending1, trending2, trending3, trending4 } from "../assets";
import ActionButton from "./ActionButton";

const Trending = () => {
  const trendingRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (window.innerWidth < 768) {
            trendingRef.current.classList.add("animate-scrollLeftSmall");
          } else {
            trendingRef.current.classList.add("animate-scrollLeftLarge");
          }
        }
      },
      { threshold: 0.5 }
    );

    if (trendingRef.current) {
      observer.observe(trendingRef.current);
    }

    return () => {
      if (trendingRef.current) {
        observer.unobserve(trendingRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1 className="mx-lg-5 mx-3 p-4 d-none d-md-block mt-14 font-family-3 text-5xl text-black">
        TRENDING
      </h1>
      <div className="mt-14 md:mt-0">
      <Row className="g-0" ref={trendingRef}>
        <div className="flex w-full">
          <Col
            sm={12}
            md={6}
            className="relative flex-shrink-0 w-full md:w-1/2"
          >
            <Image src={trending1} className="w-100 h-100" />
            <div className="absolute bottom-10 left-5 md:left-10 p-0 md:p-4 text-white z-10">
              <h3 className="font-family-2 text-lg  md:text-xl lg:text-3xl font-normal">
                New in Shoes
              </h3>
              <h3 className="font-family-2 text-lg md:text-xl lg:text-3xl font-semibold">
                SB Dunk
              </h3>
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
                  color: "black",
                  border: "1px solid black",
                }}
                className="font-family-2 rounded-2 w-48 p-2 d-none d-md-block"
              />
              <ActionButton
                variant="none"
                size="md"
                text="Shop Now"
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
                className="font-family-2 rounded-5 w-40 p-2 d-block d-md-none"
              />
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            className="relative flex-shrink-0 w-full md:w-1/2"
          >
            <Image src={trending2} className="w-100 h-100" />
            <div className="absolute bottom-10 left-5 md:left-10 p-0 md:p-4 text-white z-10">
              <h3 className="font-family-2 text-lg  md:text-xl lg:text-3xl font-normal">
                Louis Vuitton
              </h3>
              <h3 className="font-family-2 text-lg  md:text-xl lg:text-3xl font-semibold">
                Brown Heels
              </h3>
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
                  color: "black",
                  border: "1px solid black",
                }}
                className="font-family-2 rounded-2 w-48 p-2 d-none d-md-block"
              />
              <ActionButton
                variant="none"
                size="md"
                text="Shop Now"
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
                className="font-family-2 rounded-5 w-40 p-2 d-block d-md-none"
              />
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            className="relative flex-shrink-0 w-full md:w-1/2"
          >
            <Image src={trending3} className="w-100 h-100" />
            <div className="absolute bottom-10 left-5 md:left-10 p-0 md:p-4 text-white z-10">
              <h3 className="font-family-2 text-lg  md:text-xl lg:text-3xl font-normal">
                Experience the ‘SAMBA’ dance with Adidas Gazelle
              </h3>
              <h3 className="font-family-2 text-lg  md:text-xl lg:text-3xl font-semibold">
                GAZELLE
              </h3>
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
                  color: "black",
                  border: "1px solid black",
                }}
                className="font-family-2 rounded-2 w-48 p-2 d-none d-md-block"
              />
              <ActionButton
                variant="none"
                size="md"
                text="Shop Now"
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
                className="font-family-2 rounded-5 w-40 p-2 d-block d-md-none"
              />
            </div>
          </Col>
          <Col
            sm={12}
            md={6}
            className="relative flex-shrink-0 w-full md:w-1/2"
          >
            <Image src={trending4} className="w-100 h-100" />
            <div className="absolute bottom-10 left-5 md:left-10 p-0 md:p-4 text-white z-10">
              <h3 className="font-family-2 text-lg  md:text-xl lg:text-3xl font-normal">
                Explore the LOUIS VUITTON Chelsea boot in style
              </h3>
              <h3 className="font-family-2 text-lg  md:text-xl lg:text-3xll font-semibold">
                LOUIS VUITTON
              </h3>
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
                  color: "black",
                  border: "1px solid black",
                }}
                className="font-family-2 rounded-2 w-48 p-2 d-none d-md-block"
              />
              <ActionButton
                variant="none"
                size="md"
                text="Shop Now"
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
                className="font-family-2 rounded-5 w-40 p-2 d-block d-md-none"
              />
            </div>
          </Col>
        </div>
      </Row>
      </div>
    </div>
  );
};

export default Trending;
