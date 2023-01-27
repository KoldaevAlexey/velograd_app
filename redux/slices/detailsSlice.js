import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { ROOT_API_ROUTE } from "../../utils/consts.js";
import { DETAILS_ROUTE } from "../../utils/consts.js";

export const fetchDetailsData = createAsyncThunk(
    "details/fetchDetailsData",
    async () => {
        const { data } = await axios.get(`${ROOT_API_ROUTE}${DETAILS_ROUTE}`);
        return data.data;
    }
);

const initialState = {
    details: null,
};

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailsData.fulfilled, (state, action) => {
            state.details = action.payload;
        });
    },
});

export default detailsSlice.reducer;
