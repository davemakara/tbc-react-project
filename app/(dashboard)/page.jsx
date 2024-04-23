"use client";

import { useState, useEffect } from "react";

// import ProductsList from "../components/ProductsList";
import SearchSection from "../../components/searchSection";
import ProductsList from "../../components/ProductsList";

const Homepage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  return (
    <main className="w-full min-h-screen pt-[2rem] md:pt-[6rem] pb-[3rem] bg-mainLightBG dark:bg-mainDarkBG">
      <SearchSection />
      {/* 
      <ProductsList
        isClicked={isClicked}
        searchInp={searchItem}
        productsData={productsData}
      /> */}
    </main>
  );
};

export default Homepage;
