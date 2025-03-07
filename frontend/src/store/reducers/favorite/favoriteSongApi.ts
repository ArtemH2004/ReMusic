import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteSong } from "@/store/reducers/favorite/types";
import { Song } from "@/store/reducers/song/types";

export const favoriteSongApi = createApi({
  reducerPath: "favoriteSongApi",
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
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
