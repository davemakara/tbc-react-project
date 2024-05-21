import Image from "next/image";
import Link from "next/link";

import { setStaticParamsLocale } from "next-international/server";

export const generateStaticParams = async () => {
  const res = await fetch("https://dummyjson.com/products/");
  const data = await res.json();

  return data.products.map((product: { id: number }) => ({
    id: product.id.toString(),
    locale: "en",
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
    locale: string;
  };
}

async function ProductCardPage({ params }: PageParams) {
  setStaticParamsLocale(params.locale);
  const product = await getProduct(params.id);

  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40 flex flex-col items-center">
      <div className="w-4/5 flex flex-col items-center lg:flex-row gap-5 lg:gap-10 xl:gap-20">
        <div className="w-full h-[200px] sm:h-[300px] md:w-2/3 lg:w-1/2 lg:h-[300px] xxl:h-[400px] relative rounded-lg overflow-hidden">
          {<Image src={product.images[0]} alt="product photo" fill />}
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 px-2">
          <h2 className="text-[30px] font-semibold py-3 lg:py-0 lg:pb-3">
            {product.title}
          </h2>
          <div className="flex gap-3 text-[14px] py-3">
            <p className="bg-green px-2 py-1 rounded-md">{product.category}</p>
            <p className="bg-green px-2 py-1 rounded-md">{product.brand}</p>
          </div>
          <p className="py-3">{product.description}</p>
          <p className="py-3">⭐ {product.rating}</p>
          <p className="py-3">Price: ${product.price}</p>
          <span className="py-3 flex gap-2">
            Discount:{" "}
            <p className="line-through">{product.discountPercentage}%</p>
          </span>
          <div className="pt-6 lg:pr-6 flex justify-between">
            <Link href="/products">
              <button className="bg-[#E64848] text-white text-[14px] px-3 sm:px-4 py-3 rounded">
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
