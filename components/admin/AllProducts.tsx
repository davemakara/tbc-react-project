"use client";

import { useState, useEffect } from "react";

import { getProducts } from "@/app/api";
import { ProductsStoreProps } from "@/types/types";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const blogsData = await getProducts();
        setProducts(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      <p className="text-[#000] dark:text-white text-4xl font-semibold text-center mb-8">
        Products
      </p>
      <table className="w-full">
        <thead>
          <tr className="w-full h-20 flex justify-between bg-red border-b border-b-white">
            <th className="w-[150px] h-20 flex justify-center items-center">
              id
            </th>
            <th className="w-[150px] h-20 flex justify-center items-center">
              Title
            </th>
            <th className="w-[150px] h-20 flex justify-center items-center">
              Category
            </th>
            <th className="w-[150px] h-20 flex justify-center items-center">
              Price
            </th>
            <th className="w-[150px] h-20 flex justify-center items-center">
              Stock
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length !== 0 &&
            products.map((product: ProductsStoreProps) => (
              <tr
                key={product.id}
                className="w-full flex justify-between border-b border-b-white"
              >
                <td className="w-[150px] h-20 flex justify-center items-center">
                  {product.id}
                </td>
                <td className="w-[150px] h-20 flex justify-center items-center">
                  {product.title}
                </td>
                <td className="w-[150px] h-20 flex justify-center items-center">
                  {product.category}
                </td>
                <td className="w-[150px] h-20 flex justify-center items-center">
                  {product.price}
                </td>
                <td className="w-[150px] h-20 flex justify-center items-center">
                  {product.stock}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;
