import { getUserCartAction } from "@/app/actions";
import CartIcon from "./CartIcon";
import { getSession } from "@auth0/nextjs-auth0";

const Cart = async () => {
  const session = await getSession();
  const id = session?.user.sub;

  const fetchedProducts = await getUserCartAction(id);

  return <CartIcon fetchedProducts={fetchedProducts} />;
};

export default Cart;
