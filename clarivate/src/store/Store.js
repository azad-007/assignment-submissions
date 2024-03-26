import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./ListSlice";

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
