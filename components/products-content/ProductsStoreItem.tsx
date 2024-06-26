import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "../UI/AddToCartBtn";
import { ProductsStoreProps } from "@/types/types";

interface ProductDataProps {
  productData: {
    id: number;
    title: string;
    description: string;
    description2: string;
    description3: string;
    price: number;
    stock: number;
    category: string;
    photo: string;
  };
  productsStore: ProductsStoreProps[];
}

const ProductsStoreItem = ({
  productData,
}: // productsStore,
ProductDataProps) => {
  return (
    <div className="p-4 max-w-[350px] bg-white dark:bg-[#1e1b1b] border-4 border-[#000] dark:border-[#eee] rounded-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-[#000] hover:dark:shadow-[#000]">
      <Link href={`/store/${productData.id}`}>
        <span className="relative block w-full h-[200px] rounded-lg overflow-hidden">
          <Image src={productData.photo} alt={productData.title} fill />
        </span>
      </Link>
      <div className="h-[240px] relative flex flex-col justify-between px-3 pt-4">
        <Link href={`/store/${productData.id}`}>
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

          <AddToCartBtn id={productData.id} />
        </span>
      </div>
    </div>
  );
};

export default ProductsStoreItem;
