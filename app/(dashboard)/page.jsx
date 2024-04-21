"use client";

import { useState, useEffect } from "react";
import useLanguage from "../../hooks/useLanguage";

// import ProductsList from "../components/ProductsList";
// import SearchSection from "../components/searchSection";

const Homepage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const language = useLanguage();

  return (
    <main className="w-full min-h-screen pt-[13rem] pb-[3rem] bg-mainLightBG">
      {/* <SearchSection
        setIsClicked={setIsClicked}
        setSearchItem={setSearchItem}
      />
      <ProductsList
        isClicked={isClicked}
        searchInp={searchItem}
        productsData={productsData}
      /> */}
      <h1 className="text-red-500">{language.landing.title}</h1>
      <h2 className="text-red-500">{language.landing.subTitle}</h2>
    </main>
  );
};

export default Homepage;
