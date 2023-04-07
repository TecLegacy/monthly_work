import modules from '../cart.module.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '@/store/cartSlice';
const CartDispatch = props => {
  const { item, price, description } = props;
  const dispatch = useDispatch();

  const updateData = () => {
    dispatch(
      cartAction.addItem({
        item,
        price,
        description,
      })
    );
  };
  return (
    <>
      <div className={modules.items}>
        <div className={modules.articles}>
          <span>{item} </span>
          <span>Price $ {price}</span>
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
