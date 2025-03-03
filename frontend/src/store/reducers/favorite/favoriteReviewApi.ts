import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, FavoriteServiceEndpoints } from "@/api/api";
import { FavoriteReview } from "@/store/reducers/favorite/types";
import { Review } from "@/store/reducers/review/types";

export const favoriteReviewApi = createApi({
  reducerPath: "favoriteReviewApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["FavoriteReview"],
  endpoints: (build) => ({
    getAllFavoritesReviews: build.query<FavoriteReview[], void>({
      query: () => ({
        url: FavoriteServiceEndpoints.REVIEW,
        method: "GET",
      }),
      providesTags: ["FavoriteReview"],
      transformResponse: (response: FavoriteReview[]) => response,
    }),

    getFavoriteReviewById: build.query<FavoriteReview, number>({
      query: (id) => ({
        url: `${FavoriteServiceEndpoints.REVIEW}/${id}`,
        method: "GET",
      }),
      providesTags: ["FavoriteReview"],
      transformResponse: (response: FavoriteReview) => response,
    }),

    getAllFavoritesReviewsByUserId: build.query<Review[], number>({
      query: (userId) => ({
        url: `${FavoriteServiceEndpoints.ALL_REVIEWS_BY_USER_ID}/${userId}`,
        method: "GET",
      }),
      providesTags: ["FavoriteReview"],
      transformResponse: (response: Review[]) => response,
    }),

    getFavoriteReviewByIdAndUserId: build.query<FavoriteReview, {user_id: number, review_id: number}>({
      query: ({user_id, review_id}) => ({
        url: `${FavoriteServiceEndpoints.REVIEW}/${review_id}/user/${user_id}`,
        method: "GET",
      }),
      providesTags: ["FavoriteReview"],
      transformResponse: (response: FavoriteReview) => response,
    }),

    postFavoriteReview: build.mutation<FavoriteReview, {user_id: number, review_id: number}>({
      query: ({user_id, review_id}) => ({
        url: FavoriteServiceEndpoints.REVIEW,
        method: "POST",
        body: {
            user_id: user_id,
            review_id: review_id,
        },
      }),
      invalidatesTags: ['FavoriteReview'],
      transformResponse: (response: FavoriteReview) => response,
    }),

    deleteFavoriteReview: build.mutation<FavoriteReview, number>({
        query: (id) => ({
            url: `${FavoriteServiceEndpoints.REVIEW}/${id}`,
            method: "DELETE",
            transformResponse: (response: FavoriteReview) => response,
        }),
        invalidatesTags: ['FavoriteReview'],
    })
  }),
});

export const {
  useGetAllFavoritesReviewsQuery,
  useGetFavoriteReviewByIdQuery,
  useGetAllFavoritesReviewsByUserIdQuery,
  useGetFavoriteReviewByIdAndUserIdQuery,
  usePostFavoriteReviewMutation,
  useDeleteFavoriteReviewMutation,
} = favoriteReviewApi;
