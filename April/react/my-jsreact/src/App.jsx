import Counter from '@/components/counter';
import Header from '@/components/Header/Header';
import CartModal from '@/components/Cart/CartModal';
import CartItem from './components/Cart/CartItem';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import Modal from './ui/Modal';
import Notification from './ui/Notification';

let isInitial = true;

function App() {
  const [openCart, setOpenCart] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const cart = useSelector(state => state.cart.product);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Notification status='success' title='success' message='logged' />
      {/* <Modal /> */}
      <Header setOpenCart={setOpenCart} />
      <Counter />
      {openCart ? <CartModal /> : null}

      {isAuth ? <CartItem /> : null}
    </>
  );
}

export default App;
