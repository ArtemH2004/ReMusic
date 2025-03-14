import { createApi } from '@reduxjs/toolkit/query/react';
import { LoginServiceEndpoints, RegisterServiceEndpoints } from "@/api/api";
import { baseQueryWithAuth } from "@/store/middleware/baseQueryWithAuth";

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithAuth,
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
