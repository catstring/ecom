import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    userInfo: null,
    error: ''
}

export const registerUsers = createAsyncThunk(
    'user/registerUsers',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/register/`, { 'name': name, 'email': email, 'password': password });
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const userRegisterSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(registerUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(registerUsers.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
            state.error = ''
        })
        builder.addCase(registerUsers.rejected, (state, action) => {
            state.loading = false
            state.userInfo = null
            state.error = action.error.message
        })
    }
})

export default userRegisterSlice.reducer