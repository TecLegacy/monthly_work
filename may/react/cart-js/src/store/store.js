import { configureStore } from '@reduxjs/toolkit';
import { uiSliceReducers } from './uiSlice';
import { cartSlice } from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSliceReducers,
  },
});
