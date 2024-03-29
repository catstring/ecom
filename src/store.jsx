import { configureStore } from '@reduxjs/toolkit';
import productReducer from './state/productSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
  }
});

export default store;