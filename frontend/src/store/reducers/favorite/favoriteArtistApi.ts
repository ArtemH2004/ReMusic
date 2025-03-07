import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteArtist } from "@/store/reducers/favorite/types";
import { User } from "@/store/reducers/user/types";

export const favoriteArtistApi = createApi({
  reducerPath: "favoriteArtistApi",
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
  tagTypes: ["FavoriteArtist"],
  endpoints: (build) => ({
    getAllFavoritesArtistsByUserId: build.query<User[], void>({
      query: () => ({
        url: FavoriteServiceEndpoints.ARTIST,
        method: "GET",
      }),
      providesTags: ["FavoriteArtist"],
      transformResponse: (response: User[]) => response,
    }),

    postFavoriteArtist: build.mutation<FavoriteArtist, number>({
      query: (artist_id) => ({
        url: FavoriteServiceEndpoints.ARTIST,
        method: "POST",
        body: {
            artist_id: artist_id,
        },
      }),
      invalidatesTags: ['FavoriteArtist'],
      transformResponse: (response: FavoriteArtist) => response,
    }),

    deleteFavoriteArtist: build.mutation<FavoriteArtist, number>({
        query: (song_id) => ({
            url: `${FavoriteServiceEndpoints.ARTIST}/${song_id}`,
            method: "DELETE",
            transformResponse: (response: FavoriteArtist) => response,
        }),
        invalidatesTags: ['FavoriteArtist'],
    })
  }),
});

export const {
  useGetAllFavoritesArtistsByUserIdQuery,
  usePostFavoriteArtistMutation,
  useDeleteFavoriteArtistMutation,
} = favoriteArtistApi;
