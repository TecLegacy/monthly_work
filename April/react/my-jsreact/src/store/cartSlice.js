import { createSlice } from '@reduxjs/toolkit';

const cartInitalState = {
  totalPrice: 0,
  product: [
    // {
    //   item: 'Mango',
    //   quantity: 1,
    //   price: 6.0,
    //   perItem : 6.0
    // },
  ],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitalState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.product.find(
        item => item.item === newItem.item
      );

      if (!existingItem) {
        state.product.push({
          item: newItem.item,
          price: newItem.price,
          quantity: 1,
          perItem: newItem.perItem,
        });
        console.log('Added to cart');
      } else {
        existingItem.quantity++,
          (existingItem.price = existingItem.price + newItem.price);
      }
    },
    removeItem() {},
    upByOne(state, action) {
      const newItem = action.payload;
      const existingItem = state.product.find(
        item => item.item === newItem.item
      );
      if (!existingItem) {
        console.log('no item found');
      } else {
        // if (existingItem.quantity >= 11) {
        //   console.log('To Many Items');
        //   return;
        // }
        existingItem.quantity++;
        existingItem.price = existingItem.quantity * existingItem.perItem;
      }
    },
    downByOne(state, action) {
      const newItem = action.payload;
      const existingItem = state.product.find(
        item => item.item === newItem.item
      );
      const existingItemIndex = state.product.findIndex(
        item => item.item === newItem.item
      );
      if (!existingItem) {
        console.log('no item found');
      } else {
        if (existingItem.quantity <= 1) {
          console.log('No items');
          const x = state.product.splice(existingItemIndex, 1);
          console.log(x);
        }
        existingItem.quantity--;
        existingItem.price = existingItem.quantity * existingItem.perItem;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
