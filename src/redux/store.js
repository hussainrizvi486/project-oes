import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './reducers';
import { apiSlice } from "./slices/apiSlice";
import authReducer from "./slices/authSlice"

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authReducer
    }
});

export default store