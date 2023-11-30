import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, accessToken: null },
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
export const getUser =  (state) => state.auth.user
export const getToken =  (state) => state.auth.accessToken