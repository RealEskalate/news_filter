import { useGetNewsQuery } from "@/store/features/news/news-api";
import Error from "@/components/common/Error";
import React, { useEffect, useState } from "react";
import Loading from "@/components/common/Loading";
import NewsCard from "@/components/News";
import Navbar from "@/components/ui/cors/Navbar";
import Search from "@/components/ui/Search";
import Image from "next/image";
import { Subscribe } from "@/components/ui/Subscribe";
import axios from "axios";
import { News, NewsData } from "@/types/news";
import ShimmerEffect from "@/components/ui/ShimmerEffect";
import ErrorComponent from "@/components/ui/cors/ErrorComponent";


const Index: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [newsData, setNewsData] = useState<NewsData>({ results: [] });
  const [filteredPosts, setFilteredPosts] = useState<News[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [fetchTrigger, setFetchTrigger] = useState<boolean>(false);

  useEffect(() => {
    // Fetch all data initially
    const fetchAllData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/api/search");

        setNewsData(response.data);
        setFilteredPosts(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [fetchTrigger]);

  useEffect(() => {
    // Filter posts based on search keyword
    if (searchKeyword) {
      const filtered = newsData.results.filter(
        (post) =>
          post.source.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          post.title.includes(searchKeyword),
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(newsData.results);
    }
  }, [searchKeyword, newsData.results]);

  const resetError = () => {
    setIsError(false);
    setFetchTrigger((prev) => !prev);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchKeyword(event.target.value);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const filter = () => {};
  // if (isLoading) {
  //   return  <Loading/>
  // }
  // if (isError) {
  //   return <Error/>
  // }
  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <Navbar handler={handleOpen} />
      <div className="relative pt-10 pb-8 flex items-center justify-center flex-col w-full  px-10   overflow-hidden  ">
        <div className="sticky top-0 left-0 w-full    flex flex-col justify-center items-center ">
          <Search
            searchKeyword={searchKeyword}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>

        {isLoading ? (
          // Shimmer effect while loading
          <ShimmerEffect count={3} />
        ) : isError ? (
          // Error message
          <ErrorComponent reset={resetError} />
        ) : filteredPosts.length > 0 ? (
          // Render filtered news posts
          <section className="w-full md:w-2/3 px-5 mt-8 h-[70vh] overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200">
            {filteredPosts.map((post: News) => (
              <NewsCard post={post} key={post.title} />
            ))}
          </section>
        ) : (
          // No data message
          <section>
            <div className="flex h-[150px] w-full flex-col items-center justify-center text-gray-300">
              <Image src="/no_data.svg" alt="d" width={100} height={100} />
              <p>No Data</p>
            </div>
          </section>
        )}
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
