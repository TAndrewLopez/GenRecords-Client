import { configureStore } from "@reduxjs/toolkit";
import { adminReducer, authReducer, shopReducer } from "./features";

export const store = configureStore({
  reducer: {
    adminReducer,
    authReducer,
    shopReducer,
  },
});
