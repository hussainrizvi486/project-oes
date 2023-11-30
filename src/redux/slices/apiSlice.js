import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LogIn, LogOut } from './authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
    prepareHeaders: (headers, { state }) => {
        const token = state().auth.accessToken
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryReAuth = async (args, api, kwargs) => {
    let res = await baseQuery(args, api, kwargs)
    if (res?.error?.status === 403) {
        console.log('Refreshing the token')
        const refreshRes = baseQuery("/refresh", api, kwargs)
        console.log(refreshRes)
        if (refreshRes?.data) {
            const user = api.state.auth.user
            api.dispatch(LogIn({ ...refreshRes.data, user }))
            res = await baseQuery(args, api, kwargs)
        } else {
            api.dispatch(LogOut())
        }
    }

    return res
}

export const apiSlice = createApi({
    baseQuery: baseQueryReAuth,
    endpoints: builder => ({})
})