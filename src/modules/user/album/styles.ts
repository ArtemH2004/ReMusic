import styled from "styled-components";
import { Section } from "@/modules/user/PageWrapper";
import {
  clampText,
  clampWidth,
  flexCenter,
  linearGradient,
  linkHoverActive,
  resetLink,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";

export const AlbumPageSection = styled(Section)<{ $accentColor: string }>`
  padding: 80px 0px 0px;
  ${(props) => linearGradient(props.$accentColor, colors.blackAccent)}
`;

export const AlbumPageContentWrapper = styled("div")`
  display: flex;
  align-items: center;
  column-gap: 30px;
  padding-inline: 40px;
`;

export const AlbumPageInnerWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const AlbumPageTitle = styled("h1")`
  ${clampText(fonts.sizes.extraTitleMobile, fonts.sizes.extraTitle)}
  ${clampWidth(300, 750)}
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

export const AlbumPageSubtitleLink = styled("a")`
  ${resetLink}
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
  width: fit-content;
  ${linkHoverActive}
`;

export const AlbumPageDescription = styled(AlbumPageSubtitle)`
  color: ${colors.grayText};
  text-transform: none;
`;

export const AlbumPageSongsWrapper = styled("div")`
  width: 100%;
  background-color: ${colors.blackPlaylist};
`;

export const AlbumPageButtonWrapper = styled("div")<{$accentColor: string;}>`
  ${square(60)}
  box-shadow: ${shadows.defaultShadow};
  background-color: ${(props) => props.$accentColor};
  border-radius: ${borders.circleBorderRadius};
  ${flexCenter}
  margin-block: 25px;
`;

export const AlbumPageList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: ${borders.grayBorder};
  `;
