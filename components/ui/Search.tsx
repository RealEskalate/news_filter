import React, { ChangeEvent } from "react";
interface SearchProps {
  searchKeyword: string;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({
  searchKeyword,
  handleSearchInputChange,
}) => {
  return (
    <form className=" mx-auto w-full  flex justify-center items-center ">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative w-[80%] ">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-lg">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-full overflow-hidden"
          placeholder="Search news title..."
          required
          value={searchKeyword}
          onChange={handleSearchInputChange}
        />
      </div>
    </form>
  );
};

export default Search;
