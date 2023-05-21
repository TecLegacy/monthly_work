import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './uiSlice';
const cartState = {
  product: [],
};

export const cartSlice = createSlice({
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

// export const sendCartData = cart => {
//   return async dispatch => {
//     dispatch(
//       uiActions.notification({
//         status: 'pending',
//         title: 'Sending...',
//         message: 'Sending cart data!',
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         'https://cart-npm-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
//         {
//           method: 'PUT',
//           body: JSON.stringify(cart),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Sending cart data failed.');
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.notification({
//           status: 'success',
//           title: 'Success!',
//           message: 'Sent cart data successfully!',
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.notification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Sending cart data failed!',
//         })
//       );
//     }
//   };
// };

/**---------------------------- */

// THUNK ACTION CREATOR FUNCTION
export function sendCartToFirebase(cart) {
  // dispatch is sent via reduxToolkit
  return async dispatch => {
    dispatch(
      uiActions.notification({
        title: 'Sending Cart to firebase',
        message: 'Cart is being sent 📤',
        status: 'sending',
      })
    );

    // Performing sideEffects
    const sendCart = async () => {
      const response = await fetch(
        'https://cart-npm-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Firebase Error ⚠');
      }
    };
    // Handling errors
    try {
      await sendCart();
      dispatch(
        uiActions.notification({
          title: 'Sending Successful',
          message: 'Cart is sent successfully 📤',
          status: 'success',
        })
      );
    } catch (error) {
      console.log('Cant Reach FireBase');
      dispatch(
        uiActions.notification({
          title: 'Error While sending ',
          message: 'Cart could not be sent successfully ⚠',
          status: 'error',
        })
      );
    }
  };
}

// Cart Actions
export const cartActions = cartSlice.actions;
