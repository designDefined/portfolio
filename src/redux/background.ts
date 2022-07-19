import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BackgroundState {
  next: { isExist: boolean; color?: string };
}

const initialState = { next: { isExist: false } } as BackgroundState;

const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setNextBackground(state, action: PayloadAction<string>) {
      state.next = { isExist: true, color: action.payload };
    },
    clearNextBackground(state) {
      state.next = { isExist: false };
    },
  },
});

export const { setNextBackground, clearNextBackground } =
  backgroundSlice.actions;
export default backgroundSlice.reducer;
