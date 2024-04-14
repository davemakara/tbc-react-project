"use client";

import { useEffect, useState } from "react";

import Product from "../../components/Product";

const ProductsList = ({ isClicked, searchInp }) => {
  const [productsData, setProductsData] = useState([]);

  //   const [sortedData, setSortedData] = useState([...productsData]);
  //   const [filteredData, setFilteredData] = useState([...productsData]);

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

  //   useEffect(() => {
  //     if (isClicked) {
  //       setSortedData(
  //         [...productsData].sort((a, b) => a.title.localeCompare(b.title))
  //       );
  //     } else {
  //       setSortedData([...productsData]);
  //     }
  //   }, [isClicked, productsData]);

  //   useEffect(() => {
  //     const filtered = sortedData.filter((item) =>
  //       item.title.toLowerCase().startsWith(searchInp.toLowerCase())
  //     );
  //     setFilteredData(filtered);
  //   }, [searchInp, sortedData]);

  return (
    <div>
      <h1 className="products-heading">Products</h1>
      <div className="products-wrapper">
        <div className="cards-container">
          {/* {(searchInp === "" ? sortedData : filteredData).map((product) => (
            <Product productData={product} key={product.id} />
          ))} */}
          {productsData.map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
