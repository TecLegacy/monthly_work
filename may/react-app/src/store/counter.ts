import { configureStore, createSlice } from '@reduxjs/toolkit';

// const cartReducer = createReducer();

interface Counter {
  counter: number;
}
const initialStates: Counter = {
  counter: 7,
};
const counterSlice = createSlice({
  name: 'cart',
  initialState: initialStates,
  reducers: {
    increment(state) {
      state.counter++;
    },
  },
});
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
