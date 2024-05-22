import { getCartProducts } from "@/app/api";
import ProductsPageContent from "@/components/products-content/ProductsPageContent";

import tapeBG from "../../../../public/marshallBG.jpg";

const ProductsPage = async () => {
  const products = await getCartProducts();

  return (
    <section
      style={{ backgroundImage: `url(${tapeBG.src})` }}
      className="w-full min-h-screen pt-36 lg:pt-40 flex justify-center pb-[3rem] bg-cover bg-fixed bg-no-repeat"
    >
      <ProductsPageContent productsCart={products} />
    </section>
  );
};

export default ProductsPage;
