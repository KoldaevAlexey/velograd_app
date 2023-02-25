import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsData = createAsyncThunk(
    "products/fetchProductsData",
    async ({ title, selectedSorting }) => {
        const { data } = await axios.get(
            `http://10.0.2.2:1337/api/items?filters[type][$contains]=${title}&sort=price:${selectedSorting}`
        );
        return data;
    }
);

const initialState = {
    products: {
        data: [],
    },
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
