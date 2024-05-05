"use client";

import { useEffect, useState } from "react";
// import Product from "./Product";

import { useI18n } from "../../locales/client";
import ProductsStoreItem from "../home-content/ProductsStoreItem";

// import { fetchProducts } from "../../app/actions";

interface ProductDataProps {
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

// interface ProductsResponse {
//   products: ProductDataProps[];
// }

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const t = useI18n();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const products = await response.json();
      setData(products.products);
      setIsMounted(true);
    };

    fetchProducts();
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#DDDDDD] dark:bg-[#2C3333] py-[2rem]">
      {isMounted && (
        <h1 className="text-center text-[#000] dark:text-[#f4f4f4] font-bold text-[24px] md:text-[30px] md:py-[3rem]">
          {t("exploreProducts")}
        </h1>
      )}
      <div className="w-full pt-[2rem] px-12 flex flex-col items-center sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 xxl:gap-10">
          {data.map((product: ProductDataProps) => (
            // <Product productData={product} key={product.id} />
            <ProductsStoreItem productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsList;
