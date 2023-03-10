import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ROOT_API_ROUTE, BLOGS_ROUTE } from "../../utils/consts.js";

export const fetchBlogsData = createAsyncThunk(
    "blogs/fetchBlogsData",
    async () => {
        const { data } = await axios.get(`${ROOT_API_ROUTE}${BLOGS_ROUTE}`);
        return data.data;
    }
);

const initialState = {
    blogs: null,
};

export const blogsSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBlogsData.fulfilled, (state, action) => {
            state.blogs = action.payload;
        });
    },
});

export default blogsSlice.reducer;
