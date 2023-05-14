import { configureStore } from "@reduxjs/toolkit";
import cartContent from "./cartContent-slice";
import cartHide from "./cartHide-slice";
import sendCart from "./sendCartContent-slice";

export const store = configureStore({
  reducer: {
    cartContent: cartContent,
    cardHide: cartHide,
    sendCart: sendCart,
  },
});
