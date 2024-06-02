import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSlice",
  initialState: {
    toggleGpt: false,
    movieNames:null,
    movieResults:null
  },
  reducers: {
    toggleGptView: (state, action) => {
      state.toggleGpt = !state.toggleGpt;
    },
    addGptMovieNames: (state, action) => {
      state.movieNames = action.payload.movieNames;
      state.movieResults = action.payload.movieResults;
      return;
    }
  },
});

export const { toggleGptView, addGptMovieNames } = gptSlice.actions;
export default gptSlice.reducer;