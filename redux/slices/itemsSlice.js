import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItemsData = createAsyncThunk(
    "items/fetchItemsData",
    async (_, { rejectWithValue }) => {
        const { data } = await axios.get(``);
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
