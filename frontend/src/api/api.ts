const backendUrl = `localhost:8081`;
export const baseUrl = `http://${backendUrl}/api`;
export const imgUrl = `http://${backendUrl}`;

export enum MutationCacheKeys {
  LOGIN = 'login',
}

export type Response<T> = {
  statusCode: number;
  subject: string;
  data: T;
};

export type ErrorResponse = {
  statusCode: number;
  exception: string;
  message: string;
};

const authService = '/auth';

const userService = '/user';
const songService = '/song';

export enum AuthServiceEndpoints {
  LOGIN = `${authService}/login`,
  LOGOUT = `${authService}/logout`,
}

export enum UserServiceEndpoints {
  USER = `${userService}`,
}

export enum SongServiceEndpoints {
  SONG = `${songService}`,
}

