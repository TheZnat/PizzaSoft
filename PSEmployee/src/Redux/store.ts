import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filter/filterSlice";
import dataReducer from "./slices/data/dataSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer, // Указываем ключ (например, filters) и значение filterReducer
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
