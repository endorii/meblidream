import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../actions/categories.actions";

const initialState = {
    categories: [],
    isLoading: false,
    error: null,
};

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    const data = await getCategories();
    return data;
});

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export default categoriesSlice.reducer;
