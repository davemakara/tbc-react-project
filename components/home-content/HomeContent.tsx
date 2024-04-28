"use client";

import { useEffect, useState } from "react";
import SearchSection from "./searchSection";
import ProductsStore from "./ProductsStore";

const HomeContent = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [typed, setTyped] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleInputChange = (arg: string) => {
    setTyped(arg);
  };

  return (
    <div className="w-full bg-mainLightBG dark:bg-mainDarkBG pb-[2rem] px-12 sm:px-16">
      <SearchSection
        handleClick={handleClick}
        onInputChange={handleInputChange}
        btnClicked={isClicked}
      />
      {!mounted ? (
        <h1 className="pt-[6rem] font-semibold text-center text-[26px] text-[#000] dark:text-white">
          Loading...
        </h1>
      ) : (
        <ProductsStore isClicked={isClicked} typed={typed} />
      )}
    </div>
  );
};

export default HomeContent;
