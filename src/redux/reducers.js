import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    user: "test"
}


export const reducer = createReducer(initialState, {
    setUser(state, action) {
        state.user = action.payload
    }
})

