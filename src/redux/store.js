import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice.js";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
