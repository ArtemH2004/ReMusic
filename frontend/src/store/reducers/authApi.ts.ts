import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, LoginServiceEndpoints, RegisterServiceEndpoints } from "@/api/api";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
  endpoints: (build) => ({
    register: build.mutation({
      query: (userData) => ({
        url: RegisterServiceEndpoints.REGISTER,
        method: 'POST',
        body: userData,
      }),
    }),
    login: build.mutation({
      query: (userData) => ({
        url: LoginServiceEndpoints.LOGIN,
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
