import { useDispatch } from 'react-redux';

const Increase = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({
      type: 'INCRE',
      payload: 10,
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: 'DECREE',
    });
  };
  return (
    <>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>decrement</button>
    </>
  );
};

export default Increase;
