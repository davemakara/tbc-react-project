import Product from "./Product";

import { fetchProducts } from "../app/actions";

const ProductsList = async () => {
  const data = await fetchProducts();

  return (
    <div className="min-h-screen bg-mainLightBG dark:bg-mainDarkBG py-[8rem]">
      <h1 className="pt-[1rem] pl-[3rem] text-[#000] font-semibold text-[30px] md:py-[2rem] px-16">
        Products
      </h1>
      <div className="w-full block pt-[2rem] pl-12 pr-12 sm:flex flex-col items-center px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-5">
          {data.products.map((product) => (
            <Product productData={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductsList;
