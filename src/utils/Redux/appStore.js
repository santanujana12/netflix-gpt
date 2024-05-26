import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";


// Centralized data management store
const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies:movieSlice,
        gptSlice:gptSlice
    },
});

export default appStore;