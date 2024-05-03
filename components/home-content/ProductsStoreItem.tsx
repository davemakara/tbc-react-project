import Image from "next/image";
import Link from "next/link";

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
}

const ProductsStoreItem = ({ productData }: ProductDataProps) => {
  return (
    <Link href={`/products/${productData.id}`}>
      <div className="p-4 max-w-[350px] bg-white dark:bg-darkYellow border-4 border-[#000] rounded-lg overflow-hidden transition-all duration-200 ease-in-out hover:shadow-md hover:shadow-[#000] hover:mt-[-8px]">
        <span className="relative block w-full h-[200px] rounded-lg overflow-hidden">
          <Image src={productData.images[0]} alt="crypto" fill />
        </span>
        <div className="relative flex flex-col p-3">
          <h1 className="h-[60px] md:h-[70px] text-[#000] text-[18px] md:text-[20px] font-bold">
            {productData.title}
          </h1>

          <p className="h-[70px] overflow-hidden text-[14px] text-[#000]">
            {productData.description}
          </p>

          <span className="w-full flex justify-between">
            <p className="py-2 text-[16px] text-[#000] font-semibold">
              ${productData.price}
            </p>
            <p className="px-3 py-2 border-none rounded text-[16px] text-[#696687] cursor-pointer hover:bg-green">
              See more..
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductsStoreItem;
