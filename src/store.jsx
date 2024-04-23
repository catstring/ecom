import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./state/productSlice";
import detailReducer from "./state/detailSlice";
import cartReducer from "./state/cartSlice";
import userReducer from "./state/userSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        detail: detailReducer,
        cart: cartReducer,
        user: userReducer,
    },
});

export default store;
