function ShopItem({ product }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-xl font-semibold">
        <h2>{product.name}</h2>
        <h2> ${product.price.toFixed(2)}</h2>
      </div>
      <p className="text-sm">{product.description}</p>
      <div className="w-full text-right">
        <button className=" w-fit rounded-md border border-solid border-sky-500 px-3 py-1 text-sky-500 hover:border-sky-700 hover:text-sky-700 focus:outline-sky-700">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
