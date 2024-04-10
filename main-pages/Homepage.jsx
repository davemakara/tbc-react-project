"use client";
import { useState, useEffect } from "react";

import ProductsList from "../components/ProductsList";

// import { homepageCards } from "../components/store";

const Homepage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data.products);
      setProductsData(data.products.slice(0, 6));
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredData = productsData.filter((item) =>
    item.title.toLowerCase().startsWith(searchItem.toLowerCase())
  );
  const sortedCards = productsData.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const renderCards = isClicked ? sortedCards : productsData;

  const handleSort = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <main className="main-wrapper">
      <div className="search-box">
        <h2>ddd</h2>
        <div className="search-form">
          <input
            type="search"
            placeholder="Search.."
            value={searchItem}
            onChange={handleSearch}
          />
          <button onClick={handleSort}>{isClicked ? "Reset" : "Sort"}</button>
        </div>
      </div>
      <ProductsList
        isClicked={isClicked}
        searchInp={searchItem}
        filteredData={filteredData}
        sortedCards={sortedCards}
        renderCards={renderCards}
        productsData={productsData}
      />
    </main>
  );
};

export default Homepage;
