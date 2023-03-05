import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
    ROOT_API_ROUTE,
    DETAILS_LIST_ROUTE,
    BIKE_SELECTION_ROUTE,
} from "../../utils/consts.ts";

export const fetchCategoriesData = createAsyncThunk(
    "categories/fetchCategoriesData",
    async () => {
        const { data } = await axios.get(`${ROOT_API_ROUTE}categories`);
        const editedData = data.data[0].attributes.categories;
        return editedData;
    }
);

const initialState = {
    categories: null,
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCategoriesData.fulfilled, (state, action) => {
            state.categories = action.payload;
        });
    },
});

export default categoriesSlice.reducer;
