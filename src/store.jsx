import { configureStore } from '@reduxjs/toolkit';
import productReducer from './state/productSlice';
import detailReducer from './state/detailSlice';



const store = configureStore({
  reducer: {
    product: productReducer,
    detail: detailReducer
  }
});

export default store;