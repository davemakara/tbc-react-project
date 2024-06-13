"use client";

import { useState, useEffect } from "react";

import ProductsStoreItem from "./ProductsStoreItem";
import { ProductsStoreProps } from "@/types/types";

interface HomeProps {
  productsStore: ProductsStoreProps[];
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
  category: string;
  thumbnail: string;
}

const ProductsStore = ({ productsStore, isClicked, typed }: HomeProps) => {
  const [products, setProducts] = useState<ProductsStoreProps[]>([]);
  const [sortedProducts, setSortedProducts] = useState<FilteredProductsProps[]>(
    []
  );
  const [noProductsFound, setNoProductsFound] = useState(false);

  useEffect(() => {
    const transformedProducts = productsStore.map((product) => ({
      id: product.id,
      photo: product.photo,
      title: product.title,
      description: product.description,
      price: product.price,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      stock: product.stock,
      category: product.category,
      thumbnail: product.thumbnail,
    }));
    setProducts(transformedProducts);
  }, [productsStore]);

  useEffect(() => {
    let filteredProducts: FilteredProductsProps[] = [...products];

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
              productsStore={productsStore}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsStore;
