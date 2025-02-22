export interface User {
  id: number;
  username: string;
  email: string;
  photo?: string;
  isartist: boolean;
  rating: number;
  isAuthorizedUser: boolean;
  created_at: string;
}

export interface ShortUserInfo extends User {
  id: number;
  isartist: boolean;
  username: string;
  photo?: string;
  rating: number;
}
