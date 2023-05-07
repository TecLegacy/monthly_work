import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '@/store/index';
import modules from './counter.module.css';
const Increase = () => {
  const showToggle = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({
    //   type: 'INCRE',
    //   payload: 10,
    // });

    dispatch(counterAction.increment());
  };

  const upBy = () => {
    dispatch(counterAction.incrementBy(40));
  };

  const decrementHandler = () => {
    // dispatch({
    //   type: 'DECREE',
    // });
    dispatch(counterAction.decrement());
  };

  const showCounter = () => {
    // dispatch({
    //   type: 'SHOW_COUNTER',
    // });
    dispatch(counterAction.toggle());
  };
  return (
    <>
      <div className={modules.middle}>
        <h3>Show Counter</h3>
        <button onClick={showCounter}>Click </button>

        {/* {showToggle && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>decrement</button>
        </div>
      )} */}

        {showToggle ? (
          <div className={modules.gap}>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>decrement</button>
            <button onClick={upBy}>Up by 40</button>
          </div>
        ) : (
          'Nothing to show'
        )}
      </div>
    </>
  );
};

export default Increase;
