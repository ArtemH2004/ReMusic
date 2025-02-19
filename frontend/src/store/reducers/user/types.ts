export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  photo?: string;
  isartist: boolean;
  isAuthorizedUser: boolean;
  created_at: string;
}

export interface ShortUserInfo {
  id: number;
  username: string;
  photo?: string;
}
