import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsData = createAsyncThunk(
    "products/fetchProductsData",
    async ({ typeTitle }) => {
        const { data } = await axios.get(`http://10.0.2.2:1337/api/items`);
        return data;
    }
);

const initialState = {
    products: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsData.fulfilled, (state, action) => {
            state.products = action.payload;
        });
    },
});

export default productsSlice.reducer;
