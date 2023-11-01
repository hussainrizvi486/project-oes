import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './reducers';

const store = configureStore({
    reducer: {
        custom: reducer
    }
});

export default store