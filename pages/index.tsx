import { useGetNewsQuery } from "@/store/features/news/news-api";
import Error from "@/components/common/Error";
import React, { useEffect, useState } from "react";
import { News } from "@/types/news";
import Loading from "@/components/common/Loading";
import NewsCard from "@/components/News";

const Index: React.FC = () => {
  // const { data: newsData, isLoading, isError } = useGetNewsQuery()
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const newsData = {
    posts:
      [
        {
          date: "2024-03-21",
          thumbnailURL: "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
          title: "Breaking News: Scientists Discover New Species of Glittering Beetles",
          source: "The Entomology Gazette",
          linkToNews: "https://example.com/article1",
          visited: false
        },
        {
          date: "2024-03-21",
          thumbnailURL: "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
          title: "SpaceX Launches First Tourist Mission SpaceX Launches First Tourist Mission SpaceX Launches First Tourist MissionSpaceX Launches First Tourist MissionSpaceX Launches First Tourist MissionSpaceX Launches First Tourist Mission ",
          source: "Galactic Explorer",
          linkToNews: "https://example.com/article2",
          visited: true
        },
        {
          date: "2024-03-21",
          thumbnailURL: "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
          title: "World's Largest Pizza Created in Italy",
          source: "Pizza Enthusiast Weekly",
          linkToNews: "https://example.com/article3",
          visited: false
        }
      ],
    limit: 10,
    skip:1,
  }
  // if (isLoading) {
  //   return  <Loading/>
  // }
  // if (isError) {
  //   return <Error/>
  // }
  return (
    <div className="bg-gray-100">
      {/* Logo */}
      <div className={`bg-white p-5 h-[20vh] flex justify-between items-center ${isSticky ? 'sticky top-0 left-0 w-full z-10' : 'relative'}`}>
        <img src="/Rectangle11.png" alt="Logo" className="mb-2 h-[18vh]" />
        <div className="bg-yellow-900 flex items-center p-2 h-[5vh] rounded-full">
          <button className="text-white font-bold text-[0.5rem] pr-3">
            Subscribe to Keyword
          </button>
          <img src="/vector.svg" alt="add" />
        </div>
      </div>


      <div className="pt-20 pb-8 flex items-center justify-center flex-col">
          {/* Search Field */}
          <div className="relative">
            <div className="flex">
              <input
                type="text"
                placeholder="Search"
                className="w-[60vw] px-10 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <div className="bg-gray-200 px-3 py-2 rounded-r-full flex items-center">
                <img src="/search-icon.svg" alt="Search Icon" className="w-5 h-5" />
              </div>
            </div>
          </div>
        

        <section className="mt-8">
          {newsData?.posts?.map((post: News)=> (
            <NewsCard post={post} key={post.title}/>
          ))} 
        </section>
      </div>
    </div>
  );
};

export default Index;