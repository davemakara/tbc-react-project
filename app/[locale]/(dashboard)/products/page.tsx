import { getProducts } from "@/app/api";
import ProductsPageContent from "@/components/products-content/ProductsPageContent";

const ProductsPage = async () => {
  const products = await getProducts();
  console.log(products);

  return (
    <section className="w-full min-h-screen pt-36 lg:pt-40 flex justify-center pb-[3rem]">
      <ProductsPageContent productsCart={products} />
    </section>
  );
};

export default ProductsPage;
