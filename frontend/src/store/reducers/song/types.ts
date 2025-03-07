export interface Song {
  id: number;
  name: string;
  photo: string;
  artist_id: number;
  artist_name: string;
  music: string;
  album_id: number;
  created_at: string;
  rating: number;
  liked: boolean;
}

export interface SongPlayer extends Song {
  id: number;
  name: string;
  photo: string;
  album_id: number;
  artist_id: number;
  artist_name: string;
  music: string;
}

export interface SongSettings {
  isRepeatable: boolean;
  isShuffled: boolean;
  isPlaying: boolean;
  isClose: boolean;
}