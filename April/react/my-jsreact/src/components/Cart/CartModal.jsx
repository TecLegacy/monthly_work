import modules from './cart.module.css';
import IncreDecre from './cart_dispatch/IncreDecre';
import { useDispatch, useSelector } from 'react-redux';

import ReactDOM from 'react-dom';

const CartModal = () => {
  const dispatch = useDispatch();

  const product = useSelector(state => state.cart.product);
  // const addItem = () => {
  //   console.log(product);
  //   // dispatch(cartAction.)
  // };

  // tempData handler
  // const handleInputChange = e => {
  //   console.log(e.target.value);
  //   const tempVal = e.target.value;
  //   addItem(tempVal);
  // };
  return (
    <>
      {/* {ReactDOM.createPortal( */}
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
                {/* <div className={modules.splitButton}> */}
                {/* <button onClick={addItem}>+</button>
                  <button> - </button> */}
                <IncreDecre
                  item={item.item}
                  quantity={item.quantity}
                  price={item.price}
                />
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      ,
      {/* //   document.getElementById('modal')
      // )} */}
    </>
  );
};

export default CartModal;
