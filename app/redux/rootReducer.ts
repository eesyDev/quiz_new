import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
    theme: themeSlice,
    auth: authSlice
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;