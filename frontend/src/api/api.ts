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

const loginService = '/login';
const registerService = '/register';

const userService = '/user';
const songService = '/song';
const albumService = '/album';
const reviewService = '/review';

export enum LoginServiceEndpoints {
  LOGIN = `${loginService}`,
}

export enum RegisterServiceEndpoints {
  REGISTER = `${registerService}`,
}

export enum UserServiceEndpoints {
  USER = `${userService}`,
}

export enum SongServiceEndpoints {
  SONG = `${songService}`,
}

export enum AlbumServiceEndpoints {
  ALBUM = `${albumService}`,
}

export enum ReviewServiceEndpoints {
  REVIEW = `${reviewService}`,
  ARTIST = `${reviewService}/user`,
  ALBUM = `${reviewService}/album`,
  SONG = `${reviewService}/song`,
}