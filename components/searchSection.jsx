"use client";

import styles from "./SearchSection.module.css";

const SearchSection = ({ setIsClicked, setSearchItem }) => {
  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSort = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className={styles["search-box"]}>
      <h2>ddd</h2>
      <div className={styles["search-form"]}>
        <input type="search" placeholder="Search.." onChange={handleSearch} />
        <button onClick={handleSort}>Sort</button>
      </div>
    </div>
  );
};

export default SearchSection;
