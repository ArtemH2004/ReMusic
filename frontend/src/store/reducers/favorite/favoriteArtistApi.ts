import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteArtist } from "@/store/reducers/favorite/types";
import { User } from "@/store/reducers/user/types";

export const favoriteArtistApi = createApi({
  reducerPath: "favoriteArtistApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["FavoriteArtist"],
  endpoints: (build) => ({
    getAllFavoritesArtists: build.query<FavoriteArtist[], void>({
      query: () => ({
        url: FavoriteServiceEndpoints.ARTIST,
        method: "GET",
      }),
      providesTags: ["FavoriteArtist"],
      transformResponse: (response: FavoriteArtist[]) => response,
    }),

    getFavoriteArtistById: build.query<FavoriteArtist, number>({
      query: (id) => ({
        url: `${FavoriteServiceEndpoints.ARTIST}/${id}`,
        method: "GET",
      }),
      providesTags: ["FavoriteArtist"],
      transformResponse: (response: FavoriteArtist) => response,
    }),

    getAllFavoritesArtistsByUserId: build.query<User[], number>({
      query: (userId) => ({
        url: `${FavoriteServiceEndpoints.ALL_ARTISTS_BY_USER_ID}/${userId}`,
        method: "GET",
      }),
      providesTags: ["FavoriteArtist"],
      transformResponse: (response: User[]) => response,
    }),

    getFavoriteArtistByIdAndUserId: build.query<FavoriteArtist, {user_id: number, artist_id: number}>({
      query: ({user_id, artist_id}) => ({
        url: `${FavoriteServiceEndpoints.ARTIST}/${artist_id}/user/${user_id}`,
        method: "GET",
      }),
      providesTags: ["FavoriteArtist"],
      transformResponse: (response: FavoriteArtist) => response,
    }),

    postFavoriteArtist: build.mutation<FavoriteArtist, {user_id: number, artist_id: number}>({
      query: ({user_id, artist_id}) => ({
        url: FavoriteServiceEndpoints.ARTIST,
        method: "POST",
        body: {
            user_id: user_id,
            artist_id: artist_id,
        },
      }),
      invalidatesTags: ['FavoriteArtist'],
      transformResponse: (response: FavoriteArtist) => response,
    }),

    deleteFavoriteArtist: build.mutation<FavoriteArtist, number>({
        query: (id) => ({
            url: `${FavoriteServiceEndpoints.ARTIST}/${id}`,
            method: "DELETE",
            transformResponse: (response: FavoriteArtist) => response,
        }),
        invalidatesTags: ['FavoriteArtist'],
    })
  }),
});

export const {
  useGetAllFavoritesArtistsQuery,
  useGetFavoriteArtistByIdQuery,
  useGetAllFavoritesArtistsByUserIdQuery,
  useGetFavoriteArtistByIdAndUserIdQuery,
  usePostFavoriteArtistMutation,
  useDeleteFavoriteArtistMutation,
} = favoriteArtistApi;
