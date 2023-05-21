// Components
import Cart from '@/components/Cart';
import Notification from '@/ui/notification';
// redux Store
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { sendCartToFirebase } from '@/store/cartSlice';
// import { uiActions } from '@/store/uiSlice';

// to Stop initial cart sent to FireBase
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const product = useSelector(state => state.cart.product);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.showNotification);

  // FireBase Realtime Database
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

  // Fat Reducer approach
  useEffect(() => {
    const setTimer = setTimeout(() => {
      if (isInitial) {
        isInitial = false;
        console.log(isInitial);
        return;
      }
      dispatch(sendCartToFirebase(cart));
    }, 2000);

    return () => {
      console.log('clean Up');
      clearTimeout(setTimer);
    };
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}

      <nav className=' flex  w-5/6 mx-auto justify-between items-center bg-transparent '>
        <h1>Redux Toolkit Cart</h1>

        {/* Cart Counter */}
        <h1 className=' flex items-center mt-2  justify-center gap-4 bg-regal-blue text-blue-light rounded-md px-2 py-2'>
          <div>Cart</div>
          <div>{product.length}</div>
        </h1>
      </nav>

      <Cart />
    </>
  );
}

export default App;
