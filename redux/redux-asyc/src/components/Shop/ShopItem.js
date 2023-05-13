import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartContentSlice";

function ShopItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-xl font-semibold">
        <h2>{product.name}</h2>
        <h2> ${product.price.toFixed(2)}</h2>
      </div>
      <p className="text-sm">{product.description}</p>
      <div className="w-full text-right">
        <button
          className=" w-fit rounded-md border border-solid border-sky-500 px-3 py-1 text-sky-500  hover:bg-sky-500 hover:text-white focus:outline-sky-500"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ShopItem;
