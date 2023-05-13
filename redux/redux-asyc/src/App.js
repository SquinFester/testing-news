import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="h-screen bg-[#333] py-5">
        <Cart />
        <Shop />
      </main>
    </Fragment>
  );
}

export default App;
