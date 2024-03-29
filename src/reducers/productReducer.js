// import {
//     PRODUCT_LIST_REQUEST,
//     PRODUCT_LIST_SUCCESS,
//     PRODUCT_LIST_FAIL,
// } from '../constants/productConstants.js'

// const initialState = {
//     products: [],
//   };
  
// const productListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case PRODUCT_LIST_REQUEST:
//             return { loading: true, Product: [] };
//         case PRODUCT_LIST_SUCCESS:
//             return { loading: false, Product: action.payload };
//         case PRODUCT_LIST_FAIL:
//             return { loading: false, error: action.payload };
//         default:
//         return state;
//     }
// };
  
//   export default productListReducer;