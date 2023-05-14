import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const sendCartAsync = createAsyncThunk(
  "sendCart/sendCart",
  async (content) => {
    try {
      await axios.put(
        "https://react-sw-ad600-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        content
      );
    } catch (error) {
      if (!error.response) {
        throw error;
      }
    }
  }
);

const initialState = { status: "" };

const sendCart = createSlice({
  name: "sendCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendCartAsync.pending, (state) => {
        state.status = "sending...";
      })
      .addCase(sendCartAsync.fulfilled, (state) => {
        state.status = "sent";
      })
      .addCase(sendCartAsync.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error);
      });
  },
});

export const selectSendCartStatus = (state) => state.sendCart.status;

export default sendCart.reducer;
