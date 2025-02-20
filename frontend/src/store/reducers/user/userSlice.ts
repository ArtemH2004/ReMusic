import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShortUserInfo } from '@/store/reducers/user/types';
import { useAppSelector } from '@/common/hooks/useAppSelector';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    authorizedUser: {} as ShortUserInfo
  },
  reducers: {
    setAuthorizedUser(state, action: PayloadAction<ShortUserInfo>) {
      state.authorizedUser = action.payload;
    },
    clearAuthorizedUser(state) {
      state.authorizedUser = {} as ShortUserInfo;
    },
  },
});

export const useIsAuthorized = (): boolean => {
    const authorizedUser = useAppSelector((state) => state.userReducer.authorizedUser);
    return !!Object.keys(authorizedUser).length;
}

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
