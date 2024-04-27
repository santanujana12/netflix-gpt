import { configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";

// Centralized data management store
const appStore = configureStore({
    reducer: {
        user: userSlice
    },
});

export default appStore;