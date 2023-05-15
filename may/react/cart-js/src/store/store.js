import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartState = [
  {
    product: [],
    totalQantity: '',
  },
];

const cartSlice = createSlice({
  name: 'Cart',
  initialState: cartState,
  reducers: {
    addToCart() {},
    removeFromCart() {},
  },
});

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Cart Actions
export const cartActions = cartSlice.actions;
