import { configureStore } from "@reduxjs/toolkit";
import cartContent from "./cartContentSlice";
import cartHide from "./cartHideSlice";

export const store = configureStore({
  reducer: {
    cartContent: cartContent,
    cardHide: cartHide,
  },
});
