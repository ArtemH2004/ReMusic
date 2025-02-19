import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Review } from "@/store/reducers/review/types";
import { baseUrl, ReviewServiceEndpoints } from "@/api/api";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Review"],
  endpoints: (build) => ({
    getAllReviews: build.query<Review[], void>({
      query: () => ({
        url: ReviewServiceEndpoints.REVIEW,
        method: "GET",
      }),
      providesTags: ["Review"],
      transformResponse: (response: Review[]) => {
        return response
          .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()); // Сортируем по времени создания
      },
    }),

    getReviewById: build.query<Review, number>({
      query: (reviewId) => ({
        url: `${ReviewServiceEndpoints.REVIEW}/${reviewId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
      transformResponse: (response: Review) => response,
    }),

    updateReviewById: build.mutation<Review, { reviewId: number; updatedReview: Partial<Review> }>({
      query: ({ reviewId, updatedReview }) => ({
        url: `${ReviewServiceEndpoints.REVIEW}/${reviewId}`,
        method: "PUT",
        body: updatedReview,
      }),
      invalidatesTags: ['Review'],
      transformResponse: (response: Review) => response,
    }),
    

    deleteReviewById: build.mutation<Review, number>({
      query: (reviwId) => ({
        url: `${ReviewServiceEndpoints.REVIEW}/${reviwId}`,
        method: "DELETE",
        transformResponse: (response: Review) => response,
      }),
      invalidatesTags: ['Review'],
    })
  }),
});

export const {
  useGetAllReviewsQuery,
  useGetReviewByIdQuery,
  useUpdateReviewByIdMutation,
  useDeleteReviewByIdMutation
} = reviewApi;
