import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UserFullInfo } from "@/store/reducers/user/types";
import { baseUrl, UserServiceEndpoints } from "@/api/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getAllUsers: build.query<User[], void>({
      query: () => ({
        url: UserServiceEndpoints.USER,
        method: "GET",
      }),
      providesTags: ["User"],
      transformResponse: (response: User[]) => response,
    }),
    
    getUserById: build.query<UserFullInfo, number>({
      query: (userId) => ({
        url: `${UserServiceEndpoints.USER}/${userId}`,
        method: "GET",
      }),
      providesTags: ["User"],
      transformResponse: (response: UserFullInfo) => response,
    }),

    updateUserPhotoById: build.mutation<User, {userId: number, photo: string}>({
      query: ({userId, photo}) => ({
        url: `${UserServiceEndpoints.USER_PHOTO}/${userId}`,
        method: "PUT",
        body: { photo: photo },
      }),
      invalidatesTags: ['User'],
      transformResponse: (response: User) => response,
    })
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserPhotoByIdMutation,
} = userApi;
