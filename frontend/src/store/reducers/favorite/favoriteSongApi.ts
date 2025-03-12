import { createApi } from "@reduxjs/toolkit/query/react";
import { FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteSong } from "@/store/reducers/favorite/types";
import { Song } from "@/store/reducers/song/types";
import { baseQueryWithAuth } from "@/store/middleware/baseQueryWithAuth";

export const favoriteSongApi = createApi({
  reducerPath: "favoriteSongApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["FavoriteSong"],
  endpoints: (build) => ({
    getAllFavoritesSongsByUserId: build.query<Song[], void>({
      query: () => ({
        url: FavoriteServiceEndpoints.SONG,
        method: "GET",
      }),
      providesTags: ["FavoriteSong"],
      transformResponse: (response: Song[]) => response,
    }),

    postFavoriteSong: build.mutation<FavoriteSong, number>({
      query: (song_id) => ({
        url: FavoriteServiceEndpoints.SONG,
        method: "POST",
        body: {
            song_id: song_id,
        },
      }),
      invalidatesTags: ['FavoriteSong'],
      transformResponse: (response: FavoriteSong) => response,
    }),

    deleteFavoriteSong: build.mutation<FavoriteSong, number>({
        query: (song_id) => ({
            url: `${FavoriteServiceEndpoints.SONG}/${song_id}`,
            method: "DELETE",
            transformResponse: (response: FavoriteSong) => response,
        }),
        invalidatesTags: ['FavoriteSong'],
    })
  }),
});

export const {
  useGetAllFavoritesSongsByUserIdQuery,
  usePostFavoriteSongMutation,
  useDeleteFavoriteSongMutation,
} = favoriteSongApi;
