import modules from '../cart.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '@/store/cartSlice';

const CartDispatch = props => {
  const { item, price, description, quantity } = props;

  const dispatch = useDispatch();
  const updateData = () => {
    // Dispatching CartItem
    dispatch(
      cartAction.addItem({
        item,
        price,
        description,
        quantity,
        perItem: price,
      })
    );
  };
  return (
    <>
      <div className={modules.items}>
        <div className={modules.articles}>
          <span>{item} </span>
          <span> ${price}</span>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <button className={modules.buttonEnd} onClick={updateData}>
          Add to Cart!
        </button>
      </div>
    </>
  );
};

export default CartDispatch;
