import React from 'react';
import { News } from '@/types/news';

interface Props {
  post: News;
}

const NewsCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md w-[60vw] p-4 m-2 flex flex-col md:flex-row ">
      <div className="md:mr-4 mb-4 md:mb-0 md:w-[20vw] md:h-[30vh] ">
        <img src={post.thumbnailURL} alt={post.title} className=" w-full h-full object-cover rounded-md" />
      </div>
      <div className="flex flex-col justify-between  w-[35vw] md:h-[30vh]  ">
        <div>
          <h2 className="text-black font-semibold text-[0.8rem] mb-2 whitespace-normal">{post.title}</h2>
          <p className="text-gray-600 text-sm mb-1">{post.source} | {post.date}</p>
        </div>
        <div className="flex items-center justify-end ">
          <input type="checkbox" checked={post.visited} className="mr-2"/>
          <p className="text-gray-600 text-sm">{post.visited ? 'Visited' : 'Unvisited'}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;