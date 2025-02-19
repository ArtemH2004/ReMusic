import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rememberEnhancer, rememberReducer } from "redux-remember";
import { userApi } from "@/store/reducers/user/userApi";
import { commentsReducer } from "@/store/reducers/comments/commentsSlice";
import { commentsApi } from "@/store/reducers/comments/commentsApi";
import { songApi } from "@/store/reducers/song/songApi";
import { albumApi } from "@/store/reducers/album/albumApi";

const rememberedReducers = [""];

const rootReducer = combineReducers({
  commentsReducer,
  [userApi.reducerPath]: userApi.reducer,
  [songApi.reducerPath]: songApi.reducer,
  [albumApi.reducerPath]: albumApi.reducer,
  [commentsApi.reducerPath]: commentsApi.reducer,
});

const rememberedReducer = rememberReducer(rootReducer);

export const store = configureStore({
  reducer: rememberedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(songApi.middleware)
      .concat(albumApi.middleware)
      .concat(commentsApi.middleware),
  enhancers: (getDefaultEnhancer) =>
    getDefaultEnhancer().concat(
      rememberEnhancer(window.localStorage, rememberedReducers)
    ),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
