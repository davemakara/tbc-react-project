"use client";

import { useState } from "react";
import SearchSection from "./searchSection";
import ProductsStore from "./ProductsStore";
import { type } from "@testing-library/user-event/dist/type";

const HomeContent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [typed, setTyped] = useState("");

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleInputChange = (arg) => {
    setTyped(arg);
  };

  console.log(isClicked);
  return (
    <div className="w-full bg-mainLightBG dark:bg-mainDarkBG pb-[2rem] px-12 sm:px-16">
      <SearchSection
        handleClick={handleClick}
        onInputChange={handleInputChange}
      />
      <ProductsStore isClicked={isClicked} typed={typed} />
    </div>
  );
};

export default HomeContent;
