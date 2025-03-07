import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteReview } from "@/store/reducers/favorite/types";
import { ReviewArtistAlbumSong } from "@/store/reducers/review/types";

export const favoriteReviewApi = createApi({
  reducerPath: "favoriteReviewApi",
  baseQuery: fetchBaseQuery({ baseUrl, credentials: "include" }),
  tagTypes: ["FavoriteReview"],
  endpoints: (build) => ({
    getAllFavoritesReviewsByUserId: build.query<ReviewArtistAlbumSong[], void>({
      query: () => ({
        url: FavoriteServiceEndpoints.REVIEW,
        method: "GET",
      }),
      providesTags: ["FavoriteReview"],
      transformResponse: (response: ReviewArtistAlbumSong[]) => response,
    }),

    postFavoriteReview: build.mutation<FavoriteReview, number>({
      query: (review_id) => ({
        url: FavoriteServiceEndpoints.REVIEW,
        method: "POST",
        body: {
            review_id: review_id,
        },
      }),
      invalidatesTags: ['FavoriteReview'],
      transformResponse: (response: FavoriteReview) => response,
    }),

    deleteFavoriteReview: build.mutation<FavoriteReview, number>({
        query: (review_id) => ({
            url: `${FavoriteServiceEndpoints.REVIEW}/${review_id}`,
            method: "DELETE",
            transformResponse: (response: FavoriteReview) => response,
        }),
        invalidatesTags: ['FavoriteReview'],
    })
  }),
});

export const {
  useGetAllFavoritesReviewsByUserIdQuery,
  usePostFavoriteReviewMutation,
  useDeleteFavoriteReviewMutation,
} = favoriteReviewApi;
