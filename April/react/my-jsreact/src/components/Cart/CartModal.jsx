import modules from './cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '@/store/cartSlice';
const CartModal = () => {
  const product = useSelector(state => state.cart.product);
  const dispatch = useDispatch();
  const addItem = () => {
    console.log('product');
    console.log(product);
    // dispatch(cartAction.addItem());
  };
  return (
    <>
      <div className={modules.cartBg}>
        Your Shopping Cart!
        <div className={modules.compact}>
          {product?.map((item, index) => (
            <div key={index}>
              <div>
                <span> {item.item} </span>
                <span>
                  total - ${item.price}.00
                  <sup> (${item.perItem}/item)</sup>
                </span>
              </div>
              <div className={modules.split}>
                <span>x{item.quantity}</span>
                <div className={modules.splitButton}>
                  <button onClick={addItem}> + </button>
                  <button> - </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartModal;
