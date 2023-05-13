function CartItems({ product }) {
  const divClass = "flex flex-row justify-between ";
  const headingClass = "text-xl";
  const buttonClass =
    "w-10 border-solid border border-gray-500 hover:bg-gray-900 focus:outline-gray-500 font-sm px-3";

  return (
    <div className="mx-1 mt-2 bg-[#333] p-2">
      <div className={`${divClass} items-center`}>
        <h1 className={headingClass}>{product.name}</h1>
        <div className={`${divClass} items-end gap-1`}>
          <h1 className={`${headingClass} leading-none`}>
            ${(product.price * product.quantity).toFixed(2)}
          </h1>
          <i className="text-sm font-normal leading-none">
            (${product.price.toFixed(2)}/item)
          </i>
        </div>
      </div>
      <div className={`${divClass} mt-3 items-center`}>
        <h1 className={headingClass}>
          <span className="text-sm font-normal">x</span>
          {product.quantity}
        </h1>
        <div className="flex flex-row gap-2">
          <button className={buttonClass}>-</button>
          <button className={buttonClass}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
