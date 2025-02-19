import { getLanguage } from "@/common/helpers/getLanguage";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { DefaultInput } from "@/common/styles/tags/input/DefaultInput";
import {
  AuthPageContentWrapper,
  AuthPageForm,
  AuthPageFormSubmitButtonWrapper,
  AuthPageLink,
  AuthPageSpanText,
  AuthPageTitle,
} from "@/modules/auth/styles";

export const Register = () => {
  const language = getLanguage();

  return (
    <AuthPageContentWrapper>
      <AuthPageTitle>{language.registration}</AuthPageTitle>
      <AuthPageForm>
        <DefaultInput
          label={language.username}
          type="text"
          placeholder="alblack52"
          isRequired={true}
        />
        <DefaultInput
          label="Email"
          type="text"
          placeholder="re@remusic.com"
          isRequired={true}
        />
        <DefaultInput
          label={language.password}
          type="password"
          placeholder="••••••"
          isRequired={true}
        />
        <DefaultInput
          label={language.confirmPassword}
          type="password"
          placeholder="••••••"
          isRequired={true}
        />

        <AuthPageFormSubmitButtonWrapper>
          <BlackWhiteButton
            color="black"
            title={language.register}
            buttonType="submit"
          />
        </AuthPageFormSubmitButtonWrapper>
      </AuthPageForm>
      <AuthPageSpanText>{language.alreadyHaveAccount} <AuthPageLink to="/authentication/login">{language.login}</AuthPageLink></AuthPageSpanText>
    </AuthPageContentWrapper>
  );
};
