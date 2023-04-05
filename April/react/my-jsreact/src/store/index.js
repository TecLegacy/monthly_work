import { createStore } from 'redux';

const initialState = {
  counter: 0,
};

const storeReducer = (state = initialState, action) => {
  if (action.type === 'INCRE') {
    return {
      counter: state.counter + action.payload,
    };
  }
  if (action.type === 'DECREE') {
    return {
      counter: state.counter - 5,
    };
  }
  return state;
};

const store = createStore(storeReducer);

export default store;
