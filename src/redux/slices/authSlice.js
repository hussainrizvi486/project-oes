import { createSlice } from '@reduxjs/toolkit'

const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

const initialState = {
    user: user,
    accessToken: null,
    isAuthenticated : false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        LogIn: (state, action) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.accessToken = accessToken
        },
        LogOut: (state, action) => {
            state.user = null
            state.accessToken = null

        }
    }
})


export const { LogIn, LogOut } = authSlice.actions
export default authSlice.reducer
export const getUser = (state) => state.auth.user
export const getToken = (state) => state.auth.accessToken

