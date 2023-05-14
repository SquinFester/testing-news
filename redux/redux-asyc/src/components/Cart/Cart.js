import { useSelector } from "react-redux";
import {
  selectCartContent,
  selectCartTotalPice,
} from "../../store/cartContent-slice";

import CartItems from "./CartItem";

const Cart = () => {
  const cartContent = useSelector(selectCartContent);

  const renderItems = cartContent.map((product) => (
    <CartItems key={product.id} product={product} />
  ));

  const totalPrice = useSelector(selectCartTotalPice);

  return (
    <section className="mx-auto w-2/3 max-w-2xl rounded-md bg-zinc-900 px-2 py-3 font-semibold text-white">
      <div className="flex items-center justify-between">
        <h2>Your Shopping Cart</h2>
        <h2 className="mr-3">Total price: ${totalPrice.toFixed(2)}</h2>
      </div>
      {cartContent && renderItems}
      {cartContent.length === 0 && (
        <i className="mt-2 pl-2 text-sm font-light">Your cart is empty</i>
      )}
    </section>
  );
};

export default Cart;
