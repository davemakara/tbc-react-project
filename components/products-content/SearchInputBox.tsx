"use client";

import { ChangeEvent } from "react";
import { useI18n } from "../../locales/client";

import { useState } from "react";

interface SearchSectionProps {
  handleClick: (value: boolean) => void;
  onInputChange: (arg: string) => void;
}

const SearchSection = ({ handleClick, onInputChange }: SearchSectionProps) => {
  const [inputText, setInputText] = useState<string>("");
  const t = useI18n();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    onInputChange(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "true"; // Convert string to boolean
    handleClick(value);
  };

  return (
    <div className="w-full flex flex-col-reverse xl:flex-row xl:justify-around xl:items-center">
      <div className="w-full md:w-[640px] lg:w-[500px] xxl:w-[640px] md:mx-auto xl:mx-0 p-6 bg-mainLightBG dark:bg-mainDarkBG dark:bg-opacity-90 bg-opacity-90 rounded-2xl">
        <p className="font-semibold mb-4 text-lg lg:text-xl">
          Choose Your Category:
        </p>
        <div className="flex w-full justify-between">
          <button className="w-32 h-12 bg-red rounded-lg">All</button>
          <button className="w-32 h-12 bg-red rounded-lg">Albums</button>
          <button className="w-32 h-12 bg-red rounded-lg">Accessories</button>
          <button className="w-32 h-12 bg-red rounded-lg">Instruments</button>
        </div>
      </div>

      <form className="flex flex-col justify-center items-center">
        <input
          type="search"
          placeholder={t("searchInput")}
          value={inputText}
          onChange={handleInputChange}
          className="w-4/5 md:w-2/3 xl:w-[400px] xxl:w-[500px] px-8 py-2 md:py-3 rounded-full"
        />
        {/* <button
        type="button"
        onClick={handleClick}
        className="bg-darkYellow ml-2 w-[80px] md:w-[100px] rounded-3xl text-[14px] md:text-[18px] font-semibold"
      >
        {!btnClicked ? "Sort" : "Reset"}
      </button> */}
        <div className="flex items-center mt-10 text-[18px]">
          <label htmlFor="products" className="mr-3">
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
