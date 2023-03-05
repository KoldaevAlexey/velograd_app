import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const duplicate = state.cartItems.find((item) => {
                return item.id === action.payload.id;
            });
            if (duplicate) {
                duplicate.count++;
            } else {
                state.cartItems.push(action.payload);
                action.payload.count = 1;
            }
        },
        clearProducts: (state) => {
            state.cartItems = [];
        },
        removeProduct: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => {
                return item.id !== action.payload;
            });
        },
        incrementCount: (state, action) => {
            state.cartItems.forEach((item) => {
                if (item.id === action.payload) {
                    item.count++;
                }
            });
        },
        decrementCount: (state, action) => {
            state.cartItems.forEach((item) => {
                if (item.id === action.payload && item.count !== 1) {
                    item.count--;
                }
            });
        },
    },
});

/* export const selectCartItems = (state: RootState) => state.cart; */

export const {
    addProduct,
    clearProducts,
    removeProduct,
    incrementCount,
    decrementCount,
} = cartSlice.actions;

export default cartSlice.reducer;
