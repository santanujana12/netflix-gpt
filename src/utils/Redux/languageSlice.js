import { createSlice, current } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        currentLanguage: "English",
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        },
    },
});

export const {changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;