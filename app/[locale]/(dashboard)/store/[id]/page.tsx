import { getProductDetail } from "@/app/api";
import DeleteproductBtn from "@/components/UI/DeleteproductBtn";
import Image from "next/image";
import Link from "next/link";

interface PageParams {
  params: {
    id: number;
    locale: string;
  };
}

const ProductCardPage = async ({ params }: PageParams) => {
  const product = await getProductDetail(params.id);

  return (
    <section className="w-full min-h-screen py-36 lg:py-40 flex flex-col items-center bg-[#eee] bg-opacity-70 dark:bg-mainDarkBG dark:bg-opacity-70">
      <div className="w-4/5 flex flex-col items-center lg:flex-row gap-5 lg:gap-10 xl:gap-20">
        <div className="w-full h-[200px] sm:h-[300px] md:w-2/3 lg:w-1/2 lg:h-[300px] xxl:h-[400px] relative rounded-lg overflow-hidden">
          {<Image src={product.photo} alt="product photo" layout="fill" />}
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 px-2">
          <h2 className="text-[30px] font-semibold py-3 lg:py-0 lg:pb-3">
            {product.title}
          </h2>
          <div className="flex gap-3 text-[14px] pt-2 pb-5">
            <p className="bg-red px-2 py-1 rounded-md">{product.category}</p>
          </div>
          {product.artist && (
            <p className="py-4 font-semibold">Artist: {product.artist}</p>
          )}
          <p className="pb-3 pt-1 font-semibold">Price: ${product.price}</p>

          <p className="py-3">{product.description}</p>
          {product.description2 && (
            <p className="py-3">{product.description2}</p>
          )}
          {product.description3 && (
            <p className="py-3">{product.description3}</p>
          )}

          <div className="pt-6 lg:pr-6 flex justify-between">
            <Link href="/store">
              <button className="bg-[#E64848] text-white text-[14px] px-3 sm:px-4 py-3 rounded">
                {"<"} Back to Products
              </button>
            </Link>
            <DeleteproductBtn id={Number(params.id)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardPage;
