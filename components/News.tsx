import React, { useState } from "react";
import axios from "axios";
import { News } from "@/types/news";

interface Props {
  post: News;
}

const NewsCard: React.FC<Props> = ({ post }) => {
  const [isVerified, setIsVerified] = useState<boolean>(post.is_verified);

  const handleCheckboxChange = async () => {
    const newVerificationStatus = !isVerified;
    try {
      await axios.get(`/api/verification/${post.id}?status=${newVerificationStatus}`);
      setIsVerified(newVerificationStatus); // Update local state
    } catch (error) {
      console.error("Error updating verification status:", error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 my-4 flex flex-col md:flex-row">
      <div className="md:mr-4 mb-4 md:mb-0 md:w-[20vw] md:h-[30vh]">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col justify-between md:w-[35vw] md:h-[30vh] ">
        <div className="w-full h-full flex flex-col justify-center items-center md:justify-start md:items-start ">
          <h2 className="text-black font-semibold text-[0.8rem] mb-2 whitespace-normal">
            {post.title}
          </h2>
          <p className="text-gray-600 text-sm mb-1">
            {post.source} | {post.pub_date}
          </p>
          {/* <a href={post.link}>
            <button className="px-5 py-3 rounded-full bg-blue-500">
              see more
            </button>
          </a> */}
        </div>
        <div className="flex items-center justify-end cursor-pointer">
          <input
            type="checkbox"
            checked={isVerified}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <p className="text-gray-600 text-sm">
            {isVerified ? "Visited" : "Unvisited"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
