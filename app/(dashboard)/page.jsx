"use client";

import { useState, useEffect } from "react";

// import ProductsList from "../components/ProductsList";
// import SearchSection from "../components/searchSection";

const Homepage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  return (
    <main className="w-full min-h-screen pt-[13rem] pb-[3rem] bg-mainLightBG dark:bg-mainDarkBG">
      {/* <SearchSection
        setIsClicked={setIsClicked}
        setSearchItem={setSearchItem}
      />
      <ProductsList
        isClicked={isClicked}
        searchInp={searchItem}
        productsData={productsData}
      /> */}
      <h1 className="text-red-500">This is main page!</h1>
      <h2 className="text-red-500">Content to be added soon..</h2>
    </main>
  );
};

export default Homepage;
