"use client";

import { useEffect, useState } from "react";
import SearchSection from "./SearchInputBox";
import ProductsStore from "./ProductsStore";
import { ProductsStoreProps } from "@/types/types";

const ProductsPageContent = ({
  productsStore,
}: {
  productsStore: ProductsStoreProps[];
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [typed, setTyped] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("All");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = (value: boolean) => {
    setIsClicked(value);
  };

  const handleInputChange = (arg: string) => {
    setTyped(arg);
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
    <div className="w-full pb-[2rem] px-8 sm:px-12">
      <SearchSection
        handleClick={handleClick}
        onInputChange={handleInputChange}
        onCategoryChange={handleCategoryChange}
      />
      {!mounted ? (
        <h1 className="pt-[6rem] font-semibold text-center text-[26px] text-[#000] dark:text-white">
          Loading...
        </h1>
      ) : (
        <ProductsStore
          productsStore={productsStore}
          isClicked={isClicked}
          typed={typed}
          category={category}
        />
      )}
    </div>
  );
};

export default ProductsPageContent;
