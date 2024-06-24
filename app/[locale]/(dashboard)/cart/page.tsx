import { getUserCartAction } from "@/app/actions";
import CheckoutLayout from "@/components/checkout/CheckoutLayout";

// import ResetCartBtn from "@/components/checkout/ResetCartBtn";

import { getSession } from "@auth0/nextjs-auth0";

const CheckoutPage = async () => {
  const session = await getSession();
  const id = session?.user.sub;

  const fetchedProducts = await getUserCartAction(id);

  return (
    <section className="w-full min-h-screen px-8 py-36 lg:pt-40">
      <CheckoutLayout products={fetchedProducts} />
      {/* <ResetCartBtn id={id} /> */}
    </section>
  );
};

export default CheckoutPage;
