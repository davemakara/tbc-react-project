import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const CartIcon = () => {
  return (
    <Link href="/checkout">
      <div className="relative mr-[15px]">
        <div className="absolute -top-2 -right-4 rounded-full bg-darkYellow px-2">
          <span className="text-white">0</span>
        </div>
        <IoCartOutline className="text-[34px] cursor-pointer" />
      </div>
    </Link>
  );
};

export default CartIcon;
