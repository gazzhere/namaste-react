import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleclearCart = () => {
    dispatch(clearCart());
  };
  const cardItems = useSelector((store) => store.cart.items);
  console.log(cardItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl">cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" rounded-md p-2 m-2 bg-black text-white"
          onClick={handleclearCart}
        >
          Clear cart
        </button>
        {cardItems.length === 0 && <h1>cart is empty Add items</h1>}
        <ItemList items={cardItems} />
      </div>
    </div>
  );
};
export default Cart;
