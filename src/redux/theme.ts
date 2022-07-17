import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "default" | "writer" | "filmmaker";

interface ThemeState {
  current: ThemeType;
}

const initialState = { current: "writer" } as ThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.current = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
