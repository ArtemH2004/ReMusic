import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Review, ReviewArtistAlbumSong } from "@/store/reducers/review/types";
import { baseUrl, ReviewServiceEndpoints } from "@/api/api";

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Review"],
  endpoints: (build) => ({
    getAllReviews: build.query<ReviewArtistAlbumSong[], void>({
      query: () => ({
        url: ReviewServiceEndpoints.REVIEW,
        method: "GET",
      }),
      providesTags: ["Review"],
      transformResponse: (response: ReviewArtistAlbumSong[]) => response
    }),

    getAllArtistReviewsById: build.query<Review[], number>({
      query: (artistId) => ({
        url: `${ReviewServiceEndpoints.ARTIST}/${artistId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
      transformResponse: (response: Review[]) => {
        return response
         .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      }
    }),

    getAllAlbumReviewsById: build.query<Review[], number>({
      query: (albumId) => ({
        url: `${ReviewServiceEndpoints.ALBUM}/${albumId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
      transformResponse: (response: Review[]) => response
    }),

    getAllSongReviewsById: build.query<Review[], number>({
      query: (songId) => ({
        url: `${ReviewServiceEndpoints.SONG}/${songId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
      transformResponse: (response: Review[]) => {
        return response
         .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
      }
    }),

    getReviewById: build.query<Review, number>({
      query: (reviewId) => ({
        url: `${ReviewServiceEndpoints.REVIEW}/${reviewId}`,
        method: "GET",
      }),
      providesTags: ["Review"],
      transformResponse: (response: Review) => response,
    }),

    postReview: build.mutation<Review, Partial<Review>>({
      query: (newReview) => ({
        url: ReviewServiceEndpoints.REVIEW,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: ['Review'],
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
  useGetAllArtistReviewsByIdQuery,
  useGetAllAlbumReviewsByIdQuery,
  useGetAllSongReviewsByIdQuery,
  useGetReviewByIdQuery,
  usePostReviewMutation,
  useUpdateReviewByIdMutation,
  useDeleteReviewByIdMutation
} = reviewApi;
