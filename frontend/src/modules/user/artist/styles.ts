import styled from "styled-components";
import { borders, fonts, shadows } from "@/common/styles/styleConstants";
import {
  AlbumPageButtonWrapper,
  AlbumPageContentWrapper,
  AlbumPageDescription,
  AlbumPageInfoButtonsWrapper,
  AlbumPageInfoWrapper,
  AlbumPageInnerWrapper,
  AlbumPageRaitingWrapper,
  AlbumPageSection,
  AlbumPageSongsWrapper,
  AlbumPageSubtitle,
  AlbumPageTitle,
} from "@/modules/user/album/styles";
import {
  HomeNewList,
  HomeNewTitle,
  HomePageHeader,
  HomePageList,
} from "@/modules/user/home/styles";
import { Section } from "@/modules/user/PageWrapper";
import { clampText } from "@/common/styles/mixins";

export const ArtistPageSection = styled(AlbumPageSection)``;

export const ArtistPageContentWrapper = styled(AlbumPageContentWrapper)``;

export const ArtistPageInnerWrapper = styled(AlbumPageInnerWrapper)``;

export const ArtistPageTitle = styled(AlbumPageTitle)``;

export const ArtistPageSubtitle = styled(AlbumPageSubtitle)``;

export const ArtistPageDescription = styled(AlbumPageDescription)``;

export const ArtistPageImg = styled("img")`
  max-width: 300px;
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  user-select: none;
  box-shadow: ${shadows.defaultShadow};
  border-radius: ${borders.smallBorderRadius};
`;

export const ArtistPageSongsWrapper = styled(AlbumPageSongsWrapper)``;

export const ArtistPageInfoWrapper = styled(AlbumPageInfoWrapper)`
  border-bottom: ${borders.grayBorder};
`;

export const ArtistPageInfoButtonsWrapper = styled(
  AlbumPageInfoButtonsWrapper
)``;

export const ArtistPageRaitingWrapper = styled(AlbumPageRaitingWrapper)``;

export const ArtistPageButtonWrapper = styled(AlbumPageButtonWrapper)``;

export const ArtistPageContentSection = styled(Section)``;

export const ArtistPageHeader = styled(HomePageHeader)``;

export const ArtistPageListTitle = styled(HomeNewTitle)`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
`;

export const ArtistPageList = styled(HomeNewList)``;

export const ArtistPageAlbumList = styled(HomePageList)``;
