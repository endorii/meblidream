import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categories.slice";
import ordersSlice from "./slices/orders.slice";

const rootReducer = {
    categories: categoriesSlice,
    orders: ordersSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
