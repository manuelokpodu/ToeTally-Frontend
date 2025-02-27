import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LineWave } from "react-loader-spinner"; 
import SignupModal from "../modal/SignupModal";

const SignUp = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return {
      minLength,
      hasUppercase,
      hasLowercase,
      hasNumber,
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { firstName, lastName, email, password } = formData;
    const errors = {};
  
    if (!firstName) errors.firstName = "First name is required";
    if (!lastName) errors.lastName = "Last name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
  
    setErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://backend-toetally.onrender.com/api/auth/signup",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, password }),
          }
        );
  
        const data = await response.json();
  
        if (response.ok) {
          // Store user data in localStorage
          localStorage.setItem(
            "user",
            JSON.stringify({ firstName, lastName, email })
          );
          

          setShowModal(true); // Show success modal
        } else {
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        alert("Server is unreachable. Try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const passwordValidation = validatePassword(formData.password);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:h-[900px] 2xl:h-screen">
        {/* Left Section: Image */}
        <div className="lg:w-[55%] h-full hidden lg:block relative">
          <img
            src="/auth.svg"
            alt="login image"
            className="w-full h-full object-cover"
          />
          <div className="flex justify-center">
            <img src="/authv.svg" alt="auth vector" className="absolute bottom-8" />
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="lg:w-[45%] w-full mx-auto py-12 lg:py-0 flex flex-col justify-center items-center md:px-2">
          <div className="w-5/6 font-font-family-2">
            {/* Logo and Title */}
            <Link to="/" className="flex gap-2 items-center justify-center text-black no-underline">
              <img src="/logo.svg" alt="logo" className="w-16 h-16" />
              <h1 className="font-font-family-1 text-2xl font-bold mt-2">TOETALLY</h1>
            </Link>

            {/* Description */}
            <div className="mt-2">
              <p className="text-gray-600 text-lg text-center font-semibold font-font-family-2">
                Now let’s make you a Toetally member
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <div className="w-full">
                  <label htmlFor="name" className="text-sm lg:hidden font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    className="rounded-sm outline-none border-[#696767] w-full border-[1px] px-2 py-2"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="w-full sm:mt-2 md:mt-[30px] lg:mt-0">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    className="rounded-sm outline-none border-[#696767] w-full border-[1px] px-2 py-2"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="mt-4">
                <label htmlFor="email" className="text-sm lg:hidden font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="outline-none w-full px-2 py-2 border-[1px] border-[#696767] rounded-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="mt-4 relative">
                <label htmlFor="password" className="text-sm lg:hidden font-bold mb-2">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password*"
                  className="outline-none w-full px-2 py-2 border-[1px] border-[#696767] rounded-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div
                  className="absolute right-3 top-11 lg:top-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}

              {/* Password Validation Indicators */}
              <div className="mt-2">
                <p
                  className={`text-sm ${passwordValidation.minLength ? "text-green-500" : "text-[#979797]"}`}
                >
                  {passwordValidation.minLength ? "✔" : "✖"} Minimum of 8
                  characters
                </p>
                <p
                  className={`text-sm ${passwordValidation.hasUppercase && passwordValidation.hasLowercase && passwordValidation.hasNumber ? "text-green-500" : "text-[#979797]"}`}
                >
                  {passwordValidation.hasUppercase &&
                  passwordValidation.hasLowercase &&
                  passwordValidation.hasNumber
                    ? "✔"
                    : "✖"} Uppercase, lowercase letters, and one number
                </p>
              </div>

              <div>
                <div className="flex gap-2 relative">
                  <input type="checkbox" className="absolute top-1" />
                  <p className="text-sm lg:text-base ml-5">
                    Sign up for emails to get updates from Toetally on products, offers, and your member benefits.
                  </p>
                </div>
                <div className="flex gap-2 relative">
                  <input type="checkbox" className="absolute mt-1" />
                  <p className="text-sm lg:text-base ml-5">
                    I agree to Toetally‘s <span className="font-semibold">Privacy Policy</span> and <span className="font-semibold">Terms of use</span>.
                  </p>
                </div>
              </div>

              {/* Continue Button */}
              <div className="w-full mx-auto mt-2">
              <button type="submit" className="bg-[#01497C] w-full py-2.5 rounded-md mx-auto text-white flex justify-center items-center">
                {isLoading ? (
                  <LineWave height="25" width="50" color="#ffffff" ariaLabel="line-wave-loading" />
                ) : (
                  "Register"
                )}
              </button>
            </div>

              <div className="flex gap-2 mt-3 justify-center lg:justify-start">
                <p>Have an account?</p> <a href="/login" className="text-[#01497C] font-semibold">Sign in</a>
              </div>

              {showModal && <SignupModal onClose={() => setShowModal(false)} />}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
