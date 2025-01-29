import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categories.slice";

const rootReducer = {
    categories: categoriesSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
