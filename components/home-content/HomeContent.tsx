"use client";

import { useEffect, useState } from "react";
import SearchSection from "./SearchInputBox";
import ProductsStore from "./ProductsStore";

const HomeContent = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [typed, setTyped] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (value: boolean) => {
    // setIsClicked((prev) => !prev);
    setIsClicked(value);
  };

  const handleInputChange = (arg: string) => {
    setTyped(arg);
  };

  return (
    <div className="w-full bg-[#E7F6F2] dark:bg-purple pb-[2rem] px-12 sm:px-16">
      <SearchSection
        handleClick={handleClick}
        onInputChange={handleInputChange}
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
