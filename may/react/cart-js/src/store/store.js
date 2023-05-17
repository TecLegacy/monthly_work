import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartState = {
  product: [],
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState: cartState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.product.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.product.push({
          item: newItem.item,
          price: newItem.price,
          quantity: 1,
          perItem: newItem.perItem,
          id: newItem.id,
        });
        console.log('Added to cart');
      } else {
        existingItem.quantity++,
          (existingItem.price = existingItem.price + newItem.perItem);
      }
    },
    removeFromCart(state, action) {
      const ourItem = action.payload;
      const remove = state.product.find(item => item.id === ourItem.id);

      if (remove.quantity === 1) {
        state.product = state.product.filter(item => item.id !== remove.id);
        console.log('No item Found');
      } else {
        remove.quantity--;
        remove.price -= ourItem.perItem;
      }

      // let sum = 0;  total amount in cart
      // state.product.forEach(item => (sum += item.price));
      // console.log(sum);
    },
  },
});

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Cart Actions
export const cartActions = cartSlice.actions;
