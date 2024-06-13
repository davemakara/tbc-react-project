// import { getProductsAction } from "@/app/actions";
// import { getCartProducts } from "@/app/api";
// import { ProductsStoreProps } from "@/types/types";
import Link from "next/link";
// import { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";

// export const revalidate = 0;

const CartIcon = () => {
  // const [selectedNumber, setSelectedNumber] = useState(0);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const products = await getCartProducts();
  //     const countSum = products.reduce((acc: number, cur: ProductsStoreProps) => {
  //       return acc + cur.product_count;
  //     }, 0);
  //     setSelectedNumber(countSum);
  //   };
  //   getProducts();
  // });

  return (
    <Link href="/checkout">
      <div className="relative mr-[15px]">
        <div className="absolute w-6 h-6 -top-3 -right-4 rounded-full bg-darkYellow flex items-center justify-center">
          <span className="text-white text-[16px]">0</span>
        </div>

        <IoCartOutline className="text-3xl cursor-pointer" />
      </div>
    </Link>
  );
};

export default CartIcon;
