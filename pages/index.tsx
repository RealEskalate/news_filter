import React from "react";

const Index: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Logo */}
      <img src="/Rectangle11.png" alt="Logo" className="mb-2" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Button */}
        <button className="w-314 h-49 font-black border border-red-600">
          Your Button
        </button>

        {/* Search Field */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[60vw] px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 3a6 6 0 016 6c0 1.668-.672 3.175-1.757 4.243l5.727 5.727-1.414 1.414-5.727-5.727A6 6 0 019 15a6 6 0 110-12zM7 3a4 4 0 100 8 4 4 0 000-8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Index;
