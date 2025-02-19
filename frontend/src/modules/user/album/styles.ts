import styled from "styled-components";
import { Section } from "@/modules/user/PageWrapper";
import {
  clampText,
  flexCenter,
  linearGradient,
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
import { HomeNewTitle, HomePageHeader } from "@/modules/user/home/styles";
import { Link } from "react-router-dom";

export const AlbumPageSection = styled(Section)<{ $accentColor: string }>`
  padding: 80px 0px 0px;
  ${(props) => linearGradient(props.$accentColor, colors.blackAccent)}

  @media ${device.mobile} {
    padding-top: 70px;
  }

  @media ${device.mobileM} {
    padding-top: 60px;
  }
`;

export const AlbumPageContentWrapper = styled("div")`
  display: grid;
  grid-template-columns: 1fr 70%;
  align-items: center;
  column-gap: 30px;
  padding-inline: 40px;

  @media ${device.tablet} {
    column-gap: 25px;
  }
  
  @media ${device.mobile} {
    padding-inline: 30px;
    column-gap: 20px;
  }

  @media ${device.mobileL} {
    padding-inline: 20px;
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    padding-inline: 10px;
    column-gap: 10px;
  }
`;

export const AlbumPageInnerWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media ${device.tablet} {
    row-gap: 0px;
  }
`;

export const AlbumPageTitle = styled("h1")`
  ${clampText(fonts.sizes.extraTitleMobile, fonts.sizes.extraTitle)}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.2;
`;

export const AlbumPageSubtitle = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  text-transform: uppercase;
  color: ${colors.whiteTotal};
`;

export const AlbumPageSubtitleLink = styled(Link)`
  ${resetLink}
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
  width: fit-content;
  ${linkHoverActive}
`;

export const AlbumPageDescription = styled(AlbumPageSubtitle)`
  color: ${colors.grayText};
  text-transform: lowercase;
`;

export const AlbumPageSongsWrapper = styled("div")`
  width: 100%;
  background-color: ${colors.blackPlaylist};
`;

export const AlbumPageInfoWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  padding-inline: 40px;

  @media ${device.mobile} {
    padding-inline: 30px;
    column-gap: 20px;
  }

  @media ${device.mobileL} {
    padding-inline: 20px;
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    padding-inline: 10px;
    column-gap: 10px;
  }
`;

export const AlbumPageInfoButtonsWrapper = styled("div")`
  ${flexCenter}
  column-gap: 20px;
`;

export const AlbumPageButtonWrapper = styled("div")<{ $accentColor: string }>`
  ${square(60)}
  box-shadow: ${shadows.defaultShadow};
  background-color: ${(props) => props.$accentColor};
  border-radius: ${borders.circleBorderRadius};
  ${flexCenter}
  margin-block: 25px;
`;

export const AlbumPageRaitingWrapper = styled("div")`
  ${flexCenter}
  transform: scale(1.5);
  margin-right: 10px;
`;

export const AlbumPageList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-block: ${borders.grayBorder};
`;

export const AlbumPageContentSection = styled(Section)``;

export const AlbumPageHeader = styled(HomePageHeader)``;

export const AlbumPageListTitle = styled(HomeNewTitle)`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
`;
