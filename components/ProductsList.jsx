"use client";

import { useEffect, useState } from "react";

import Product from "./Product";

const ProductsList = ({ isClicked, searchInp, productsData }) => {
  const [sortedData, setSortedData] = useState([...productsData]);
  const [filteredData, setFilteredData] = useState([...productsData]);

  useEffect(() => {
    if (isClicked) {
      setSortedData(
        [...productsData].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else {
      setSortedData([...productsData]);
    }
  }, [isClicked, productsData]);

  useEffect(() => {
    const filtered = sortedData.filter((item) =>
      item.title.toLowerCase().startsWith(searchInp.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchInp, sortedData]);

  return (
    <div>
      <h1 className="products-heading">Products</h1>
      <div className="products-wrapper">
        <div className="cards-container">
          {(searchInp === "" ? sortedData : filteredData).map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsList;