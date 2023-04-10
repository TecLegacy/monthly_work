import { useDispatch } from 'react-redux';
import modules from '../cart.module.css';
import { cartAction } from '@/store/cartSlice';

const IncreDecre = ({ item, quantity, price }) => {
  const dispatch = useDispatch();

  const upOne = () => {
    dispatch(
      cartAction.upByOne({
        item,
        quantity,
        price,
      })
    );
  };
  const downOne = () => {
    dispatch(
      cartAction.downByOne({
        item,
        quantity,
        price,
      })
    );
  };
  return (
    <>
      <div className={modules.splitButton}>
        <button onClick={upOne}> +</button>
        <button onClick={downOne}> -</button>
      </div>
    </>
  );
};

export default IncreDecre;
