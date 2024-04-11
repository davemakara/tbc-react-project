"use client";

const SearchSection = ({ setIsClicked, setSearchItem }) => {
  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const handleSort = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="search-box">
      <h2>ddd</h2>
      <div className="search-form">
        <input type="search" placeholder="Search.." onChange={handleSearch} />
        <button onClick={handleSort}>Sort</button>
      </div>
    </div>
  );
};

export default SearchSection;
