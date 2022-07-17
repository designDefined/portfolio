import { configureStore } from "@reduxjs/toolkit";
import sampleStore from "./sample";
import themeStore from "./theme";

const store = configureStore({
  reducer: { sample: sampleStore, theme: themeStore },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
