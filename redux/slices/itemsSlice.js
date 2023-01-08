import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItemsData = createAsyncThunk(
    "items/fetchItemsData",
    async () => {
        //console.log("fetch start");
        const { data } = await axios.get(`http://localhost:1337/api/products`);
        //console.log("fetch end");
        return data;
    }
);

const initialState = {
    items: null,
};

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchItemsData.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export default itemsSlice.reducer;
