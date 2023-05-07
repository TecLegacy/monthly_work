import modules from './counter.module.css';
import { useSelector } from 'react-redux';
import Increase from './increase';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showToggle = useSelector(state => state.counter.showCounter);
  return (
    <>
      {showToggle ? (
        <div className={modules.middle}>
          <div className={modules.width}>{counter}</div>
        </div>
      ) : (
        ''
      )}
      <Increase />
    </>
  );
};

export default Counter;
