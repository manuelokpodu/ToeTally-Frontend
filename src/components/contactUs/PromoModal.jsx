import React, { useState } from "react";
import { X } from "lucide-react"; // Import X icon from Lucide

const PromoModal = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // Hide modal if dismissed

  return (

    <div className="2xl:container bg-black px-3 mx-auto">


   
    <div className="relative top-0 left-0 w-full bg-black text-white text-sm flex items-center justify-center px-4 py-2 h-[35px] mx-auto md:px-6">
  <p className="truncate my-auto text-[9px] md:text-[12px]">
    Sign up and get 20% off your first order. <a href="/signup" className="text-white underline cursor-pointer">Sign Up Now</a>
  </p>
  <button 
    onClick={() => setIsVisible(false)} 
    className="absolute right-4"
  >
    <X size={16} className="text-white hover:text-gray-300" />
  </button>
</div>

</div>



  );
};

export default PromoModal;
