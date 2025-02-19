import {
  clampText,
  flexCenter,
  opacityHoverActive,
  resetLink,
  square,
} from "@/common/styles/mixins";
import { colors, device, fonts } from "@/common/styles/styleConstants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavPanelWrapper = styled("div")`
  width: 100%;
  height: 100%;
  background-color: ${colors.blackTotal};

  // TODO IN FUTURE
  @media ${device.mobile} {
    display: none;
  }
`;

export const NavPanelContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
  height: fit-content;
  padding: 15px 30px;

  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavPanelMenu = styled("nav")`
  ${flexCenter}
  width: 100%;
`;

export const NavPanelList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const NavPanelItem = styled("li")``;

export const NavPanelLink = styled(NavLink)`
  ${resetLink}

  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 20px;
  height: 32px;

  ${clampText(fonts.sizes.main, fonts.sizes.mainMobile)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.grayText};

  &.active {
    color: ${colors.whiteTotal};
  }

  ${opacityHoverActive}
`;

export const NavPanelIcon = styled("img")`
  ${square(32)}
`;
