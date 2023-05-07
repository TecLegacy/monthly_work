import { configureStore, createSlice } from '@reduxjs/toolkit';
import authSlice from './authStore';
import cartSlice from './cartSlice';
const initialCounterState = {
  counter: 0,
  showCounter: false,
};
// REDUX-TOOLKIT
const counterSlice = createSlice({
  name: 'Counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter += 10;
    },
    decrement(state) {
      state.counter -= 5;
    },
    incrementBy(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterAction = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
// REDUX
/**
 * import { createStore } from 'redux';
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

 */
