import Notification from '@/ui/Notification';
import Cart from '@/components/Cart';
import Nav from '@/components/Nav';

import { useEffect } from 'react';

// redux Store
import { useSelector, useDispatch } from 'react-redux';
import { sendCartToFirebase, fetchCartFromFirebase } from '@/store/cartSlice';

// to Stop initial cart sent to FireBase
let isInitial = true;

const Navigation = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  //  Fetch cart from firebase
  useEffect(() => {
    dispatch(fetchCartFromFirebase());
  }, [dispatch]);

  // Fat Reducer approach PUT to firebase
  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (isInitial) {
        isInitial = false;
        return;
      }
      dispatch(sendCartToFirebase(cart));
    }, 2000);

    return () => {
      console.log('clean Up');
      clearTimeout(setTimer);
    };
  }, [cart, dispatch]);

  const notification = useSelector(state => state.ui.showNotification);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}

      <Nav />
      <Cart />
    </>
  );
};

export default Navigation;

// FireBase Realtime Database
// Logic written using FAT component
/** Fat component approach
   useEffect(() => {
     const sendCart = async () => {
       dispatch(
         uiActions.notification({
           title: 'Sending Cart to firebase',
           message: 'Cart is being sent 📤',
           status: 'sending',
         })
       );
       setLoading(true);
       try {
         const response = await fetch(
           'https://cart-npm-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
           {
             method: 'PUT',
             body: JSON.stringify(cart),
           }
         );
         if (!response.ok) {
           console.log('No Response found!');
           throw new Error('Something went wrong in Response');
         }
 
         dispatch(
           uiActions.notification({
             title: 'Sending Successful',
             message: 'Cart is sent successfully 📤',
             status: 'success',
           })
         );
       } catch (error) {
         console.log(error);
         throw new Error('Something went wrong');
       } finally {
         setLoading(false);
       }
     };
 
     // Debouncing
     const timer = setTimeout(() => {
       if (isInitial) {
         isInitial = false;
         return;
       }
       sendCart()
         .then(() => {
           console.log('Cart sent successfully');
         })
         .catch(error => {
           console.log(' Error in sendCart API', error);
           dispatch(
             uiActions.notification({
               title: 'Error While sending ',
               message: 'Cart could not be sent successfully ⚠',
               status: 'error',
             })
           );
           throw new Error(error);
         });
     }, 2000);
 
     return () => {
       console.log('cleanUp');
       clearTimeout(timer);
     };
   }, [cart, dispatch]);
   * 
   */
