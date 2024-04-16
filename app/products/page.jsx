"use client";

import { useEffect, useState } from "react";

import Product from "../../components/Product";
import Layout from "../../components/Layout";

import styles from "../../components/ProductsList.module.css";

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
      setProductsData(data.products.slice(0, 10));
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
    <Layout>
      <div>
        <h1 className={styles["products-heading"]}>Products</h1>
        <div className={styles["products-wrapper"]}>
          <div className={styles["cards-container"]}>
            {/* {(searchInp === "" ? sortedData : filteredData).map((product) => (
            <Product productData={product} key={product.id} />
          ))} */}
            {productsData.map((product) => (
              <Product productData={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ProductsList;
