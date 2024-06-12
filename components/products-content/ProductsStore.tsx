"use client";

import { useState, useEffect } from "react";

import ProductsStoreItem from "./ProductsStoreItem";
import { ProductsCart } from "@/types/types";

interface HomeProps {
  productsCart: ProductsCart[];
  isClicked: boolean;
  typed: string;
}

interface FilteredProductsProps {
  id: number;
  photo: string;
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

const ProductsStore = ({ productsCart, isClicked, typed }: HomeProps) => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [noProductsFound, setNoProductsFound] = useState(false);

  useEffect(() => {
    setProducts(productsCart);
  }, [productsCart]);

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
              productsCart={productsCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsStore;
