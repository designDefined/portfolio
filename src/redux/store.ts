import { configureStore } from "@reduxjs/toolkit";
import sampleStore from "./sample";
import themeStore from "./theme";
import backgroundStore from "./background";

const store = configureStore({
  reducer: {
    sample: sampleStore,
    theme: themeStore,
    background: backgroundStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
