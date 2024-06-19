import { getProducts } from "@/app/api";
import ProductsPageContent from "@/components/products-content/ProductsPageContent";

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40 flex justify-center pb-[3rem]">
      <ProductsPageContent productsStore={products} />
    </section>
  );
};

export default ProductsPage;
