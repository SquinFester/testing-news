import { useSelector } from "react-redux";
import { selectCartContent } from "../../store/cartContentSlice";

import CartItems from "./CartItem";

const Cart = () => {
  const cartContent = useSelector(selectCartContent);

  const renderItems = cartContent.map((product) => (
    <CartItems key={product.id} product={product} />
  ));

  return (
    <section className="mx-auto w-2/3 max-w-2xl rounded-md bg-zinc-900 px-2 py-3 font-semibold text-white">
      <h2>Your Shopping Cart</h2>
      {cartContent && renderItems}
      {cartContent.length === 0 && (
        <i className="mt-2 pl-2 text-sm font-light">Your cart is empty</i>
      )}
    </section>
  );
};

export default Cart;
