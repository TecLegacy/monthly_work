import { useDispatch, useSelector } from 'react-redux';

const Increase = () => {
  const showToggle = useSelector(state => state.showCounter);
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

  const showCounter = () => {
    dispatch({
      type: 'SHOW_COUNTER',
    });
  };
  return (
    <>
      <div>
        <h3>Show Counter</h3>
        <button onClick={showCounter}>Click </button>
      </div>

      {/* {showToggle && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
      )} */}

      {showToggle ? (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
      ) : (
        'Nothing to show'
      )}
    </>
  );
};

export default Increase;
