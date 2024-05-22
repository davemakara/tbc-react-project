import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "../UI/AddToCartBtn";
import { ProductsCart } from "@/types/types";

interface ProductDataProps {
  productData: {
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
  };
  productsCart: ProductsCart[];
}

const ProductsStoreItem = ({ productData, productsCart }: ProductDataProps) => {
  return (
    <div className="p-4 max-w-[350px] bg-white dark:bg-cardsDarkBG border-4 border-[#000] dark:border-[#eee] rounded-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-[#000] hover:dark:shadow-white hover:mt-[-8px]">
      <Link href={`/products/${productData.id}`}>
        <span className="relative block w-full h-[200px] rounded-lg overflow-hidden">
          <Image src={productData.thumbnail} alt={productData.title} fill />
        </span>
      </Link>
      <div className="relative flex flex-col p-3">
        <Link href={`/products/${productData.id}`}>
          <h1 className="h-[60px] md:h-[70px] text-[#000] dark:text-white hover:text-[#9c9a9a] dark:hover:text-[#9c9a9a] text-[18px] md:text-[20px] font-bold">
            {productData.title}
          </h1>
        </Link>
        <p className="h-[70px] mb-2 overflow-hidden text-[14px] text-[#000] dark:text-white">
          {productData.description}
        </p>

        <span className="w-full flex justify-between">
          <p className="py-2 text-[16px] text-[#000] dark:text-white font-semibold">
            ${productData.price}
          </p>

          <AddToCartBtn id={productData.id} productsCart={productsCart} />
        </span>
      </div>
    </div>
  );
};

export default ProductsStoreItem;
