import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { Title, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.Title === Title);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    increaseQuantity(state, action) {
      const { Title } = action.payload;
      const existingItem = state.items.find((item) => item.Title === Title);

      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseQuantity(state, action) {
      const { Title } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.Title === Title
      );

      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity === 1) {
          state.items.splice(existingItemIndex, 1);
        } else {
          state.items[existingItemIndex].quantity--;
        }
      }
    },
  },
});

export const { addItemToCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
