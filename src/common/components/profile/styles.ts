import {
  clampText,
  flexCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ProfileDropdownWrapper = styled("div")`
  position: relative;
  ${flexCenter}
`;

export const ProfileDropdownButton = styled("button")<{ $isActive: boolean }>`
  ${resetButton}
  width: 200px;
  height: 40px;
  padding: 3px;
  border-radius: ${borders.mediumBorderRadius};
  background-color: ${(props) =>
    props.$isActive ? colors.blackTotal : colors.blackPlaylist};
  box-shadow: ${(props) => (props.$isActive ? shadows.defaultShadow : "none")};
  transition: ${transitions.fastTransition};
  border-bottom-left-radius: ${(props) =>
    props.$isActive ? "0px" : borders.mediumBorderRadius};
  border-bottom-right-radius: ${(props) =>
    props.$isActive ? "0px" : borders.mediumBorderRadius};

    @media ${device.mobileM} {
      width: 175px;
    }
`;

export const ProfileWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export const ProfileImg = styled("img")`
  ${square(34)}
  border-radius: ${borders.circleBorderRadius};
  object-fit: cover;
  object-position: center;
`;

export const ProfileName = styled("span")`
  color: ${colors.whiteTotal};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  font-weight: ${fonts.weights.bold};
`;

export const ProfileSvgWrapper = styled("div")<{ $isActive: boolean }>`
  ${square(34)}
  ${flexCenter}
  transform: ${(props) => !!props.$isActive && 'rotate(-180deg)'};
  transition: ${transitions.fastTransition};
`;

export const ProfileSvg = styled(ProfileImg)`
  ${square(16)}
`;

export const ProfileDropdownList = styled("ul")`
  position: absolute;
  top: 40px;
  left: 50%;
  z-index: 10;
  translate: -50%;
  background-color: ${colors.blackTotal};
  border-bottom-left-radius: ${borders.smallBorderRadius};
  border-bottom-right-radius: ${borders.smallBorderRadius};
  box-shadow: ${shadows.defaultShadow};
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ProfileDropdownItem = styled("li")`
  ${flexCenter}
  width: 100%;
  height: 40px;

  &:last-child {
    border-top: ${borders.grayBorder};
  }
`;

export const ProfileDropdownLink = styled("a")<{ $isRed?: boolean }>`
  ${resetButton}
  width: 100%;
  height: 100%;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: ${(props) => (!!props.$isRed ? colors.red : colors.whiteTotal)};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  border-radius: ${borders.smallBorderRadius};
  ${hoverActive}
`;

export const ProfileDropdownGrayLink = styled("span")`
  color: ${colors.grayText};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
`;
