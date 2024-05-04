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
    <form className="w-full flex flex-col justify-center items-center">
      <input
        type="search"
        placeholder={t("searchInput")}
        value={inputText}
        onChange={handleInputChange}
        className="w-4/5 md:w-2/3 xl:w-3/5 xxl:w-2/5 px-8 py-2 md:py-3 rounded-full"
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
  );
};

export default SearchSection;
