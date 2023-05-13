import { useSelector, useDispatch } from "react-redux";
import { selectCartContent } from "../../store/cartContentSlice";
import { hideToggle } from "../../store/cartHideSlice";

const Header = () => {
  const cartContent = useSelector(selectCartContent);
  let producsQuantity = 0;
  cartContent.forEach((product) => {
    producsQuantity += product.quantity;
  });

  const dispatch = useDispatch();

  return (
    <header className="flex flex-row items-center justify-between bg-zinc-900  px-20 py-3 text-white">
      <h1 className="text-xl font-bold">ReduxCart</h1>
      <button
        className="flex flex-row gap-5 rounded-md border border-solid border-teal-500 px-6 py-1"
        onClick={() => dispatch(hideToggle())}
      >
        <p className="items-center text-sm font-bold text-teal-500">My Cart</p>
        {producsQuantity > 0 && (
          <p className="rounded-2xl bg-teal-500 px-3 text-sm font-bold  text-zinc-900 ">
            {producsQuantity}
          </p>
        )}
      </button>
    </header>
  );
};

export default Header;
