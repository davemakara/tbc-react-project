"use client";

import { ChangeEvent } from "react";

import { useState } from "react";

// import { useTranslation } from "react-i18next";

interface SearchSectionProps {
  handleClick: () => void;
  onInputChange: (arg: string) => void;
  btnClicked: boolean;
}

const SearchSection = ({
  handleClick,
  onInputChange,
  btnClicked,
}: SearchSectionProps) => {
  // const { t } = useTranslation();

  const [inputText, setInputText] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <form className="w-full flex justify-center">
      <input
        type="search"
        placeholder="Search.."
        value={inputText}
        onChange={handleInputChange}
        className="w-3/5 md:w-1/3 px-8 py-2 md:py-3 rounded-full"
      />
      <button
        type="button"
        onClick={handleClick}
        className="bg-darkYellow ml-2 w-[80px] md:w-[100px] rounded-3xl text-[14px] md:text-[18px] font-semibold"
      >
        {!btnClicked ? "Sort" : "Reset"}
      </button>
    </form>
  );
};

export default SearchSection;
