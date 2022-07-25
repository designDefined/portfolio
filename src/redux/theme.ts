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
}

const initialState = { current: "default", past: "default" } as ThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.past = state.current;
      state.current = action.payload;
    },
    refreshTheme(state) {
      state.past = state.current;
    },
  },
});

export const { setTheme, refreshTheme } = themeSlice.actions;
export default themeSlice.reducer;
