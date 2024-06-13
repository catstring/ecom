import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    products: [],
    error: ''
}

export const fetchDetails = createAsyncThunk('product/fetchDetails', (id) => {
    return axios
        .get(`/ecom-api/api/products/${id}`)
        .then(response => response.data)
})


const detailsSlice = createSlice({
    name: 'detail',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchDetails.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    }
})
  
export default detailsSlice.reducer