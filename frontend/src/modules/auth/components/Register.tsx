import { changeTitle } from "@/common/helpers/changeTitle";
import { getLanguage } from "@/common/helpers/getLanguage";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { CheckboxInput } from "@/common/styles/tags/input/CheckboxInput";
import { DefaultInput } from "@/common/styles/tags/input/DefaultInput";
import {
  AuthErrorText,
  AuthPageContentWrapper,
  AuthPageForm,
  AuthPageLink,
  AuthPageSpanText,
  AuthPageTitle,
} from "@/modules/auth/styles";
import { useRegisterMutation } from "@/store/reducers/authApi.ts";
import { userActions } from "@/store/reducers/user/userSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const language = getLanguage();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isartist, setIsArtist] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorStatus, setErrorStatus] = useState({ status: 0 });
  const [register, { isError }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorStatus({ status: 0 });

    if (password !== confirmPassword) {
      setErrorStatus({ status: 403 });
      return;
    }

    try {
      const result = await register({
        username,
        email,
        password,
        isartist,
      }).unwrap();

      if (result && result.id && result.username) {
        dispatch(userActions.setAuthorizedUser(result));
        navigate("/home");
      } else {
        console.error("Invalid registration result:", result);
      }
      
    } catch (error) {
      const apiError = error as { status: number };
      !!error && setErrorStatus({ status: apiError.status });
      console.error("Registration failed:", error);
    }
  };

  useEffect(() => {
    scrollToTop();
    changeTitle("register");
  }, []);

  return (
    <AuthPageContentWrapper>
      <AuthPageTitle>{language.registration}</AuthPageTitle>
      <AuthPageForm onSubmit={handleSubmit}>
        <DefaultInput
          label={language.username}
          type="text"
          placeholder="alblack52"
          isRequired={true}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <DefaultInput
          label={language.confirmPassword}
          type="password"
          placeholder="••••••"
          isRequired={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <CheckboxInput
          label={language.youAnArtist}
          onChange={(e) => setIsArtist(e.target.checked)}
        />

        <BlackWhiteButton
          color="black"
          title={language.register}
          buttonType="submit"
        />
        {isError ? (
          <AuthErrorText>
            {errorStatus.status === 400
              ? language.registrationError
              : errorStatus.status === 409 && language.namingError}
          </AuthErrorText>
        ) : (
          errorStatus.status === 403 && (
            <AuthErrorText>{language.passwordDontMatch}</AuthErrorText>
          )
        )}
      </AuthPageForm>
      <AuthPageSpanText>
        {language.alreadyHaveAccount}{" "}
        <AuthPageLink to="/authentication/login">{language.login}</AuthPageLink>
      </AuthPageSpanText>
    </AuthPageContentWrapper>
  );
};
