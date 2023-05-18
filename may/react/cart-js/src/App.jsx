import Cart from '@/components/Cart';
import { useSelector } from 'react-redux';
import Notification from '@/ui/notification';
import { useEffect, useState } from 'react';

function App() {
  const product = useSelector(state => state.cart.product);
  const cart = useSelector(state => state.cart);
  const [fireData, setFireData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // FireBase Realtime Database
  useEffect(() => {
    const sendCart = async () => {
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
          setError('error');
          throw new Error('Something went wrong in Response');
        }
        const data = response.json();

        setFireData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        throw new Error('Something went wrong');
      }
    };
    const timer = setTimeout(() => {
      sendCart()
        .then(() => {
          console.log('Cart sent successfully');
        })
        .catch(error => {
          setError('error');
          console.log(' Error in senCart API', error);
          throw new Error(error);
        });
    }, 2000);

    return () => {
      console.log('cleanUp');
      clearTimeout(timer);
    };
  }, [cart]);

  console.log(fireData, 'fireState', 'loading', loading, 'error', error);

  return (
    <>
      {/* {loading && } */}
      <Notification
        message={loading ? (loading ? 'sending' : 'error') : 'success'}
      />

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
