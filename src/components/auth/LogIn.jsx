import React, { useState } from "react";

const countries = [
  "Nigeria",
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "France",
  "India",
  "China",
  "Japan",
  "South Africa",
  "Australia",
];

const Login = () => {
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setIsEditing(false); // Close the dropdown after selection
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(""); // Clear error message on change
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
  
    if (!email) {
      setEmailError("Email is required.");
      return;
    }
  
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await fetch("https://toetally-backend-1.onrender.com/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // Save token for future requests
        window.location.href = "/dashboard"; // Redirect user after login
      } else {
        setEmailError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      setEmailError("Server error. Please try again later.");
    }
  };
  

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:h-[900px] 2xl:h-screen">
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
          <div className="w-4/6 font-font-family-2">
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

            {/* Country Selector */}
            <div className="mb-3 flex w-3/6 mx-auto justify-center gap-3 items-center">
              <div>
                <p className="text-gray-700 my-auto font-semibold font-font-family-2">
                  {selectedCountry}
                </p>
              </div>

              {!isEditing ? (
                <div className="flex items-center mb-1 gap-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-[#969393] hover:underline"
                  >
                    Change
                  </button>
                </div>
              ) : (
                <select
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Email Input */}
            <div className="mx-auto flex flex-col justify-center">
              <input
                type="text"
                className="rounded-sm outline-none border-[#696767] w-full mx-auto border-[1px] px-3 py-2"
                placeholder="Email*"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="w-6/6 mx-auto mt-3">
  <p className="text-[#9F9F9F] font-[400] text-center">
    By continuing, I agree to Toetally’s{" "}
    <a
      className="hover:underline text-[#9F9F9F] decoration-inherit"
      href="#"
    >
      Privacy Policy and Terms of Use.
    </a>
  </p>
</div>


            {/* Continue Button */}
            <div className="w-full mx-auto">
              <button
                onClick={handleSubmit}
                className="bg-[#01497C] w-full py-2.5 rounded-md mx-auto text-[white]"
              >
                Continue
              </button>
            </div>

            <div className="flex gap-2 mt-3">
                <p>Don't have an account?</p> <a href="/signup" className="text-[#01497C] font-semibold">sign up</a>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
