import { Song } from "@/store/reducers/song/types";
import { Review } from "@/store/reducers/review/types";

export interface Album {
    id: number;
    name: string;
    photo: string;
    artist_id: number;
    artist_name: string,
    created_at: string;
    rating: number;
  }

  export interface AlbumFullInfo {
    album: Album;
    songs: Song[];
    reviews: Review[];
  }