import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BIKE_SELECTION_ROUTE, ROOT_API_ROUTE } from "../../utils/consts";

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
    bikeSelection: null,
};

export const bikeSelectionSlice = createSlice({
    name: "bikeSelection",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBikeSelectionData.fulfilled, (state, action) => {
            state.bikeSelection = action.payload;
        });
    },
});

export default bikeSelectionSlice.reducer;
