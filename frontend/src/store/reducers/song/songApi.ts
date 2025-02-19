import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Song } from "@/store/reducers/song/types";
import { baseUrl, SongServiceEndpoints } from "@/api/api";

export const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Song"],
  endpoints: (build) => ({
    getAllSongs: build.query<Song[], void>({
      query: () => ({
        url: SongServiceEndpoints.SONG,
        method: "GET",
      }),
      providesTags: ["Song"],
      transformResponse: (response: Song[]) => {
        return response.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      },
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
