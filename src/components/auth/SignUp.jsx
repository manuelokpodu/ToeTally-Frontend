const SignUp = () => {
    return (
      <>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Section: Image */}
        <div className="lg:w-[55%] h-full">
          <img
            src="/auth.svg"
            alt="login image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-[45%] py-12 lg:py-0 flex flex-col justify-center items-center md:px-8">
          <div className="w-4/6">
            {/* Logo and Title */}
            <div className="text-center flex gap-2 justify-self-center items-center">
              <img src="/logo.svg" alt="logo" className="mx-auto w-16 h-16" />
              <h1 className="font-font-family-1 text-2xl font-bold mt-2">
                TOETALLY
              </h1>
            </div>

            {/* Description */}
            <div className="mt-2">
              <p className="text-gray-600 text-lg text-center font-semibold font-font-family-2">
                Enter your email to join us or sign in
              </p>
            </div>

            

            {/* Email Input */}
            <div className="mx-auto flex justify-center">
              <input
                type="text"
                className="rounded-sm outline-none border-[#696767] w-full mx-auto border-[1px] px-3 py-2"
                placeholder="Email*"
              />
            </div>

            {/* Terms and Conditions */}
            <div className="w-6/6 mx-auto mt-3">
              <p className="text-[#9F9F9F] text-center">
                By continuing, I agree to Toetally’s{" "}
                <a
                  className="hover:underline text-[#9F9F9F]"
                  href="#"
                >
                  Privacy Policy and Terms of Use.
                </a>
              </p>
            </div>

            {/* Continue Button */}
            <div className="w-full mx-auto">
              <button className="bg-[#01497C] w-full py-2.5 rounded-md mx-auto text-[white]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
        
      </>
    );
  };
  
  export default SignUp;
  