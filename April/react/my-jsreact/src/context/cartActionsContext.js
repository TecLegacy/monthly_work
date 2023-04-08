import React from 'react';

const CartProvider = React.createContext();

const CartActionsProvider = () => {
  const addItem = items => {
    items();
  };
  const removeItem = items => {
    items();
  };
  return (
    <CartProvider.Provider value={{ addItem, removeItem }}>
      CartActionsProvider
    </CartProvider.Provider>
  );
};

export default CartActionsProvider;
