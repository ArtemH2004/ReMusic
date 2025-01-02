import styled from "styled-components";
import { borders, shadows } from "@/common/styles/styleConstants";
import {
  AlbumPageButtonWrapper,
  AlbumPageContentWrapper,
  AlbumPageDescription,
  AlbumPageInnerWrapper,
  AlbumPageSection,
  AlbumPageSongsWrapper,
  AlbumPageSubtitle,
  AlbumPageTitle,
} from "@/modules/user/album/styles";
import { HomeNewList, HomeNewTitle, HomePageHeader, HomePageList } from "@/modules/user/home/styles";
import { Section } from "@/modules/user/PageWrapper";

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

export const ArtistPageButtonWrapper = styled(AlbumPageButtonWrapper)``;

export const ArtistPageContentSection = styled(Section)`
  &:not(:last-child) {
    border-top: ${borders.grayBorder}
  }
`;

export const ArtistPageHeader = styled(HomePageHeader)``;

export const ArtistPageListTitle = styled(HomeNewTitle)``;

export const ArtistPageList = styled(HomeNewList)``;

export const ArtistPageAlbumList = styled(HomePageList)``;