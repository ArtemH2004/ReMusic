import { getLanguage } from "@/common/helpers/getLanguage";
import {
  clampText,
  flexCenter,
  headerNavigationHoverActive,
  resetLink,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled("nav")``;

const NavigationList = styled("ul")`
  ${flexCenter}
  column-gap: 7px;
  background-color: ${colors.blackCover};
  border-radius: ${borders.searchBorderRadius};
  padding: 3px;

  @media ${device.mobileL} {
    column-gap: 5px;
  }
`;

export const NavigationItem = styled("li")``;

export const NavigationLink = styled("a")`
  ${resetLink}

  ${flexCenter}
  padding: 10px 15px;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.whiteTotal};
  border-radius: ${borders.searchBorderRadius};
  ${headerNavigationHoverActive}

  &.active {
    background-color: ${colors.whiteActive};
    box-shadow: ${shadows.defaultShadow};
  }

  @media ${device.mobile} {
    border-radius: ${borders.mediumBorderRadius};
  }

  @media ${device.mobileL} {
    padding: 5px 10px;
    font-weight: ${fonts.weights.semiBold};
  }

  @media ${device.mobileM} {
    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  }
`;

export const HeaderLibrary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const language = getLanguage();

  return (
    <Navigation>
      <NavigationList>
        <NavigationItem>
          <NavigationLink
            className={
              (location.pathname === "/library" &&
                location.search === "?foo=songs") ||
              (location.pathname === "/library" && location.search === "")
                ? "active"
                : ""
            }
            onClick={() => navigate("/library?foo=songs")}
          >
            {language.songs}
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            className={
              location.pathname === "/library" &&
              location.search === "?foo=artists"
                ? "active"
                : ""
            }
            onClick={() => navigate("/library?foo=artists")}
          >
            {language.artists}
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            className={
              location.pathname === "/library" &&
              location.search === "?foo=albums"
                ? "active"
                : ""
            }
            onClick={() => navigate("/library?foo=albums")}
          >
            {language.albums}
          </NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink
            className={
              location.pathname === "/library" &&
              location.search === "?foo=reviews"
                ? "active"
                : ""
            }
            onClick={() => navigate("/library?foo=reviews")}
          >
            {language.reviews}
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </Navigation>
  );
};
