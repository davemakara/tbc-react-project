"use client";

import { useI18n } from "@/locales/client";
import { ChangeEvent } from "react";

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchBlog = ({ onSearch }: SearchInputProps) => {
  const t = useI18n();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="w-full flex justify-center mb-16">
      <input
        type="search"
        placeholder={t("searchInput")}
        onChange={handleInputChange}
        className="w-4/5 md:w-2/3 xl:w-[550px] px-8 py-2 md:py-3 rounded-full"
      />
    </div>
  );
};

export default SearchBlog;
