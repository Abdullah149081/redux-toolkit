import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "redux-logger";
import baseApi from "../features/api/baseApi";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
