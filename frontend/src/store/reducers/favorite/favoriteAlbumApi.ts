import { createApi } from "@reduxjs/toolkit/query/react";
import { FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteAlbum } from "@/store/reducers/favorite/types";
import { Album } from "@/store/reducers/album/types";
import { baseQueryWithAuth } from "@/store/middleware/baseQueryWithAuth";

export const favoriteAlbumApi = createApi({
  reducerPath: "favoriteAlbumApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["FavoriteAlbum"],
  endpoints: (build) => ({
    getAllFavoritesAlbumsByUserId: build.query<Album[], void>({
      query: () => ({
        url: FavoriteServiceEndpoints.ALBUM,
        method: "GET",
      }),
      providesTags: ["FavoriteAlbum"],
      transformResponse: (response: Album[]) => response,
    }),

    postFavoriteAlbum: build.mutation<FavoriteAlbum, number>({
      query: (album_id) => ({
        url: FavoriteServiceEndpoints.ALBUM,
        method: "POST",
        body: {
            album_id: album_id,
        },
      }),
      invalidatesTags: ['FavoriteAlbum'],
      transformResponse: (response: FavoriteAlbum) => response,
    }),

    deleteFavoriteAlbum: build.mutation<FavoriteAlbum, number>({
        query: (album_id) => ({
            url: `${FavoriteServiceEndpoints.ALBUM}/${album_id}`,
            method: "DELETE",
            transformResponse: (response: FavoriteAlbum) => response,
        }),
        invalidatesTags: ['FavoriteAlbum'],
    })
  }),
});

export const {
  useGetAllFavoritesAlbumsByUserIdQuery,
  usePostFavoriteAlbumMutation,
  useDeleteFavoriteAlbumMutation,
} = favoriteAlbumApi;
