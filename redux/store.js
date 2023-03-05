import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cartSlice";
import products from "./slices/productsSlice";
import categories from "./slices/categoriesSlice";
import blogs from "./slices/blogsSlice";
import details from "./slices/detailsSlice";
import search from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        cart,
        categories,
        products,
        blogs,
        details,
        search,
    },
});

/* export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; */
