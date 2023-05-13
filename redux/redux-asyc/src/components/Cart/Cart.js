import CartItems from "./CartItem";

const products = [
  {
    id: "1",
    name: "Test Item",
    price: 6,
    quantity: 3,
  },
];

const Cart = () => {
  const renderItems = products.map((product) => (
    <CartItems key={product.id} product={product} />
  ));

  return (
    <section className="mx-auto w-2/3 max-w-2xl rounded-md bg-zinc-900 px-2 py-3 font-bold text-white">
      <h2>Your Shopping Cart</h2>
      {renderItems}
    </section>
  );
};

export default Cart;
