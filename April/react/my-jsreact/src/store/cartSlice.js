import { createSlice } from '@reduxjs/toolkit';

const cartInitalState = {
  totalPrice: 0,
  product: [
    // {
    //   item: 'Mango',
    //   quantity: 1,
    //   price: 6.0,
    // },
  ],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitalState,
  reducers: {
    addItem(state, action) {
      state.totalPrice += 10;
      state.product.push(action.payload);
    },
    removeItem() {},
  },
  total() {},
});

export const cartAction = cartSlice.actions;
export default cartSlice;
