import { createSlice } from "@reduxjs/toolkit";

export const cartHide = createSlice({
  name: "cartHide",
  initialState: true,
  reducers: {
    hideToggle: (state) => !state,
  },
});

export const { hideToggle } = cartHide.actions;
export const selectCartHide = (state) => state.cardHide;

export default cartHide.reducer;
