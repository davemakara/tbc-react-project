"use client";

import { useState } from "react";
import SearchSection from "./searchSection";
import ProductsStore from "./ProductsStore";

const HomeContent = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="w-full bg-mainLightBG dark:bg-mainDarkBG pb-[2rem] px-12 sm:px-16">
      <SearchSection />
      <ProductsStore />
    </div>
  );
};

export default HomeContent;
