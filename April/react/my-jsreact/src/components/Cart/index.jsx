import { useSelector } from 'react-redux';

let size = 0;
const Cart = ({ setOpenCart }) => {
  const product = useSelector(state => state.cart.product);
  size = product.length;

  const cart = () => {
    setOpenCart(p => !p);
  };
  return (
    <>
      <button onClick={cart}>Cart {size}</button>
    </>
  );
};

export default Cart;
