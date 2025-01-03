import styled from "styled-components";
import { Section } from "@/modules/user/PageWrapper";
import { HomePageHeader, HomePageTitle } from "@/modules/user/home/styles";
import { clampText, flexCenter } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";

export const LibraryPageSection = styled(Section)`
  padding-top: 105px;
`;

export const LibraryPageHeader = styled(HomePageHeader)``;

export const LibraryPageTitle = styled(HomePageTitle)``;

export const LibraryPageCount = styled("span")`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.grayPlaceholder};
`;

export const LibraryPageAlbumsList = styled("ul")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const LibraryPageReviewsList = styled("ul")`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  row-gap: 30px;
`;

export const LibraryPageSongsList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${borders.smallBorderRadius};
  background-color: ${colors.blackCover};
`;
