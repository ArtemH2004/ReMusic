import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumServiceEndpoints, baseUrl } from "@/api/api";
import { Album, AlbumFullInfo } from "@/store/reducers/album/types";

export const albumApi = createApi({
  reducerPath: "albumApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Album"],
  endpoints: (build) => ({
    getAllAlbums: build.query<Album[], void>({
      query: () => ({
        url: AlbumServiceEndpoints.ALBUM,
        method: "GET",
      }),
      providesTags: ["Album"],
      transformResponse: (response: Album[]) => response
    }),

    getAlbumById: build.query<AlbumFullInfo, number>({
      query: (albumId) => ({
        url: `${AlbumServiceEndpoints.ALBUM}/${albumId}`,
        method: "GET",
      }),
      providesTags: ["Album"],
      transformResponse: (response: AlbumFullInfo) => response,
    }),

    deleteAlbumById: build.mutation<Album, number>({
      query: (albumId) => ({
        url: `${AlbumServiceEndpoints.ALBUM}/${albumId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Album"],
    }),
  }),
});

export const {
  useGetAllAlbumsQuery,
  useGetAlbumByIdQuery,
  useDeleteAlbumByIdMutation,
} = albumApi;
