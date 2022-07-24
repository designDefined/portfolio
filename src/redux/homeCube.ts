import { createSlice } from "@reduxjs/toolkit";

interface HomeCubeState {
  toNext: boolean;
  toInvert: boolean;
}

const initialState = { toNext: false, toInvert: false } as HomeCubeState;

const homeCubeSlice = createSlice({
  name: "homeCube",
  initialState,
  reducers: {
    rotateNext(state) {
      state.toNext = true;
    },
    rotateInvert(state) {
      state.toInvert = true;
    },
    rotateStop(state) {
      state.toNext = false;
      state.toInvert = false;
    },
  },
});

export const { rotateNext, rotateInvert, rotateStop } = homeCubeSlice.actions;
export default homeCubeSlice.reducer;
