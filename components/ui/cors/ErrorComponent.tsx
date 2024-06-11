"use client";

import { useEffect } from "react";

interface ErrorProps {
  reset: () => void;
}

const ErrorComponent: React.FC<ErrorProps> = ({ reset }) => {
  return (
    <div className=" w-full flex flex-col h-[50vh] justify-center items-center ">
      <h2 className="text-red-400 mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="px-8 py-3 rounded-full bg-red-400 hover:bg-red-300"
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorComponent;
