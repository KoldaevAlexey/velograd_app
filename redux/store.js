import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import items from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        cart,
        items,
    },
});
