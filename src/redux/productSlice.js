import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProductsThunk = createAsyncThunk({});
const productSlice = createSlice({
  name: "products",
});

export default productSlice;
