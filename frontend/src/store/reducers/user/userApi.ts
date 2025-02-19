import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/store/reducers/user/types";
import { baseUrl, UserServiceEndpoints } from "@/api/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
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

    getAllArtistsUsers: build.query<User[], void>({
      query: () => ({
        url: UserServiceEndpoints.USER,
        method: "GET",
      }),
      providesTags: ["User"],
      transformResponse: (response: User[]) => {
        return response
          .filter(user => user.isartist)
          .sort((a, b) => new Date(b.createdat).getTime() - new Date(a.createdat).getTime()); // Сортируем по времени создания
      },
    }),
    

    getUserById: build.query<User, number>({
      query: (userId) => ({
        url: `${UserServiceEndpoints.USER}/${userId}`,
        method: "GET",
      }),
      providesTags: ["User"],
      transformResponse: (response: User) => response,
    }),

    updateUserPhotoById: build.mutation<User, {userId: number, photo: string}>({
      query: ({userId, photo}) => ({
        url: `${UserServiceEndpoints.USER}/${userId}`,
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
  useGetAllArtistsUsersQuery,
  useUpdateUserPhotoByIdMutation,
} = userApi;
