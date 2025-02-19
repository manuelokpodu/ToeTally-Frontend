import { useEffect, useRef } from "react";

const Mission = () => {
  const missionCarouselRef = useRef(null);
  const teamCarouselRef = useRef(null);

  // Mission Section Carousel Logic
  useEffect(() => {
    const carousel = missionCarouselRef.current;

    if (!carousel) return;

    const items = carousel.children; // Get all child elements (items)
    const interval = 3000; // Time to pause on each item (in ms)
    let currentIndex = 0;

    const scrollToItem = (index) => {
      const item = items[index];
      const itemCenter =
        item.offsetLeft - carousel.offsetLeft + item.offsetWidth / 2;
      const carouselCenter = carousel.offsetWidth / 2;

      // Scroll to make the item's center align with the carousel's center
      carousel.scrollTo({
        left: itemCenter - carouselCenter,
        behavior: "smooth",
      });
    };

    const scrollInterval = setInterval(() => {
      // Scroll to the next item's center
      scrollToItem(currentIndex);

      // Move to the next item or loop back to the first
      currentIndex = (currentIndex + 1) % items.length;
    }, interval);

    return () => clearInterval(scrollInterval); // Cleanup the interval
  }, []);

  // Meet the Team Carousel Logic
  useEffect(() => {
    const carousel = teamCarouselRef.current;

    if (!carousel) return;

    const items = carousel.children; // Get all child elements (items)
    const interval = 3000; // Time to pause on each item (in ms)
    let currentIndex = 0;

    const scrollToItem = (index) => {
      const item = items[index];
      const itemCenter =
        item.offsetLeft - carousel.offsetLeft + item.offsetWidth / 2;
      const carouselCenter = carousel.offsetWidth / 2;

      // Scroll to make the item's center align with the carousel's center
      carousel.scrollTo({
        left: itemCenter - carouselCenter,
        behavior: "smooth",
      });
    };

    const scrollInterval = setInterval(() => {
      scrollToItem(currentIndex);
      currentIndex = (currentIndex + 1) % items.length;
    }, interval);

    return () => clearInterval(scrollInterval); // Cleanup the interval
  }, []);

  return (
    <div className="py-2 font-family-2">
      {/* Mission Section */}
      <div className="bg-[#01497C] text-[#FFFFFF] text-center mt-2 md:py-2 lg:py-4">
        <div
          ref={missionCarouselRef}
          className="flex flex-col lg:flex-row overflow-x-auto snap-x snap-mandatory px-2 lg:grid lg:grid-cols-4 lg:space-x-0 lg:gap-0 scrollbar-hide"
        >
          {/* Cards */}
          {["6 Years Active", "10,000+ Orders", "8 Stores", "20,000+ Satisfied Customers"].map((item, index, arr) => (
            <div
              key={index}
              className={`min-w-[75%] flex-shrink-0 snap-center lg:min-w-0 flex items-center justify-center mt-2 mb-1 ${
                index !== arr.length - 1 ? "border-r-[1px] border-[#FFFFFF]" : ""
              }`}
            >
              <div>
                <h1 className="text-2xl font-bold pt-2">{item.split(" ")[0]}</h1>
                <p>{item.split(" ").slice(1).join(" ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Description Section */}
      <div className="grid md:grid-cols-2 md:py-8 px-3 lg:w-11/12 mx-auto">
        <div className="py-3">
          <div className="md:p-3">
            <img
              src="/mission.svg"
              className="rounded-lg w-full"
              alt="mission img"
            />
          </div>
        </div>
        <div className="md:p-3 my-auto lg:w-5/6 lg:mx-auto">
          <h1 className="font-family-3 md:mt-4 lg:mt-0">Mission</h1>
          <p className="font-family-2 mt-4">
            At Toetally, our mission is to provide an unparalleled online
            shopping experience, offering a vast selection of high-quality,
            authentic branded shoes. We strive to deliver exceptional customer
            service, ensuring timely and efficient order fulfillment, while
            fostering a culture of trust, reliability, and style.
          </p>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="flex flex-col justify-center items-center px-3 lg:w-11/12 mx-auto py-10 md:py-16">
        <h1 className="font-family-3 mx-auto mb-4">Meet The Team</h1>

        <div
          ref={teamCarouselRef}
          className="font-font-family-2 flex flex-col md:flex-row justify-center items-center gap-4 overflow-x-auto hide-scrollbar md:hidden"
        >
          {[ 
            { name: "Ademola Spellz", role: "Founder", img: "/Frame1.svg" },
            { name: "Adesoga Abiodun", role: "Founder", img: "/Frame2.svg" },
            { name: "Uchenna Daniels", role: "Founder", img: "/Frame3.svg" },
          ].map((member, index) => (
            <div key={index} className="min-w-[70%] flex-shrink-0 md:w-auto">
              <img src={member.img} alt={member.name} />
              <p className="text-center mt-2">{member.name}</p>
              <p className="font-semibold text-center -mt-4">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Desktop & Tablet: Static Layout */}
        <div className="hidden md:flex font-font-family-2 items-center w-full mx-auto gap-4">
          {[ 
            { name: "Ademola Spellz", role: "Founder", img: "/Frame1.svg" },
            { name: "Adesoga Abiodun", role: "Founder", img: "/Frame2.svg" },
            { name: "Uchenna Daniels", role: "Founder", img: "/Frame3.svg" },
          ].map((member, index) => (
            <div key={index} className="w-full">
              <img src={member.img} alt={member.name} className="w-full" />
              <p className="text-center mt-2">{member.name}</p>
              <p className="font-semibold text-center -mt-4">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
