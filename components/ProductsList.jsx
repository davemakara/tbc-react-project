"use client";

import { useEffect, useState } from "react";

import Product from "./Product";

const ProductsList = ({
  isClicked,
  filteredData,
  searchInp,
  productsData,
  sortedCards,
  renderCards,
}) => {
  // const [productsData, setProductsData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://dummyjson.com/products");

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }

  //     const data = await response.json();
  //     console.log(data.products);
  //     setProductsData(data.products.slice(0, 6));
  //   };

  //   fetchData();

  // }, []);

  // console.log(productsData);
  return (
    <div>
      <h1 className="products-heading">Products</h1>
      <div className="products-wrapper">
        <div className="cards-container">
          {(searchInp === "" ? renderCards : filteredData).map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
