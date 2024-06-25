import { getUserCartAction } from "@/app/actions";
import CheckoutLayout from "@/components/checkout/CheckoutLayout";

import { getSession } from "@auth0/nextjs-auth0";

const CartPage = async () => {
  const session = await getSession();
  const id = session?.user.sub;

  const fetchedProducts = await getUserCartAction(id);

  return (
    <section className="w-full min-h-screen px-8 py-36 lg:pt-40 bg-mainLightBG dark: dark:bg-mainDarkBG bg-opacity-70 dark:bg-opacity-70">
      <CheckoutLayout products={fetchedProducts} />
    </section>
  );
};

export default CartPage;
