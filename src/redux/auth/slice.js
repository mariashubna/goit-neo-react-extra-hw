import { createSlice } from "@reduxjs/toolkit";
import {
  logInOperation,
  logOutOperation,
  refreshUser,
  registerOperation,
} from "./operations";

const handlePending = (state) => {
  state.isLoggedIn = true;
};

const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    error: null,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerOperation.pending, handlePending)
      .addCase(registerOperation.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerOperation.rejected, handleRejected)
      .addCase(logInOperation.pending, handlePending)
      .addCase(logInOperation.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logInOperation.rejected, handleRejected)
      .addCase(logOutOperation.pending, handlePending)
      .addCase(logOutOperation.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(logOutOperation.rejected, handleRejected)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default slice.reducer;
