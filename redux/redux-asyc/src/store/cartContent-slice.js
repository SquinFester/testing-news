import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartContent = createAsyncThunk(
  "cartContent/fetchCartContent",
  async () => {
    try {
      const response = await axios.get(
        "https://react-sw-ad600-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);

const initialState = { items: [], totalPrice: 0, totalQuantity: 0 };

export const cartContent = createSlice({
  name: "cartContent",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find(
        (state) => state.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice += action.payload.price;
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const product = state.items.find(
        (state) => state.id === action.payload.id
      );
      if (product.quantity === 1) {
        const index = state.items.indexOf(product);
        state.items.splice(index, 1);
      } else {
        product.quantity -= 1;
      }

      state.totalPrice -= action.payload.price;
      state.totalQuantity -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartContent.fulfilled, (state, action) => {
        if (action.payload.items) {
          state.items = action.payload.items;
          state.totalPrice = action.payload.totalPrice;
          state.totalQuantity = action.payload.totalQuantity;
        }
      })
      .addCase(fetchCartContent.rejected, (state, action) => {
        console.log(action.error);
      });
  },
});

export const { addToCart, removeFromCart } = cartContent.actions;
export const selectCartContent = (state) => state.cartContent.items;
export const selectCartTotalPice = (state) => state.cartContent.totalPrice;
export const selectCartTotalQuantity = (state) =>
  state.cartContent.totalQuantity;

export default cartContent.reducer;
