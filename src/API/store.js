import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../API/Authentication/apiSlice";
import authReducer from "../GlobalRedux/Features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
