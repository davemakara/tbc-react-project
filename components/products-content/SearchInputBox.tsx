"use client";

import { ChangeEvent, useState } from "react";
import { useI18n } from "../../locales/client";

interface SearchSectionProps {
  handleClick: (value: boolean) => void;
  onInputChange: (arg: string) => void;
  onCategoryChange: (category: string) => void;
}

const SearchSection = ({
  handleClick,
  onInputChange,
  onCategoryChange,
}: SearchSectionProps) => {
  const [inputText, setInputText] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const t = useI18n();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    onInputChange(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "true"; // Convert string to boolean
    handleClick(value);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const getButtonClass = (category: string) => {
    return `w-full h-12 text-sm border-2 font-semibold ${
      activeCategory === category
        ? "border-red"
        : "border-[#000] dark:border-white"
    }`;
  };

  return (
    <div className="w-full flex flex-col-reverse xl:flex-row xl:justify-around xl:items-center">
      <div className="w-full md:w-[640px] lg:w-[600px] xl:w-[550px] xxl:w-[640px] md:mx-auto xl:mx-0 p-6 bg-[#eee] dark:bg-mainDarkBG dark:bg-opacity-90 bg-opacity-90 shadow-md shadow-mainDarkBG">
        <p className="font-semibold mb-4 text-lg lg:text-xl">Categories:</p>
        <div className="flex flex-col gap-4 sm:flex-row w-full md:justify-between">
          <button
            onClick={() => handleCategoryClick("All")}
            className={getButtonClass("All")}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryClick("Albums")}
            className={getButtonClass("Albums")}
          >
            Albums
          </button>
          <button
            onClick={() => handleCategoryClick("Accessories")}
            className={getButtonClass("Accessories")}
          >
            Accessories
          </button>
          <button
            onClick={() => handleCategoryClick("Instruments")}
            className={getButtonClass("Instruments")}
          >
            Instruments
          </button>
        </div>
      </div>

      <form className="flex flex-col justify-center items-center mb-8 xl:mb-0">
        <input
          type="search"
          placeholder={t("searchInput")}
          value={inputText}
          onChange={handleInputChange}
          className="w-4/5 md:w-2/3 lg:w-[600px] xl:w-[500px] xxl:w-[550px] px-8 py-2 md:py-3 rounded-full bg-[#eee] dark:bg-mainDarkBG"
        />
        <div className="flex items-center mt-10 text-[18px]">
          <label htmlFor="products" className="mr-3 text-white">
            {t("sortBy")}
          </label>
          <select
            name="products"
            id="products"
            onChange={handleSortChange}
            className="p-1"
          >
            <option value="false">{t("sortDefault")}</option>
            <option value="true">{t("sortPrice")}</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchSection;
