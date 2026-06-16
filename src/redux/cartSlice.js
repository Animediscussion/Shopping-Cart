import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += price;
    },
  },
  reduceQuantity: (state, action) => {
    const { id } = action.payload;

    const existingItem = state.cartItems.find((item) => item.id === id);

    if (!existingItem) return;

    existingItem.quantity -= 1;
    state.totalQuantity -= 1;
    state.totalPrice -= existingItem.price;

    if (existingItem.quantity === 0) {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    }
  },

  removeFromCart: (state, action) => {
    const { id } = action.payload;

    const existingItem = state.cartItems.find((item) => item.id === id);

    if (!existingItem) return;

    state.totalQuantity -= existingItem.quantity;
    state.totalPrice -= existingItem.quantity * existingItem.price;

    state.cartItems = state.cartItems.filter((item) => item.id !== id);
  },
});

export const { addToCart, reduceQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
