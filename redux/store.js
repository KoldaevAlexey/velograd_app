import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import products from "./slices/productsSlice";
import categories from "./slices/categoriesSlice";

export const store = configureStore({
    reducer: {
        cart,
        products,
        categories,
    },
});
