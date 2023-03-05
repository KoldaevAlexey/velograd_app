import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
    ROOT_API_ROUTE,
    DETAILS_LIST_ROUTE,
    BIKE_SELECTION_ROUTE,
} from "../../utils/consts.ts";

export const fetchDetailsListData = createAsyncThunk(
    "detailsList/fetchDetailsListData",
    async () => {
        const { data } = await axios.get(
            `${ROOT_API_ROUTE}${DETAILS_LIST_ROUTE}`
        );
        return data.data;
    }
);
export const fetchBikeSelectionData = createAsyncThunk(
    "bikeSelection/fetchBikeSelectionData",
    async () => {
        const { data } = await axios.get(
            `${ROOT_API_ROUTE}${BIKE_SELECTION_ROUTE}`
        );
        return data.data;
    }
);

const initialState = {
    detailsList: null,
    bikeSelection: null,
};

export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDetailsListData.fulfilled, (state, action) => {
            state.detailsList = action.payload;
        });
        builder.addCase(fetchBikeSelectionData.fulfilled, (state, action) => {
            state.bikeSelection = action.payload;
        });
    },
});

export default detailsSlice.reducer;
