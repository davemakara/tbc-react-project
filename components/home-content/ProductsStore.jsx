"use client";

import Image from "next/image";

import { useState, useEffect } from "react";

import ProductsStoreItem from "./ProductsStoreItem";

const ProductsStore = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const productsData = await response.json();
    setProducts(productsData.products);
    console.log(productsData.products);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="w-full block pt-[6rem] sm:flex sm:flex-col sm:items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5">
        {products.map((prod) => (
          <ProductsStoreItem productData={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsStore;
