import { configureStore } from '@reduxjs/toolkit';
import { uiSliceReducers } from './uiSlice';
import { cartSlice } from './cartSlice';
import { postApiSlice } from '@/features/apis/apiSlice';
// import second from '@/features/apis/'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSliceReducers,

    // POSTS RTKQ
    [postApiSlice.reducerPath]: postApiSlice.reducer,
  },

  // Post RTKQ
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postApiSlice.middleware),
});
