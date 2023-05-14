import { Fragment, useEffect } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

import { useSelector, useDispatch } from "react-redux";
import { selectCartHide } from "./store/cartHide-slice";
import { fetchCartContent } from "./store/cartContent-slice";
import {
  selectCartContent,
  selectCartTotalPice,
  selectCartTotalQuantity,
} from "./store/cartContent-slice";
import { sendCartAsync } from "./store/sendCartContent-slice";

let putCartContent = false;

function App() {
  const cartIsHidden = useSelector(selectCartHide);
  const cartContent = useSelector(selectCartContent);
  const cartTotalPice = useSelector(selectCartTotalPice);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartContent());
  }, [dispatch]);

  useEffect(() => {
    if (putCartContent) {
      dispatch(
        sendCartAsync({
          items: cartContent,
          totalPrice: cartTotalPice,
          totalQuantity: cartTotalQuantity,
        })
      );
    }
    putCartContent = true;
  }, [dispatch, cartContent, cartTotalPice, cartTotalQuantity]);

  return (
    <Fragment>
      <Header />
      <main className="h-screen bg-[#333] py-5">
        {!cartIsHidden && <Cart />}
        <Shop />
      </main>
    </Fragment>
  );
}

export default App;
