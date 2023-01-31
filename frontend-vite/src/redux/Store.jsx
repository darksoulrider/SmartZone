import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

const Store = configureStore({
  reducer:{
    theme:themeReducer,
  }
});

export default Store;
