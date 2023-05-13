import ShopItem from "./ShopItem";

const products = [
  {
    id: "1",
    name: "Test Item",
    price: 6,
    price: 6,
    description: "This is a first test item for the shop.",
  },
];

function Shop() {
  const renderProductsList = products.map((product) => (
    <ShopItem key={product.id} product={product} />
  ));

  return (
    <section className="mx-auto w-4/5 max-w-4xl">
      <h1 className="my-5 text-center text-xl font-bold uppercase text-white md:my-10">
        Buy Your Favorite Products
      </h1>
      <section className=" rounded-md bg-white p-4">
        {renderProductsList}
      </section>
    </section>
  );
}

export default Shop;
