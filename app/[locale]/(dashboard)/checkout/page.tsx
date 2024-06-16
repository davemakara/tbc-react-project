import { getUserCartAction } from "@/app/actions";
import CheckoutLayout from "@/components/checkout/checkoutLayout";
import { getSession } from "@auth0/nextjs-auth0";

const CheckoutPage = async () => {
  const session = await getSession();
  const id = session?.user.sub;

  const fetchedProducts = await getUserCartAction(id);

  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col bg-[#ddd] dark:bg-mainDarkBG2">
      <CheckoutLayout products={fetchedProducts} />
    </section>
  );
};

export default CheckoutPage;
