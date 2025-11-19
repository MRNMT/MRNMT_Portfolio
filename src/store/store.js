import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    contact: contactReducer,
  },
});
