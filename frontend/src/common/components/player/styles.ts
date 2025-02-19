import {
  absCenter,
  clampText,
  clampWidth,
  flexCenter,
  linkHoverActive,
  resetLink,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const PlayerSection = styled("section")`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: 80px;
  padding-inline: 25px;
  color: ${colors.whiteTotal};
  background-color: ${colors.blackPlayer};
  box-shadow: ${shadows.defaultShadow};
  ${flexCenter}

  @media ${device.mobile} {
    padding-inline: 15px;
    height: 70px;
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    padding-inline: 10x;
    height: 60px;
    column-gap: 5px;
  }
`;

export const PlayerContentWrapper = styled("div")`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
`;

export const PlayerInfoWrapper = styled("div")`
  ${flexCenter}
  column-gap: 20px;

  @media ${device.mobile} {
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    column-gap: 10px;
  }
`;

export const PlayerInfoColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const PlayerInfoTitle = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
`;

export const PlayerInfoArtistLink = styled("a")`
  ${resetLink}

  width: fit-content;
  color: ${colors.grayText};
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};

  ${linkHoverActive}
`;

export const PlayerControlWrapper = styled("div")`
  ${absCenter}
  z-index: 1;

  ${flexCenter}
  flex-direction: column;
`;

export const PlayerControlButtonsWrapper = styled("div")`
  ${flexCenter}
  column-gap: 15px;

  @media ${device.mobile} {
    column-gap: 10px;
  }

  @media ${device.mobileM} {
    column-gap: 7px;
  }
`;

export const PlayerControlProgressWrapper = styled("div")`
  ${flexCenter}
  column-gap: 8px;
`;

export const PlayerControlProgress = styled("div")`
  position: relative;
  ${clampWidth(250, 500)}
  height: 5px;
  border-radius: ${borders.smallBorderRadius};
  background-color: ${colors.grayPlaceholder};

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 45%;
    border-radius: inherit;
    background-color: ${colors.whiteTotal};
  }
`;

export const PlayerControlProgressTime = styled("span")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
`;

export const PlayerAdaptiveDisplayNoneWrapper = styled("div")`
  ${flexCenter}

  @media ${device.mobile} {
    display: none;
  }
`;

export const PlayerAdaptiveDisplayBlockWrapper = styled("div")`
  ${flexCenter}

  @media ${device.mobileAbove} {
    display: none;
  }
`;

export const PlayerInfoSongImg = styled("img")`
  ${square(40)}
  border-radius: ${borders.smallBorderRadius};
  object-fit: cover;
  object-position: center;
`;
