// store.js
import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './SearchSlice';
import tabReducer from './TabSlice';

export const store = configureStore({
  reducer: {
    api: apiReducer,
    tab: tabReducer,
  },
});
