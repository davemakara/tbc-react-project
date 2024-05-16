// import ProductsStore from "../../../components/home-content/ProductsStore";
// import { getCartProducts } from "@/app/api";
import HomeContent from "@/components/home-content/HomeContent";

const ProductsPage = async () => {
  // const products = await getCartProducts();

  return (
    <section className="w-full min-h-screen flex justify-center pt-[2rem] md:pt-[5rem] pb-[3rem] bg-[#DDDDDD] dark:bg-[#2C3333]">
      <HomeContent  />
    </section>
  );
};

export default ProductsPage;
