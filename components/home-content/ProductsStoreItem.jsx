import Image from "next/image";
import Link from "next/link";

const ProductsStoreItem = ({ productData }) => {
  return (
    <Link href={`/products/${productData.id}`}>
      <div className="max-w-[350px] bg-white rounded-lg overflow-hidden transition duration-200 ease-in-out hover:shadow-md hover:shadow-[#000]">
        <span className="relative block w-full h-[200px]">
          <Image src={productData.images[0]} alt="crypto" fill />
        </span>
        <div className="relative flex flex-col p-5">
          <h1 className="h-[60px] md:h-[70px] text-[18px] md:text-[20px] font-bold">
            {productData.title}
          </h1>

          <p className="h-20 overflow-hidden text-[14px]">
            {productData.description}
          </p>

          <span className="w-full flex justify-between">
            <p className="py-2 text-[16px] font-semibold">
              ${productData.price}
            </p>
            <p
              type="button"
              className="px-3 py-2 border-none rounded text-[16px] text-[#000] cursor-pointer hover:bg-green"
            >
              See more..
            </p>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductsStoreItem;
