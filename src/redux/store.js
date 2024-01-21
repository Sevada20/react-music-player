import { configureStore } from "@reduxjs/toolkit";
import songSlice from "./slices/songSlice/songSlice";

export const store = configureStore({
  reducer: {
    song: songSlice,
  },
});
