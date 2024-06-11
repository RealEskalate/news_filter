import { ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";

type SubscribeProps = {
  isOpen: boolean;
  onClose: () => void;
  message: ReactNode;
};

export const Subscribe = ({ isOpen, onClose, message }: SubscribeProps) => {
  const [email, setEmail] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  const [frequency, setFrequency] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleFrequencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFrequency(event.target.value);
  };

  const validateForm = () => {
    setIsFormValid(email !== "" && keyword !== "" && frequency !== "");
  };
  useEffect(() => {
    validateForm();
  }, [email, keyword, frequency]);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/subscribe", {
        keyword,
        email,
        schedule: frequency,
      });
      console.log("Subscription response:", response.data);
      setKeyword("");
      setEmail("");
      setFrequency("");
      // Handle successful subscription (e.g., show a success message, reset form, etc.)
      setSuccessMessage(`Successfully subscribed to ${keyword}`);
      setError(null);
    } catch (error) {
      console.error("Error subscribing:", error);
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes("Already subscribed")) {
          setError(`Already subscribed to "${keyword}".`);
        } else {
          setError(errorMessage); // Show the actual error message from the API
        }
      } else {
        setError("Failed to subscribe. Please try again.");
      }
      setSuccessMessage(null);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={`p-6 fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white justify-center items-center md:w-3/5 rounded-lg p-6 relative shadow-xl">
        <button
          className="absolute top-1 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={onClose}
        >
          <Image
            src="/close.svg"
            alt="close"
            width={20}
            height={20}
            className="mb-3"
          />
        </button>
        {/* main section of modal */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg overflow-hidden">
          <div className="w-full relative h-full flex justify-start">
            {/* Text Message */}
            <div className="h-full w-full inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-50 p-5">
              <h1 className="text-3xl font-bold mb-4">Subscribe to Keyword</h1>
              <p className="text-lg text-white">{message}</p>
            </div>
          </div>
          {/* Form */}
          <div className="w-full">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="keyword"
                >
                  Keyword
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="keyword"
                  type="text"
                  placeholder="Keyword"
                  value={keyword}
                  onChange={handleKeywordChange}
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
                  <option value="immediately">immediately</option>
                  <option value="once_a_day">once a day</option>
                  <option value="twice_a_day">twice a day</option>
                  <option value="once_a_week">once a week</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className={`font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                    !isFormValid || isLoading
                      ? "bg-yellow-300 cursor-not-allowed"
                      : "bg-yellow-400 hover:bg-yellow-500 text-white"
                  }`}
                  type="submit"
                  disabled={!isFormValid || isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
              {error && <p className="text-red-500 mt-4">{error}</p>}
              {successMessage && (
                <div className="mb-4 text-green-500">{successMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
