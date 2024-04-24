import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./state/productSlice";
import detailReducer from "./state/detailSlice";
import cartReducer from "./state/cartSlice";
import userReducer from "./state/userSlice";
import userRegisterReducer from "./state/userRegisterSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        detail: detailReducer,
        cart: cartReducer,
        user: userReducer,
        userRegister: userRegisterReducer,
    },
});

export default store;
