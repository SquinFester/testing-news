import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Test Item",
    price: 6,
    quantity: 3,
  },
];

export const cartContent = createSlice({
  name: "cartContent",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.find((state) => state.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = state.find((state) => state.id === action.payload.id);
      if (product.quantity === 1) {
        const index = state.indexOf(product);
        state.splice(index, 1);
      } else {
        product.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartContent.actions;
export const selectCartContent = (state) => state.cartContent;

export default cartContent.reducer;
