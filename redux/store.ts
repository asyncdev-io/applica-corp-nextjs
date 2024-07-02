// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { searchApiSlice } from "./api/searchApi";

const store = configureStore({
  reducer: {
    [searchApiSlice.reducerPath]: searchApiSlice.reducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([searchApiSlice.middleware]),
});

setupListeners(store.dispatch);

export default store;
