import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userInfoFromStorage = () =>
    localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null

const initialState = {
    loading: false,
    userInfo: userInfoFromStorage,
    error: ''
}

export const userLogin = (email, password) => async (dispatch) => {
    try {
        dispatch(
            userLogin.pending());
        const response = await axios.post('/api/users/login', { 'username': email, 'password': password });
        dispatch(
            userLogin.fulfilled(
                response.data
                ));
    } catch (error) {
        dispatch(
            userLogin.rejected({ 
                error: error.message 
            }));
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: {
            pending: (state) => {
              state.loading = true;
              state.error = '';
            },
            fulfilled: (state, action) => {
              state.loading = false;
              state.userInfo = action.payload;
              state.error = '';
            },
            rejected: (state, action) => {
              state.loading = false;
              state.userInfo = null;
              state.error = action.error.message;
            }   
        }
    }
})

export default userSlice.reducer
