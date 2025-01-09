import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  reducers: {},
});

export default slice.reducer;
