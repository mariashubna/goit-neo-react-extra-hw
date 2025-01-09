import contactsReducer from "./contacts/slice.js";
import filtersReducer from "./filters/slice.js.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
