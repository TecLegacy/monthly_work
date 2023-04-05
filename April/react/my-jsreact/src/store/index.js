import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: false,
};

const storeReducer = (state = initialState, action) => {
  if (action.type === 'INCRE') {
    return {
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    };
  }
  if (action.type === 'DECREE') {
    return {
      counter: state.counter - 5,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'SHOW_COUNTER') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(storeReducer);

export default store;
