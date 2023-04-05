import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showToggle = useSelector(state => state.showCounter);
  return <>{showToggle ? <div>{counter}</div> : ''}</>;
};

export default Counter;
