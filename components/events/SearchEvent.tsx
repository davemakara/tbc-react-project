"use client";

import { ChangeEvent } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchEvent = ({ onSearch }: SearchInputProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full flex justify-center mb-16">
      <input
        type="search"
        placeholder="Search.."
        onChange={handleInputChange}
        className="w-4/5 md:w-2/3 xl:w-[550px] px-8 py-2 md:py-3 rounded-full"
      />
    </div>
  );
};

export default SearchEvent;
