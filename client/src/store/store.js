import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categories.slice";
import ordersSlice from "./slices/orders.slice";
import userSlice from "./slices/user.slice";

const rootReducer = {
    categories: categoriesSlice,
    orders: ordersSlice,
    user: userSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
