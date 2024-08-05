import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "./cars";

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carsApi.middleware),
});
