import { Link } from "react-router-dom";
import styled from "styled-components";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { flexCenter, opacityHoverActive } from "@/common/styles/mixins";

const logo = "public/images/icons/logo.svg";

const LinkLogo = styled(Link)`
  ${flexCenter}
  width: 137px;
  height: 36px;

  ${opacityHoverActive}
`;

const Icon = styled("img")`
  width: 100%;
  height: 100%;
`;

export const Logo = () => {
  return (
    <LinkLogo to="/home" onClick={scrollToTop}>
      <VisuallyHidden>ReMusic Logo</VisuallyHidden>
      <Icon src={logo} alt="ReMusic logo" />
    </LinkLogo>
  );
};
