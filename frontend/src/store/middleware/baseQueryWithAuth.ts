import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { baseUrl } from "@/api/api";
import { userActions } from "@/store/reducers/user/userSlice";

export const baseQueryWithAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await fetchBaseQuery({
    baseUrl,
    credentials: "include",
  })(args, api, extraOptions);

  if (result.error?.status === 401) {
    api.dispatch(userActions.clearAuthorizedUser());
  }

  return result;
};