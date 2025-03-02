import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteAlbum } from "@/store/reducers/favorite/types";
import { Album } from "@/store/reducers/album/types";

export const favoriteAlbumApi = createApi({
  reducerPath: "favoriteAlbumApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["FavoriteAlbum"],
  endpoints: (build) => ({
    getAllFavoritesAlbums: build.query<FavoriteAlbum[], void>({
      query: () => ({
        url: FavoriteServiceEndpoints.ALBUM,
        method: "GET",
      }),
      providesTags: ["FavoriteAlbum"],
      transformResponse: (response: FavoriteAlbum[]) => response,
    }),

    getFavoriteAlbumById: build.query<FavoriteAlbum, number>({
      query: (id) => ({
        url: `${FavoriteServiceEndpoints.ALBUM}/${id}`,
        method: "GET",
      }),
      providesTags: ["FavoriteAlbum"],
      transformResponse: (response: FavoriteAlbum) => response,
    }),

    getAllFavoritesAlbumsByUserId: build.query<Album[], number>({
      query: (userId) => ({
        url: `${FavoriteServiceEndpoints.ALL_ALBUMS_BY_USER_ID}/${userId}`,
        method: "GET",
      }),
      providesTags: ["FavoriteAlbum"],
      transformResponse: (response: Album[]) => response,
    }),

    getFavoriteAlbumByIdAndUserId: build.query<FavoriteAlbum, {user_id: number, album_id: number}>({
      query: ({user_id, album_id}) => ({
        url: `${FavoriteServiceEndpoints.ALBUM}/${album_id}/user/${user_id}`,
        method: "GET",
      }),
      providesTags: ["FavoriteAlbum"],
      transformResponse: (response: FavoriteAlbum) => response,
    }),

    postFavoriteAlbum: build.mutation<FavoriteAlbum, {user_id: number, album_id: number}>({
      query: ({user_id, album_id}) => ({
        url: FavoriteServiceEndpoints.ALBUM,
        method: "POST",
        body: {
            user_id: user_id,
            album_id: album_id,
        },
      }),
      invalidatesTags: ['FavoriteAlbum'],
      transformResponse: (response: FavoriteAlbum) => response,
    }),

    deleteFavoriteAlbum: build.mutation<FavoriteAlbum, number>({
        query: (id) => ({
            url: `${FavoriteServiceEndpoints.ALBUM}/${id}`,
            method: "DELETE",
            transformResponse: (response: FavoriteAlbum) => response,
        }),
        invalidatesTags: ['FavoriteAlbum'],
    })
  }),
});

export const {
  useGetAllFavoritesAlbumsQuery,
  useGetFavoriteAlbumByIdQuery,
  useGetAllFavoritesAlbumsByUserIdQuery,
  useGetFavoriteAlbumByIdAndUserIdQuery,
  usePostFavoriteAlbumMutation,
  useDeleteFavoriteAlbumMutation,
} = favoriteAlbumApi;
