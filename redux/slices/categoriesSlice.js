import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategoriesData = createAsyncThunk(
    "categories/fetchCategoriesData",
    async () => {
        const { data } = await axios.get(`http://10.0.2.2:1337/api/categories`);
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
