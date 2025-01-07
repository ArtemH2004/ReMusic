import {
  clampText,
  clampWidth,
  flexCenter,
  linkHoverActive,
  resetLink,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthPageWrapper = styled("div")`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;
  padding-block: 50px;
  ${flexCenter}
  background-color: ${colors.blackAccent};
`;

export const AuthPageSection = styled("section")`
  ${clampWidth(300, 750)}
  padding: 50px;
  color: ${colors.whiteTotal};
  background-color: ${colors.blackCover};
  box-shadow: ${shadows.defaultShadow};
  border-radius: ${borders.defaultBorderRadius};

  ${flexCenter}
  flex-direction: column;
  row-gap: 25px;
`;

export const AuthPageLogoWrapper = styled("div")`
  transform: scale(1.2);
  pointer-events: none;
`;

export const AuthPageContentWrapper = styled("div")`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  row-gap: 20px;
`;

export const AuthPageTitle = styled("h2")`
  text-align: center;
  color: ${colors.whiteAccent};
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)};
`;

export const AuthPageForm = styled("form")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const AuthPageFormSubmitButtonWrapper = styled("div")`
  ${flexCenter}
  width: 100%;
  padding-top: 10px;
`;

export const AuthPageSpanText = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
  text-align: center;
`;

export const AuthPageLink = styled(Link)`
  ${resetLink}
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  color: ${colors.whiteTotal};
  ${linkHoverActive}
`;
