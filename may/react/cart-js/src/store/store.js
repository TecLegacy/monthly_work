import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartState = {
  product: [
    {
      id: 1,
      item: 'm',
      price: 3.0,
      perItem: 2.0,
    },
  ],
  totalQantity: '',
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState: cartState,
  // reducers: {
  //   addToCart(state, action) {
  //     const sentProduct = action.payload;
  //     /**
  //      * product {item, price, perItem perice, productquantity
  //      * }
  //      * totalQuantity - product length
  //      */
  //     //  const newCart =
  //     // console.log(sentProduct);
  //     const itemExist = state.product.filter(
  //       item => item.id === sentProduct.id
  //     );
  //     // console.log(state.product);
  //     console.log('value', itemExist);
  //     // console.log(sentProduct);
  //     // const newItem = sentProduct.map(curr => ({
  //     //   id: sentProduct.id,
  //     //   item: sentProduct.item,
  //     //   price: sentProduct.price,
  //     //   perItem: sentProduct.perItem,
  //     // }));

  //     const newItem = [];
  //     newItem.push({
  //       id: sentProduct.id,
  //       item: sentProduct.item,
  //       price: sentProduct.price,
  //       perItem: sentProduct.perItem,
  //     });
  //     console.log(newItem);
  //   },
  //   removeFromCart() {},
  // },
});

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// Cart Actions
export const cartActions = cartSlice.actions;
