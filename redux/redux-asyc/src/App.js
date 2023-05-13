import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

import { useSelector } from "react-redux";
import { selectCartHide } from "./store/cartHideSlice";

function App() {
  const cartIsHidden = useSelector(selectCartHide);

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
