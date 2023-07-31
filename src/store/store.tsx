import { configureStore } from "@reduxjs/toolkit";
import phases from "./features/phrasesSlice";

export interface AppState {}

export default configureStore({
  reducer: {
    phases,
  },
});
