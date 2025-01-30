import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOrders } from "../../actions/orders.actions";

const initialState = {
    orders: [],
    isLoading: false,
    error: false,
};

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
    const data = await getOrders();
    return data;
});

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default ordersSlice.reducer;
