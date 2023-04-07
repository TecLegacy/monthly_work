import React from 'react';
import CartItem from './CartItem';
import modules from './cart.module.css';
const CartDesign = () => {
  return (
    <>
      <div className={modules.cartBg}>
        Your Shopping Cart!
        <div className={modules.compact}>
          <div>
            <span>Mango </span>
            <span>
              total - $18.00
              <sup> ($6.00/item)</sup>
            </span>
          </div>
          <div className={modules.split}>
            <span>x3</span>
            <div className={modules.splitButton}>
              <button> + </button>
              <button> - </button>
            </div>
          </div>
        </div>
      </div>
      <CartItem />
    </>
  );
};

export default CartDesign;
