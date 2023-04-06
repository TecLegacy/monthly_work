import { createSlice } from '@reduxjs/toolkit';

const initialAuth = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  reducers: {
    loggedIn(state) {
      state.isAuthenticated = true;
    },
    loggedOut(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice;
