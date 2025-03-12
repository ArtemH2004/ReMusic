import { createApi } from "@reduxjs/toolkit/query/react";
import { Song } from "@/store/reducers/song/types";
import { SongServiceEndpoints } from "@/api/api";
import { baseQueryWithAuth } from "@/store/middleware/baseQueryWithAuth";

export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Song"],
  endpoints: (build) => ({
    getAllSongs: build.query<Song[], void>({
      query: () => ({
        url: SongServiceEndpoints.SONG,
        method: "GET",
      }),
      providesTags: ["Song"],
      transformResponse: (response: Song[]) => response
    }),

    getSongById: build.query<Song, number>({
      query: (songId) => ({
        url: `${SongServiceEndpoints.SONG}/${songId}`,
        method: "GET",
      }),
      providesTags: ["Song"],
      transformResponse: (response: Song) => response,
    }),

    deleteSongById: build.mutation<Song, number>({
      query: (songId) => ({
        url: `${SongServiceEndpoints.SONG}/${songId}`,
        method: "DELETE",
        transformResponse: (response: Song) => response,
      }),
      invalidatesTags: ["Song"],
    }),
  }),
});

export const {
  useGetAllSongsQuery,
  useGetSongByIdQuery,
  useDeleteSongByIdMutation,
} = songApi;
