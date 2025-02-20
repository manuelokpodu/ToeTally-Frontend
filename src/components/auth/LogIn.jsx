import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setIsEditing(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
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
      const response = await fetch("https://backend-toetally.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token);
        window.location.href = "/";
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
        <div className="lg:w-[55%] h-full hidden lg:block relative">
          <img
            src="/auth.svg"
            alt="login image"
            className="w-full h-full object-cover"
          />
          

          <div className="flex justify-center">
          <img src="/authv.svg" alt="auth vector" className="absolute bottom-8  " />
          </div>

          
        </div>

        <div className="lg:w-[45%] py-12 lg:py-0 flex flex-col justify-center items-center md:px-8">
          <div className="w-5/6 2xl:w-4/6 font-font-family-2">
            <Link to="/" className="flex justify-center gap-2 items-center text-black no-underline">
              <img src="/logo.svg" alt="logo" className="w-16 h-16" />
              <h1 className="font-font-family-1 text-2xl font-bold mt-2">TOETALLY</h1>
            </Link>

            <div className="mt-2">
              <p className="text-gray-600 text-lg text-align-custom font-semibold font-font-family-2">
                Enter your email to join us or sign in
              </p>
            </div>

           

            <div className="mx-auto flex flex-col justify-center">

            <label htmlFor="email" className="text-sm lg:hidden font-bold mb-2">Email</label>
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

            <div className="relative mt-3">
            <label htmlFor="password" className="text-sm lg:hidden font-bold mb-2">Password</label>
           

              <input
                type={showPassword ? "text" : "password"}
                className="rounded-sm outline-none border-[#696767] w-full mx-auto border-[1px] px-3 py-2"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-9 lg:top-3  cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="w-6/6 mx-auto mt-3">
              <p className="text-[#9F9F9F] font-[400] text-start">
                By continuing, I agree to Toetally’s{" "}
                <a
                  className="hover:underline text-[#9F9F9F] decoration-inherit"
                  href="#"
                >
                  Privacy Policy and Terms of Use.
                </a>
              </p>
            </div>

            <div className="w-full mx-auto">
              <button
                onClick={handleSubmit}
                className="bg-[#01497C] w-full py-2.5 rounded-md mx-auto text-[white]"
              >
                Continue
              </button>
            </div>

            <div className="flex justify-center md:justify-start text-align-custom gap-2 mt-3 text-[14px] md:text-[16px]">
              <p>Don't have an account?</p> <a href="/signup" className="text-[#01497C] font-semibold">sign up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
