"use client";

import { useState, useEffect } from "react";

import ProductsStoreItem from "./ProductsStoreItem";
// import { BASE_URL } from "@/constants";

interface HomeProps {
  isClicked: boolean;
  typed: string;
}

interface FilteredProductsProps {
  id: number;
  images: string[];
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

const ProductsStore = ({ isClicked, typed }: HomeProps) => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [noProductsFound, setNoProductsFound] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://dummyjson.com/products", {
        cache: "no-store",
      });

      const productsData = await response.json();

      setProducts(productsData.products);
    };
    const getCartProducts = async () => {
      const response = await fetch(
        "http://localhost:3000//api/products/get-products",
        {
          cache: "no-store",
        }
      );
      const { products } = await response.json();

      setCartProducts(products.rows);
    };
    getProducts();
    getCartProducts();
  }, []);

  useEffect(() => {
    let filteredProducts = [...products];

    if (typed !== "") {
      filteredProducts = filteredProducts.filter(
        (product: FilteredProductsProps) =>
          product.title.toLowerCase().startsWith(typed.toLowerCase())
      );
    }

    if (isClicked) {
      filteredProducts.sort(
        (a: FilteredProductsProps, b: FilteredProductsProps) =>
          b.price - a.price
      );
    }

    if (filteredProducts.length === 0) {
      setNoProductsFound(true);
    } else {
      setNoProductsFound(false);
      setSortedProducts(filteredProducts);
    }
  }, [typed, isClicked, products]);

  return (
    <div className="w-full flex flex-col items-center pt-[6rem] sm:flex sm:flex-col sm:items-center">
      {typed !== "" && noProductsFound ? (
        <h1 className="font-semibold text-[26px] text-[#000] dark:text-white">
          No products found.
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 xxl:gap-10">
          {sortedProducts.map((prod: FilteredProductsProps) => (
            <ProductsStoreItem
              productData={prod}
              key={prod.id}
              productsCart={cartProducts}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsStore;
