import Image from "next/image";

import { updateCartCountAction } from "@/app/actions";
import { CartItemProps } from "@/types/types";
import { useRouter } from "next/navigation";

import { AiFillDelete } from "react-icons/ai";

interface Props {
  cartItem: CartItemProps;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  handleDelete: (id: number) => void;
}

const CartItem = ({
  cartItem,
  handleIncrement,
  handleDecrement,
  handleDelete,
}: Props) => {
  const router = useRouter();

  return (
    <div className="w-4/5 sm:w-3/5 md:w-4/5 h-auto md:h-[200px] xxl:w-3/5 border-2 p-5 mb-4 rounded-lg flex flex-col md:flex-row">
      <Image
        src={cartItem.thumbnail}
        alt={cartItem.title}
        width={200}
        height={100}
        className="mb-4 mx-auto md:mb-0 md:mr-10 rounded-lg"
      />
      <div className="w-full block md:flex md:justify-between">
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4">{cartItem.title}</h2>
          <p className="text-lg mb-2">Price: ${cartItem.price}</p>
          <p className="text-lg mb-4 md:mb-0">
            Total: ${cartItem.price * cartItem.count}
          </p>
        </div>
        <div className="p-2 mb-4 md:mb-0 mx-auto md:mx-0 flex items-center justify-center">
          <button
            className="text-[20px] w-[30px] h-[30px] border-2 rounded flex justify-center items-center disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={() => {
              handleDecrement(cartItem.id);
              updateCartCountAction(cartItem.id, cartItem.count - 1);
              router.refresh();
            }}
          >
            -
          </button>
          <span className="mx-4 text-lg">{cartItem.count}</span>
          <button
            className="text-[20px] w-[30px] h-[30px] border-2 rounded flex justify-center items-center disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={() => {
              handleIncrement(cartItem.id);
              updateCartCountAction(cartItem.id, cartItem.count + 1);
              router.refresh();
            }}
          >
            +
          </button>
        </div>
        <div className="w-[40px] mx-auto md:mx-0 flex items-center justify-center">
          <button
            onClick={() => {
              handleDelete(cartItem.id);
              router.refresh();
            }}
          >
            <AiFillDelete className="text-[30px] hover:text-red" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
