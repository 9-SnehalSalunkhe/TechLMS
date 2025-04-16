import {createApi} from "@reduxjs/toolkit/query/react";

const USER_API = "http://localhost:8080/api/v1/user"
export const authApi = createApi({
    reducerPath : "authApit",
    baseQuery : fetchBaseQuery({
        baseUrl:USER_API,
        credentials :'include'
    }),


    endpoints: (builder) =>({
            registerUser : builder.mutation({
                query: (inputData) => ({
                    url:"register",
                    method: "POST",
                    body : inputData
                })
            }),

            loginUser : builder.mutation({
                query: (inputData) => ({
                    url:"login",
                    method: "POST",
                    body : inputData
                }),
                async onQueryStarted(arg)
    })
})