import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userInfoFromStorage = () =>
    localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null

const initialState = {
    loading: false,
    userInfo: userInfoFromStorage(),
    error: ''
}

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // console.log(email, password)
            const response = await axios.post('/api/users/login/', { 'username': email, 'password': password });
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch(userSlice.actions.logout())
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => { // Define the logout action
            state.userInfo = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.userInfo = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.userInfo = null
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer