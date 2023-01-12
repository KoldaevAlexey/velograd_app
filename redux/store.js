import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import products from "./slices/productsSlice";

export const store = configureStore({
    reducer: {
        cart,
        products,
    },
});
