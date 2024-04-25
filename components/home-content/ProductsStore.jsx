"use client";

import { useState, useEffect } from "react";

import ProductsStoreItem from "./ProductsStoreItem";

const ProductsStore = ({ isClicked, typed }) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [noProductsFound, setNoProductsFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const productsData = await response.json();
    setProducts(productsData.products);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    let filteredProducts = [...products];

    if (typed !== "") {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().startsWith(typed.toLowerCase())
      );
    }

    if (isClicked) {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (filteredProducts.length === 0) {
      setNoProductsFound(true);
    } else {
      setNoProductsFound(false);
      setSortedProducts(filteredProducts);
    }
  }, [typed, isClicked, products]);

  return (
    <div className="w-full block pt-[6rem] sm:flex sm:flex-col sm:items-center">
      {isLoading && <h1>Loading products..</h1>}
      {noProductsFound ? (
        <h1 className="font-semibold text-[26px] text-[#000] dark:text-white">
          No products found.
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 md:gap-5">
          {sortedProducts.map((prod) => (
            <ProductsStoreItem productData={prod} key={prod.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsStore;
