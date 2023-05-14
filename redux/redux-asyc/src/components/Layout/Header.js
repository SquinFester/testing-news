import { useSelector, useDispatch } from "react-redux";
import { hideToggle } from "../../store/cartHide-slice";
import { selectCartTotalQuantity } from "../../store/cartContent-slice";

const Header = () => {
  const productsQuantity = useSelector(selectCartTotalQuantity);

  const dispatch = useDispatch();

  return (
    <header className="flex flex-row items-center justify-between bg-zinc-900  px-20 py-3 text-white">
      <h1 className="text-xl font-bold md:text-3xl">ReduxCart</h1>
      <button
        className="flex flex-row gap-5 rounded-md border border-solid border-teal-500 px-6 py-1"
        onClick={() => dispatch(hideToggle())}
      >
        <p className="items-center text-sm font-bold text-teal-500 md:text-base">
          My Cart
        </p>
        {productsQuantity > 0 && (
          <p className="rounded-2xl bg-teal-500 px-3 text-sm font-bold text-zinc-900  md:text-base ">
            {productsQuantity}
          </p>
        )}
      </button>
    </header>
  );
};

export default Header;
