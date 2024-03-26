import React from "react";

const Error: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-200 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-semibold text-red-600 mb-4">Error</h2>
        <p className="text-gray-800">bad request</p>
      </div>
    </div>
  );
};

export default Error;
