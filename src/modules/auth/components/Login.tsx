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
  return (
        <AuthPageContentWrapper>
          <AuthPageTitle>Login</AuthPageTitle>
          <AuthPageForm>
            <DefaultInput
              label="Email"
              type="text"
              placeholder="re@remusic.com"
              isRequired={true}
            />
            <DefaultInput
              label="Password"
              type="password"
              placeholder="••••••"
              isRequired={true}
            />

            <AuthPageFormSubmitButtonWrapper>
              <BlackWhiteButton
                color="black"
                title="Login"
                buttonType="submit"
              />
            </AuthPageFormSubmitButtonWrapper>
          </AuthPageForm>
          <AuthPageSpanText>Don't have an account? <AuthPageLink to="/authentication/register">Register</AuthPageLink></AuthPageSpanText>
        </AuthPageContentWrapper>
  )
}
