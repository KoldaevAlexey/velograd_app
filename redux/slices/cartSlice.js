import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
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
        clearItems: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
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

export const {
    addItem,
    clearItems,
    removeItem,
    incrementCount,
    decrementCount,
} = cartSlice.actions;

export default cartSlice.reducer;
