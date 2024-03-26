import { ReactNode, useState } from "react";

type SubscribeProps = {
  isOpen: boolean;
  onClose: () => void;
  message: ReactNode;
};

export const Subscribe = ({ isOpen, onClose, message }: SubscribeProps) => {
  const [frequency, setFrequency] = useState<string>("");

  const handleFrequencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFrequency(event.target.value);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white justify-center items-center w-[60%] rounded-lg p-6 relative shadow-xl">
        <button
          className="absolute top-1 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
        {/* main section of modal */}
        <div className="flex justify-center items-center bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 m-6 relative h-full">
            {/* Text Message */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50">
              <h1 className="text-3xl font-bold mb-4">Subscribe to Keyword</h1>
              <p className="text-lg text-white">{message}</p>
            </div>
          </div>
          {/* Form */}
          <div className="w-full md:w-1/2 p-8">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="keyword"
                >
                  Keyword
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="keyword"
                  type="text"
                  placeholder="Keyword"
                />
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="frequency"
                >
                  Frequency
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleFrequencyChange}
                  value={frequency}
                >
                  <option value="">Select Frequency</option>
                  <option value="once a week">Once a week</option>
                  <option value="twice a week">Twice a week</option>
                  <option value="once a month">Once a month</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
