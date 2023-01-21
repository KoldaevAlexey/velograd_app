import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFullProductData = createAsyncThunk(
    "fullProduct/fetchFullProductData",
    async (id) => {
        const { data } = await axios.get(
            `http://10.0.2.2:1337/api/items/${id}`
        );
        return data.data;
    }
);

const initialState = {
    fullProduct: null,
};

export const fullProductSlice = createSlice({
    name: "fullProduct",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFullProductData.fulfilled, (state, action) => {
            state.fullProduct = action.payload;
        });
    },
});

export default fullProductSlice.reducer;
