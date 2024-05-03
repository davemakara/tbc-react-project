import Image from "next/image";
import Link from "next/link";

import { Product } from "../../../../../types/types";

export const generateStaticParams = async () => {
  const res = await fetch("https://dummyjson.com/products/");
  const data = await res.json();

  return data.products.map((product: Product) => ({
    id: product.id.toString(),
  }));
};

const getProduct = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
};

interface PageParams {
  params: {
    id: string;
  };
}

async function ProductCardPage({ params }: PageParams) {
  const product = await getProduct(params.id);

  return (
    <section className="w-full min-h-screen bg-mainLightBG dark:bg-mainDarkBG pt-[10rem] pb-[6rem] flex flex-col items-center">
      <div className="w-4/5 bg-white py-4 px-4">
        <div className="w-full">
          {
            <Image
              src={product.images[0]}
              alt="product photo"
              width={300}
              height={200}
            />
          }
        </div>
        <div className="w-full px-2 pt-7">
          <h2 className="text-[30px] font-semibold">{product.title}</h2>
          <p className="pt-5">{product.description}</p>
          <p className="pt-2">Price: ${product.price}</p>
          <div className="pt-6 flex justify-between">
            <button className="bg-green text-white text-[14px] px-3 sm:px-4 py-3 sm:py-4">
              Add to Cart
            </button>
            <Link href="/products">
              <button className="bg-[#E64848] text-white text-[14px] px-3 sm:px-4 py-3 sm:py-4">
                {"<"} Back to Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductCardPage;
