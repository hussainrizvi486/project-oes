import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"

export const API_URL = import.meta.env.VITE_API_URL

const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export default store