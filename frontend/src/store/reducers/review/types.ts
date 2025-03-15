import { Album } from "@/store/reducers/album/types";
import { Song } from "@/store/reducers/song/types";
import { User } from "@/store/reducers/user/types";

export interface Review {
  id: number;
  description: string;
  user_id: number;
  user_name: string;
  user_photo: string;
  artist_id: number;
  album_id: number;
  song_id: number;
  rating: number;
  rhymes: number;
  rhythm: number;
  styles: number;
  individuality: number;
  atmosphere: number;
  created_at: string;
  liked: boolean;
}

export interface ReviewStatistics {
  id?: number;
  rating?: number;
  rhymes: number;
  rhythm: number;
  styles: number;
  individuality: number;
  atmosphere: number;
}

export interface ReviewContent {
  description: string;
  rating?: number;
  rhymes: number;
  rhythm: number;
  styles: number;
  individuality: number;
  atmosphere: number;
}

export interface ReviewArtistAlbumSong {
  review: Review;
  artist: User;
  album: Album;
  song: Song;
}