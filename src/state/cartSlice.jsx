import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getCartItemsFromStorage = () =>
    localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const initialState = {
    cartItems: getCartItemsFromStorage(),
};

export const addToCart = (id, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch(
            cartAddItem({
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty,
            })
        );
        localStorage.setItem(
            "cartItems",
            JSON.stringify(getState().cart.cartItems)
        );
    } catch (error) {
        // Handle error if necessary
        console.error("Error adding to cart:", error);
    }
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch(cartRemoveItem(id));
    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartAddItem: (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find(
                (x) => x.product === item.product
            );
            if (existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    x.product === existItem.product ? item : x
                );
            } else {
                state.cartItems.push(item);
            }
        },
        cartRemoveItem: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((x) => x.product !== id);
        },
    },
});

export const { cartAddItem, cartRemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
