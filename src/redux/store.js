import contactsReducer from "./contacts/slice.js";
import filtersReducer from "./filters/slice.js";
import authReducer from "./auth/slice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});

export default store;
