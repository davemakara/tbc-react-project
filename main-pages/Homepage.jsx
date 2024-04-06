"use client";
import { useState } from "react";

import ProductsList from "../components/ProductsList";

import { homepageCards } from "../components/store";

const Homepage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredData = homepageCards.filter((item) =>
    item.title.toLowerCase().startsWith(searchItem.toLowerCase())
  );

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
      />
    </main>
  );
};

export default Homepage;
