import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeType =
  | "default"
  | "writer"
  | "filmmaker"
  | "student"
  | "yourFriend";

interface ThemeState {
  current: ThemeType;
  past: ThemeType;
  isChanging: boolean;
}

const initialState = {
  current: "default",
  past: "default",
  isChanging: false,
} as ThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.past = state.current;
      state.current = action.payload;
      state.isChanging = true;
    },
    refreshTheme(state) {
      state.past = state.current;
    },
    finishTheme(state) {
      state.isChanging = false;
    },
  },
});

export const { setTheme, refreshTheme, finishTheme } = themeSlice.actions;
export default themeSlice.reducer;
