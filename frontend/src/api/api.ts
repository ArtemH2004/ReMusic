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
const favoriteService = '/favorite';

export enum LoginServiceEndpoints {
  LOGIN = `${loginService}`,
}

export enum RegisterServiceEndpoints {
  REGISTER = `${registerService}`,
}

export enum UserServiceEndpoints {
  USER = `${userService}`,
  USER_PHOTO = `${userService}/photo`,
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

export enum FavoriteServiceEndpoints {
  SONG = `${favoriteService}/song`,
  ALBUM = `${favoriteService}/album`,
  ARTIST = `${favoriteService}/artist`,
  ALL_SONGS_BY_USER_ID = `${favoriteService}/song/user`,
  ALL_ALBUMS_BY_USER_ID = `${favoriteService}/album/user`,
  ALL_ARTISTS_BY_USER_ID = `${favoriteService}/artist/user`,
}