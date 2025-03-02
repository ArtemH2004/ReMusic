import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { userApi } from "@/store/reducers/user/userApi";
import { songApi } from "@/store/reducers/song/songApi";
import { albumApi } from "@/store/reducers/album/albumApi";
import { reviewApi } from "@/store/reducers/review/reviewApi";
import { authApi } from "@/store/reducers/authApi.ts";
import { userReducer } from "@/store/reducers/user/userSlice";
import { favoriteSongApi } from "@/store/reducers/favorite/favoriteSongApi";
import { favoriteAlbumApi } from "@/store//reducers/favorite/favoriteAlbumApi";

const rememberedReducers = [
  authApi.reducerPath,
  'userReducer',
];

const rootReducer = combineReducers({
  userReducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [songApi.reducerPath]: songApi.reducer,
  [albumApi.reducerPath]: albumApi.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
  [favoriteSongApi.reducerPath]: favoriteSongApi.reducer,
  [favoriteAlbumApi.reducerPath]: favoriteAlbumApi.reducer,
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
  reducer: rememberedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(songApi.middleware)
      .concat(albumApi.middleware)
      .concat(reviewApi.middleware)
      .concat(favoriteSongApi.middleware)
      .concat(favoriteAlbumApi.middleware),
  enhancers: (getDefaultEnhancer) =>
    getDefaultEnhancer().concat(
      rememberEnhancer(window.localStorage, rememberedReducers)
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
