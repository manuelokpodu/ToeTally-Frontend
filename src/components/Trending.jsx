import { useState, useEffect } from 'react';
import { trending1, trending2, trending3, trending4 } from "../assets";
import ActionButton from './ActionButton';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: trending1, title: 'New in Shoes', subtitle: 'SB Dunk' },
  { src: trending2, title: 'Louis Vuitton', subtitle: 'Brown Heels' },
  { src: trending3, title: 'Experience the “SAMBA” dance', subtitle: 'GAZELLE' },
  { src: trending4, title: 'Explore the LOUIS VUITTON Chelsea boot', subtitle: 'LOUIS VUITTON' }
];

const Trending = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const navigate = useNavigate();



  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slidesToShow]);




  return (
    <div className="overflow-hidden relative w-full">
      <h1 className="lg:px-16 md:px-3 mb-4 lg:text-5xl md:text-4xl text-black lg:mt-24 md:mt-16 font-family-3 d-none d-md-block">
        TRENDING
      </h1>
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex / images.length) * 200}%)`}}
      >
        {images.map((slide, index) => (
          <div key={index} className="relative w-full md:w-1/2 flex-shrink-0">
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10 left-5 p-4 text-white z-10">
              <h3 className="font-family-2 text-lg md:text-xl lg:text-3xl font-normal">{slide.title}</h3>
              <h3 className="font-family-2 text-lg md:text-xl lg:text-3xl font-bold">{slide.subtitle}</h3>
              <ActionButton
                variant="none"
                size="lg"
                text="Shop Now"
                onClick={() => navigate("/shop", { scrollToTop: true })}
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
                className="font-family-2 rounded-2 w-48 p-2 d-none d-md-block"
              />
              <ActionButton
                variant="none"
                size="md"
                text="Shop Now"
                onClick={() => navigate("/shop", { scrollToTop: true })}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;