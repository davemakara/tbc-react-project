import { getCartProducts } from "@/app/api";
import HomeContent from "@/components/home-content/HomeContent";

const ProductsPage = async () => {
  const products = await getCartProducts();

  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40 flex justify-center pb-[3rem]">
      <HomeContent productsCart={products} />
    </section>
  );
};

export default ProductsPage;
