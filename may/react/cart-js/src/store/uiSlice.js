import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    showNotification: null,
  },
  reducers: {
    notification(state, action) {
      state.showNotification = {
        message: action.payload.message,
        title: action.payload.title,
        status: action.payload.status,
      };
    },
  },
});

export const uiSliceReducers = uiSlice.reducer;
export const uiActions = uiSlice.actions;
