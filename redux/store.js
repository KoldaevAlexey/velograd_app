import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import products from "./slices/productsSlice";
import categories from "./slices/categoriesSlice";
import fullProduct from "./slices/fullProductSlice";
import blogs from "./slices/blogsSlice";

export const store = configureStore({
    reducer: {
        cart,
        categories,
        products,
        fullProduct,
        blogs,
    },
});
