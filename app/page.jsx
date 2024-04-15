"use client";
import { useState, useEffect } from "react";

import ProductsList from "../components/ProductsList";
import SearchSection from "../components/searchSection";
import Layout from "../components/Layout";

const Homepage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  return (
    <Layout>
      <main className="main-wrapper">
        {/* <SearchSection
        setIsClicked={setIsClicked}
        setSearchItem={setSearchItem}
      />
      <ProductsList
        isClicked={isClicked}
        searchInp={searchItem}
        productsData={productsData}
      /> */}
        <h1>This is main page!</h1>
        <h2>Content to be added soon..</h2>
      </main>
    </Layout>
  );
};

export default Homepage;
