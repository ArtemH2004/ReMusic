import { Logo } from "@/common/components/Logo";
import {
  AuthPageLogoWrapper,
  AuthPageSection,
  AuthPageWrapper,
} from "@/modules/auth/styles";
import { Outlet } from "react-router-dom";

export const AuthPage = () => {
  return (
    <AuthPageWrapper>
      <AuthPageSection>
        <AuthPageLogoWrapper>
          <Logo />
        </AuthPageLogoWrapper>
        <Outlet />
      </AuthPageSection>
    </AuthPageWrapper>
  );
};
