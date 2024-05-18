import { getCartProducts } from "@/app/api";
import CartList from "@/components/checkout/CartList";

export const dynamic = "force-dynamic";

const CheckoutPage = async () => {
  const products = await getCartProducts();

  const fetchProducts = async () => {
    const fetchProduct = async (id: number) => {
      const response = await fetch(`https://dummyjson.com/products/${id}`, {
        cache: "no-store",
      });
      const data = await response.json();

      return data;
    };

    const arr = [];

    for (let index = 0; index < products.length; index++) {
      const singleProduct = await fetchProduct(products[index].product_id);
      arr.push({ ...singleProduct, count: products[index].product_count });
    }

    return arr;
  };

  const selectedProducts = await fetchProducts();

  return (
    <section className="w-full min-h-screen bg-[#ddd] dark:bg-mainDarkBG2">
      <CartList selectedProducts={selectedProducts} />
    </section>
  );
};

export default CheckoutPage;
