import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProductsThunk = createAsyncThunk({});
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchProductsThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice;
