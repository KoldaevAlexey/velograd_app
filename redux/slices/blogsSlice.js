import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBlogsData = createAsyncThunk(
    "blogs/fetchBlogsData",
    async () => {
        const { data } = await axios.get(`http://10.0.2.2:1337/api/blogs`);
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
