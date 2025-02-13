import React from "react";

const WelcomeModal = ({ showModal, setShowModal, navigate }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">Registration Successful!</h2>
        <p className="mb-4">Welcome to Toetally. You can now log in to your account.</p>
        <button
          onClick={() => {
            setShowModal(false);
            navigate("/login"); // Redirect to login page
          }}
          className="bg-[#01497C] text-white py-2 px-4 rounded-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
