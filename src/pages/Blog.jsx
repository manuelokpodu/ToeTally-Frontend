import { Image } from "react-bootstrap";
import { blogBigHero, blogSmHero } from "../assets";
import { ActionButton, Subscribe } from "../components";
import { blogItems } from "../utils";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div
        className="md:hidden block bg-cover bg-center text-center text-white py-20 px-4 "
        style={{
          backgroundImage: `url(${blogSmHero})`,
        }}
      >
        <h1 className="font-family-3  text-4xl">BLOG</h1>
        <div >
          <Link to="/" className="text-white text-sm font-family-2 no-underline">
            Home
          </Link>
          <span className="font-family-2 text-sm"> /</span>
          <span className="font-family-2 text-sm"> Blog</span>
        </div>
       
      </div>

      {/* large screen */}
      <div
        className="hidden md:block p-36 text-center text-white"
        style={{
          backgroundImage: `url(${blogBigHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="font-family-3 text-8xl">BLOG</h1>
        <div className="mt-4">
          <Link to="/" className="text-white text-2xl font-family-2 no-underline">
            Home
          </Link>
          <span className="font-family-2 text-2xl"> /</span>
          <span className="font-family-2 text-2xl"> Blog</span>
        </div>
      </div>
      <div className="lg:px-16 mt-16 md:px-3 hidden md:block">
        <h1 className="font-family-2 text-5xl font-medium md:hidden block">
          Recent Blogs
        </h1>
        <div className="d-grid grid-cols-1 md:grid-cols-2 lg:gap-24 md:gap-8 mt-4">
          {blogItems.map((item) => (
            <div
              key={item.id}
            >
              <Image src={item.image} className="mx-auto w-100 rounded-3" />
              <div className="py-3 pr-3">
                <p className="font-family-2 text-[#01497C] lg:text-2xl md:text-xl font-medium">
                  {item.category}
                </p>
                <h3 className="font-family-2 lg:text-2xl md:text-xl font-medium">
                  {item.title}
                </h3>
                <p className="font-family-2 lg:text-xl md:text-xl">
                  {item.text}
                </p>
                <div className="d-flex justify-content-between">
                  <span className="d-flex align-items-center gap-2 font-family-2 lg:text-2xl md:text-base">
                    <FaRegCalendarDays />
                    {item.date}
                  </span>
                  <span className="d-flex align-items-center gap-2 font-family-2 lg:text-2xl md:text-base">
                    <FaRegClock />5 mins read
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-2 lg:mt-36 md:my-14 rounded-4">
          <h1 className="font-family-2 font-medium text-5xl md:text-4xl">
            Popular Tags
          </h1>
          <div className="d-flex  mt-8 gap-8 md:flex-wrap">
            <p className="font-family-2 font-medium text-4xl md:text-3xl p-3 rounded-5 bg-[#F5F5F5]">
              Fashion
            </p>
            <p className="font-family-2 font-medium text-4xl md:text-3xl p-3 rounded-5 bg-[#F5F5F5] ">
              Style
            </p>
            <p className="font-family-2 font-medium text-4xl md:text-3xl p-3 rounded-5 bg-[#F5F5F5] ">
              Trends
            </p>
            <p className="font-family-2 font-medium text-4xl md:text-3xl p-3 rounded-5 bg-[#F5F5F5] ">
              Sustainable
            </p>
            <p className="font-family-2 font-medium text-4xl md:text-3xl p-3 rounded-5 bg-[#F5F5F5] ">
              Care
            </p>
            <p className="font-family-2 font-medium text-4xl md:text-3xl p-3 rounded-5 bg-[#F5F5F5] ">
              Guide
            </p>
            <p className="font-family-2 font-medium text-4xl md:text-3xl p-3 rounded-5 bg-[#F5F5F5] ">
              Summer
            </p>
            <p className="font-family-2 font-medium text-4xl md:text-3xl p-3 rounded-5 bg-[#F5F5F5] ">
              Winter
            </p>
          </div>
        </div>
      </div>

      {/*small screen*/}
      <div className="px-3 mt-8 block md:hidden">
        <h1 className="font-family-2 font-medium text-2xl">Recent Blogs</h1>
        <div className="d-grid grid-cols-1 gap-16 mt-4">
          {blogItems.map((item) => (
            <div
              key={item.id}
              className="border-2 border-[#01497C] p-2 rounded-3"
            >
              <Image src={item.image} className="mx-auto blogImg" />
              <div className="p-2">
                <h4 className="font-family-2 text-[#01497C] text-xl font-medium">
                  {item.category}
                </h4>
                <h3 className="font-family-2 text-2xl font-medium">
                  {item.title}
                </h3>
                <p className="font-family-2 text-xl">{item.text}</p>
                <div className="d-flex justify-content-between">
                  <span className="d-flex align-items-center gap-2 font-family-2 text-sm">
                    <FaRegCalendarDays />
                    {item.date}
                  </span>
                  <span className="d-flex align-items-center gap-2 font-family-2 text-sm">
                    <FaRegClock />5 mins read
                  </span>
                </div>
                <ActionButton
                  variant="none"
                  size="md"
                  text="Read More"
                  style={{
                    backgroundColor: "#01497C",
                    fontFamily: "Alexandria variable",
                  }}
                  className="font-family-2 rounded-5 mt-3 text-white"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 border-2 my-12 rounded-4">
          <h1 className="font-family-2 font-medium text-2xl">
            Popular Tags
          </h1>
          <div className="d-flex flex-wrap mt-8 gap-2">
            <p className="font-family-2 font-medium text-xl p-2 rounded-5 bg-[#F5F5F5]">
              Fashion
            </p>
            <p className="font-family-2 font-medium text-xl p-2 rounded-5 bg-[#F5F5F5] ">
              Style
            </p>
            <p className="font-family-2 font-medium text-xl p-2 rounded-5 bg-[#F5F5F5] ">
              Trends
            </p>
            <p className="font-family-2 font-medium text-xl p-2 rounded-5 bg-[#F5F5F5] ">
              Sustainable
            </p>
            <p className="font-family-2 font-medium text-xl p-2 rounded-5 bg-[#F5F5F5] ">
              Care
            </p>
            <p className="font-family-2 font-medium text-xl p-2 rounded-5 bg-[#F5F5F5] ">
              Guide
            </p>
            <p className="font-family-2 font-medium text-xl p-2 rounded-5 bg-[#F5F5F5] ">
              Summer
            </p>
            <p className="font-family-2 font-medium text-xl p-2 rounded-5 bg-[#F5F5F5] ">
              Winter
            </p>
          </div>
        </div>
      </div>

      <Subscribe />
    </>
  );
};

export default Blog;
