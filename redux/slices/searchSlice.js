import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ROOT_API_ROUTE } from "../../utils/consts";

export const fetchSearchData = createAsyncThunk(
    "search/fetchSearchData",
    async ({ title, selectedSorting }) => {
        if (title === "" || title === " ") {
            return { data: [] };
        }
        const { data } = await axios.get(
            `${ROOT_API_ROUTE}items?filters[title][$contains]=${title}&sort=price:${selectedSorting}`
        );
        return data;
    }
);

const initialState = {
    searchProducts: {
        data: [],
    },
};

export const searchSlice = createSlice({
    name: "searchProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSearchData.fulfilled, (state, action) => {
            state.searchProducts = action.payload;
        });
    },
});

export default searchSlice.reducer;
