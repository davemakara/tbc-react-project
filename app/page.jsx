"use client";
import { useState, useEffect } from "react";

import ProductsList from "../components/ProductsList";
import SearchSection from "../components/searchSection";

const Homepage = () => {
  const [productsData, setProductsData] = useState([]);

  const [isClicked, setIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setProductsData(data.products.slice(0, 6));
    };

    fetchData();
  }, []);

  return (
    <main className="main-wrapper">
      <SearchSection
        setIsClicked={setIsClicked}
        setSearchItem={setSearchItem}
      />
      <ProductsList
        isClicked={isClicked}
        searchInp={searchItem}
        productsData={productsData}
      />
    </main>
  );
};

export default Homepage;
