import { updateCartCountAction } from "@/app/actions";
import { CartItemProps } from "@/types/types";

interface Props {
  cartItem: CartItemProps;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
}

const CartItem = ({ cartItem, handleIncrement, handleDecrement }: Props) => {
  return (
    <div className="border border-gray-300 p-4 mb-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">{cartItem.title}</h2>
      <p className="text-lg mb-1">Price: ${cartItem.price.toFixed(2)}</p>
      <p className="text-lg mb-2">Total : ${cartItem.price * cartItem.count}</p>
      <div className="flex items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={() => {
            handleDecrement(cartItem.id);
            updateCartCountAction(cartItem.id, cartItem.count - 1);
          }}
        >
          -
        </button>
        <span className="mx-4 text-lg">{cartItem.count}</span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            handleIncrement(cartItem.id);
            updateCartCountAction(cartItem.id, cartItem.count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
