import Image from "next/image";
import Link from "next/link";

const ProductsStoreItem = ({ productData }) => {
  return (
    <Link href={`/products/${productData.id}`}>
      <div className="max-w-[450px] bg-white rounded-lg overflow-hidden transition duration-200 ease-in-out hover:shadow-md hover:shadow-[#000]">
        <span className="relative block w-full h-[200px]">
          <Image src={productData.images[0]} alt="crypto" fill />
        </span>
        <div className="flex flex-col justify-between h-[240px] p-5">
          <h1 className="text-[20px] font-semibold">{productData.title}</h1>
          <p className="text-[16px]">{productData.description}</p>
          <p className="text-[16px]">$ {productData.price}</p>

          <button
            type="button"
            className="py-2 px-3 border-none rounded text-[14px] text-white bg-darkYellow cursor-pointer hover:bg-green"
          >
            See more
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductsStoreItem;
