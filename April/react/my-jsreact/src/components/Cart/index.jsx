import React from 'react';
import CartDesign from './CartDesign';

const Cart = () => {
  const openCart = () => {
    console.log('Opened');
  };
  return (
    <>
      <button onClick={openCart}>Cart {1}</button>
    </>
  );
};

export default Cart;
