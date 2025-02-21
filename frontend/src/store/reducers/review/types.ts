export interface Review {
  id: number;
  description: string;
  user_id: number;
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