import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserThunk = createAsyncThunk("user/fetchUserThunk", async () => {
  const response = await axios.get("https://fakestoreapi.com/users/1");
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});
[].map().filter().reducer();
