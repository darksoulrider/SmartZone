import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import userReducer from "./slices/userSlice";
const Store = configureStore({
  reducer:{
    theme:themeReducer,
    User:userReducer,
  }
});

export default Store;


export const BASE_URL = "http://localhost:9001";