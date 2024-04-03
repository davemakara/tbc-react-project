"use client";
import { useState } from "react";

const SearchBox = ({ sortedFunction }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSort = () => {
    setIsClicked((prev) => !prev);
  };

  sortedFunction(isClicked);

  return (
    <div className="search-box">
      <h2>ddd</h2>
      <div className="search-form">
        <input type="search" placeholder="Search.." />
        <button onClick={handleSort}>Sort</button>
      </div>
    </div>
  );
};
export default SearchBox;
