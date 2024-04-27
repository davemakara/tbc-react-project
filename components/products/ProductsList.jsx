import Product from "./Product";

import { fetchProducts } from "../../app/actions";

const ProductsList = async () => {
  const data = await fetchProducts();

  return (
    <section className="min-h-screen w-full bg-mainLightBG dark:bg-mainDarkBG py-[2rem]">
      <h1 className="text-center text-[#000] dark:text-[#f4f4f4] font-bold text-[24px] md:text-[30px] md:py-[3rem]">
        Explore Our Products!
      </h1>
      <div className="w-full pt-[2rem] px-12 flex flex-col items-center sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7 xxl:gap-10">
          {data.products.map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductsList;
