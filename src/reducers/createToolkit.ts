import { configureStore } from '@reduxjs/toolkit';
import progressMiddleware from 'middleware/progress';
import reducer from 'reducers';

const createToolkit = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ immutableCheck: false }).concat(progressMiddleware),
  devTools: process.env.NODE_ENV !== `production`,
});

export default createToolkit;
