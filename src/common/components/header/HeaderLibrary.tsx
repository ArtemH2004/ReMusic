import {
  clampText,
  flexCenter,
  headerNavigationHoverActive,
  resetLink,
} from "@/common/styles/mixins";
import { borders, colors, fonts, shadows } from "@/common/styles/styleConstants";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled("nav")``;

const NavigationList = styled("ul")`
  ${flexCenter}
  column-gap: 12px;
`;

export const NavigationItem = styled("li")``;

export const NavigationLink = styled("a")`
  ${resetLink}

  ${flexCenter}
  padding: 15px 20px;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.whiteTotal};
  border-radius: ${borders.smallBorderRadius};
  ${headerNavigationHoverActive}

  &.active {
    background-color: ${colors.whiteActive};
    box-shadow: ${shadows.defaultShadow};
  }
`;

export const HeaderLibrary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Navigation>
      <NavigationList>
        <NavigationItem>
          <NavigationLink
            className={
              location.pathname === "/library" &&
              location.search === "?foo=songs" ||
              location.pathname === "/library" &&
              location.search === ""
                ? "active"
                : ""
            }
            onClick={() => navigate("/library?foo=songs")}
          >
            Songs
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
            Artists
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
            Albums
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
            Reviews
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </Navigation>
  );
};
