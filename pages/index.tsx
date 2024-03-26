import { useGetNewsQuery } from "@/store/features/news/news-api";
import Error from "@/components/common/Error";
import React, { useEffect, useState } from "react";
import { News } from "@/types/news";
import Loading from "@/components/common/Loading";
import NewsCard from "@/components/News";
import Navbar from "@/components/ui/cors/Navbar";
import Search from "@/components/ui/Search";
import Image from 'next/image'
import { Subscribe } from "@/components/ui/Subscribe";

const newsData = {
  posts: [
    {
      date: "2024-03-21",
      thumbnailURL:
        "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
      title:
        "Breaking News: Scientists Discover New Species of Glittering Beetles",
      source: "The Entomology Gazette",
      linkToNews: "https://example.com/article1",
      visited: false,
    },
    {
      date: "2024-03-21",
      thumbnailURL:
        "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
      title:
        "SpaceX Launches First Tourist Mission SpaceX Launches First Tourist Mission SpaceX Launches First Tourist MissionSpaceX Launches First Tourist MissionSpaceX Launches First Tourist MissionSpaceX Launches First Tourist Mission ",
      source: "Galactic Explorer",
      linkToNews: "https://example.com/article2",
      visited: true,
    },
    {
      date: "2024-03-21",
      thumbnailURL:
        "https://images.freeimages.com/images/large-previews/c31/colors-1383652.jpg",
      title: "World's Largest Pizza Created in Italy",
      source: "Pizza Enthusiast Weekly",
      linkToNews: "https://example.com/article3",
      visited: false,
    },
  ],
  limit: 10,
  skip: 1,
};


const Index: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
  
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const filteredPosts = newsData.posts.filter(post =>
    post.source.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const filter = () =>{

  }
  // if (isLoading) {
  //   return  <Loading/>
  // }
  // if (isError) {
  //   return <Error/>
  // }
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Navbar handler={handleOpen}/>
      <div className="relative pt-10 pb-8 flex items-center justify-center flex-col w-full  px-10   overflow-hidden  ">
        <div className="sticky top-0 left-0 w-full    flex flex-col justify-center items-center ">
        <Search searchKeyword={searchKeyword} handleSearchInputChange={handleSearchInputChange} />

          {/* <div className=" w-full  m-2 p-2 flex justify-center items-center">
            <input
              type="search"
              placeholder="Search"
              className="w-[80%] px-4 py-2 rounded-l-full border border-gray-300  focus:border-blue-500"
            />
            <div className="bg-gray-200 px-3 py-2 rounded-r-full flex items-center">
              <img
                src="/search-icon.svg"
                alt="Search Icon"
                className="w-5 h-5"
              />
            </div>
          </div> */}
        </div>

        <section className=" w-full md:w-2/3 mt-8 h-[70vh] overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200">
          {filteredPosts.length > 0 ?filteredPosts?.map((post: News) => (
            <NewsCard post={post} key={post.title} />
          )) : <section>
               <div className="flex h-[150px] w-full flex-col items-center justify-center text-gray-300">
                    <Image
                      src="/no_data.svg"
                      alt="d"
                      width={100}
                      height={100}
                    />
                    <p>No Data</p>
                  </div>
            </section>}
        </section>
      </div>
      <Subscribe
            isOpen={isOpen}
            onClose={handleClose}
            message={`Once you subscribe to a keyword and time specification you will recieve news including your keyword timely. Thank you!`}
          />
    </div>
  );
};

export default Index;
