import MapComponent from "../map/MapComponent";

const FindUs = () => {
    return (
      <>
        <div className="space-y-10 px-3 lg:px-16">
            {/* Row with two sections */}
            <div className="flex flex-col md:flex-row p-6 gap-8 ">
                {/* Left Section: 1/3 */}
                <div className="w-full md:w-5/12 md:p-4 flex justify-center items-center">

                <div className="md:w-[270px] flex flex-col justify-center">
                    <h1 className="font-family-3 text-center text-black text-2xl md:text-3xl">Find Our Outlets Today</h1>
                    <p className="text-center font-font-family-2 w-5/6 mx-auto font-medium">Contact us on any of our media handles or number</p>
                    <button className="px-6 -mt-1 py-2 bg-[#01497C] text-white rounded-md w-6.5/12 mx-auto font-font-family-2">Get In Touch</button>
                </div>

                </div>

                {/* Right Section: 2/3 */}
                <div className="w-full md:w-7/12 md:p-4">
                    <MapComponent />
                </div>
            </div>

            {/* Newsletter Section */}

            <div className="md:px-5 md:py-8 ">
                

            <div className=" bg-[#01497C] h-[290px] md:h-[270px] md:rounded-xl flex justify-center items-center p-2">
                
            <div className="p-4 relative  w-5/6 rounded-lg h-[270px] md:h-[240px] flex justify-center items-center">

                <div className="md:w-4/6 xl:w-3/6">



                <h1 className="font-family-3 text-center text-white text-2xl md:text-4xl">Subscribe to our Newsletter</h1>
                <p className="text-sm font-font-family-2  mb-4 text-[#FFFFFFCC] text-center">
                    By providing your email, you agree to the Terms & Conditions and Privacy Policy. You may unsubscribe later.
                </p>

                <div>
                    <img src="/star1.svg" alt="vector" className="absolute top-0 left-0 w-6 md:w-10 md:mt-5 md:left-8" />

                    <img src="/star1.svg" alt="vector" className="absolute top-0 right-0 w-6 md:w-10 md:mt-5 md:right-8" />

                    <img src="/star2.svg" alt="vector" className="absolute bottom-0 md:mb-10 left-3 w-6 md:w-9 md:left-10" />
                    
                    <img src="/star3.svg" alt="vector" className="absolute bottom-0 right-3 w-6 md:w-9 md:mb-5 md:right-8" />
                </div>



                <div className="flex items-center rounded-xl border-[2px] border-[#FFFFFF7D] font-font-family-2">
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="w-4/5 py-2 px-2 md:px-4  bg-[#01497C] rounded-l-lg text-white placeholder-white outline-none"
                    />
                    <button className="px-4 py-2 bg-white text-black rounded-lg">
                        Subscribe
                    </button>
                </div>
            </div>

            </div>
            
            </div>

            
            </div>



        </div>
      </>
    );
};

export default FindUs;
