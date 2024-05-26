import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    toggleGpt: false,
  },
  reducers: {
    toggleGptView: (state, action) => {
      state.toggleGpt = !state.toggleGpt;
    },
  },
});

export const {toggleGptView} = gptSlice.actions;
export default gptSlice.reducer;