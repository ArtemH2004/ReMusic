import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteSong } from "@/store/reducers/favorite/types";
import { Song } from "@/store/reducers/song/types";

export const favoriteSongApi = createApi({
  reducerPath: "favoriteSongApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["FavoriteSong"],
  endpoints: (build) => ({
    getAllFavoritesSongs: build.query<FavoriteSong[], void>({
      query: () => ({
        url: FavoriteServiceEndpoints.SONG,
        method: "GET",
      }),
      providesTags: ["FavoriteSong"],
      transformResponse: (response: FavoriteSong[]) => response,
    }),

    getFavoriteSongById: build.query<FavoriteSong, number>({
      query: (id) => ({
        url: `${FavoriteServiceEndpoints.SONG}/${id}`,
        method: "GET",
      }),
      providesTags: ["FavoriteSong"],
      transformResponse: (response: FavoriteSong) => response,
    }),

    getAllFavoritesSongsByUserId: build.query<Song[], number>({
      query: (userId) => ({
        url: `${FavoriteServiceEndpoints.ALL_SONGS_BY_USER_ID}/${userId}`,
        method: "GET",
      }),
      providesTags: ["FavoriteSong"],
      transformResponse: (response: Song[]) => response,
    }),

    getFavoriteSongByIdAndUserId: build.query<FavoriteSong, {user_id: number, song_id: number}>({
      query: ({user_id, song_id}) => ({
        url: `${FavoriteServiceEndpoints.SONG}/${song_id}/user/${user_id}`,
        method: "GET",
      }),
      providesTags: ["FavoriteSong"],
      transformResponse: (response: FavoriteSong) => response,
    }),

    postFavoriteSong: build.mutation<FavoriteSong, {user_id: number, song_id: number}>({
      query: ({user_id, song_id}) => ({
        url: FavoriteServiceEndpoints.SONG,
        method: "POST",
        body: {
            user_id: user_id,
            song_id: song_id,
        },
      }),
      invalidatesTags: ['FavoriteSong'],
      transformResponse: (response: FavoriteSong) => response,
    }),

    deleteFavoriteSong: build.mutation<FavoriteSong, number>({
        query: (id) => ({
            url: `${FavoriteServiceEndpoints.SONG}/${id}`,
            method: "DELETE",
            transformResponse: (response: FavoriteSong) => response,
        }),
        invalidatesTags: ['FavoriteSong'],
    })
  }),
});

export const {
  useGetAllFavoritesSongsQuery,
  useGetFavoriteSongByIdQuery,
  useGetAllFavoritesSongsByUserIdQuery,
  useGetFavoriteSongByIdAndUserIdQuery,
  usePostFavoriteSongMutation,
  useDeleteFavoriteSongMutation,
} = favoriteSongApi;
