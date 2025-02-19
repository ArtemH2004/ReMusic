import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AlbumServiceEndpoints, baseUrl } from "@/api/api";
import { Album } from "@/store/reducers/album/types";

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
      transformResponse: (response: Album[]) => {
        return response.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      },
    }),

    getAlbumById: build.query<Album, number>({
      query: (albumId) => ({
        url: `${AlbumServiceEndpoints.ALBUM}/${albumId}`,
        method: "GET",
      }),
      providesTags: ["Album"],
      transformResponse: (response: Album) => response,
    }),

    deleteAlbumById: build.mutation<Album, number>({
      query: (albumId) => ({
        url: `${AlbumServiceEndpoints.ALBUM}/${albumId}`,
        method: "DELETE",
        transformResponse: (response: Album) => response,
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
