// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./reducers/UserDataSlice";

const Store = configureStore({
  reducer: {
    // user: UserDataSlice
  },
});

export default Store;
