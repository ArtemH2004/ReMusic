import { changeTitle } from "@/common/helpers/changeTitle";
import { getLanguage } from "@/common/helpers/getLanguage";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { DefaultInput } from "@/common/styles/tags/input/DefaultInput";
import {
  AuthErrorText,
  AuthPageContentWrapper,
  AuthPageForm,
  AuthPageFormSubmitButtonWrapper,
  AuthPageLink,
  AuthPageSpanText,
  AuthPageTitle,
} from "@/modules/auth/styles";
import { useLoginMutation } from "@/store/reducers/authApi.ts";
import { userActions } from "@/store/reducers/user/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const Login = () => {
  const language = getLanguage();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isError }] = useLoginMutation();
  const [errorStatus, setErrorStatus] = useState({status: 0});
  const dispatch = useDispatch();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorStatus({status: 0});
    try {
      const result = await login({ email, password }).unwrap();

      dispatch(userActions.setAuthorizedUser(result.user));
    } catch (error) {
      const apiError = error as {status: number};
      !!error && setErrorStatus({status: apiError.status});
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    scrollToTop();
    changeTitle("login");
  }, []);

  return (
    <AuthPageContentWrapper>
      <AuthPageTitle>{language.login}</AuthPageTitle>
      <AuthPageForm onSubmit={handleSubmit}>
        <DefaultInput
          label="Email"
          type="text"
          placeholder="re@remusic.com"
          isRequired={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <DefaultInput
          label={language.password}
          type="password"
          placeholder="••••••"
          isRequired={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AuthPageFormSubmitButtonWrapper>
          <BlackWhiteButton
            color="black"
            title={language.login}
            buttonType="submit"
          />
        </AuthPageFormSubmitButtonWrapper>
        {isError && (
          <AuthErrorText>
            {errorStatus.status === 401
              ? language.userNotFound
              : errorStatus.status === 402 && language.incorrectPassword}
          </AuthErrorText>
        )}
      </AuthPageForm>
      <AuthPageSpanText>
        {language.dontHaveAccount}{" "}
        <AuthPageLink to="/authentication/register">
          {language.register}
        </AuthPageLink>
      </AuthPageSpanText>
    </AuthPageContentWrapper>
  );
};
