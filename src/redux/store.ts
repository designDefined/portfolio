import { configureStore } from "@reduxjs/toolkit";
import sampleStore from "./sample";
import themeStore from "./theme";
import backgroundStore from "./background";
import homeCubeStore from "./homeCube";

const store = configureStore({
  reducer: {
    sample: sampleStore,
    theme: themeStore,
    background: backgroundStore,
    homeCube: homeCubeStore,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
