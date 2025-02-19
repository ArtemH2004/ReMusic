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

export const Login = () => {
  const language = getLanguage();

  return (
        <AuthPageContentWrapper>
          <AuthPageTitle>{language.login}</AuthPageTitle>
          <AuthPageForm>
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

            <AuthPageFormSubmitButtonWrapper>
              <BlackWhiteButton
                color="black"
                title={language.login}
                buttonType="submit"
              />
            </AuthPageFormSubmitButtonWrapper>
          </AuthPageForm>
          <AuthPageSpanText>{language.dontHaveAccount} <AuthPageLink to="/authentication/register">{language.register}</AuthPageLink></AuthPageSpanText>
        </AuthPageContentWrapper>
  )
}
