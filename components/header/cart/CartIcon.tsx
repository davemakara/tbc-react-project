import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const CartIcon = ({ fetchedProducts }: any) => {
  // Calculate the total quantity
  const totalQuantity = fetchedProducts.reduce(
    (sum: number, product: any) => sum + product.quantity,
    0
  );

  return (
    <Link href="/checkout">
      <div className="relative mr-[15px]">
        <div className="absolute w-6 h-6 -top-3 -right-4 rounded-full bg-darkYellow flex items-center justify-center">
          <span className="text-white text-[16px]">{totalQuantity}</span>
        </div>
        <IoCartOutline className="text-3xl cursor-pointer" />
      </div>
    </Link>
  );
};

export default CartIcon;
