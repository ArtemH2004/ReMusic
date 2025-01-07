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
  return (
    <AuthPageContentWrapper>
      <AuthPageTitle>Register</AuthPageTitle>
      <AuthPageForm>
        <DefaultInput
          label="Username"
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
          label="Password"
          type="password"
          placeholder="••••••"
          isRequired={true}
        />
        <DefaultInput
          label="Password (repeat)"
          type="password"
          placeholder="••••••"
          isRequired={true}
        />

        <AuthPageFormSubmitButtonWrapper>
          <BlackWhiteButton
            color="black"
            title="Register"
            buttonType="submit"
          />
        </AuthPageFormSubmitButtonWrapper>
      </AuthPageForm>
      <AuthPageSpanText>Already have an account? <AuthPageLink to="/authentication/login">Login</AuthPageLink></AuthPageSpanText>
    </AuthPageContentWrapper>
  );
};
