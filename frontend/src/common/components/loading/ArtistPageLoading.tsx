import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
  ArtistPageAlbumList,
  ArtistPageButtonWrapper,
  ArtistPageContentSection,
  ArtistPageContentWrapper,
  ArtistPageHeader,
  ArtistPageInfoButtonsWrapper,
  ArtistPageInfoWrapper,
  ArtistPageInnerWrapper,
  ArtistPageList,
  ArtistPageListTitle,
  ArtistPageRaitingWrapper,
  ArtistPageSection,
  ArtistPageSongsWrapper,
} from "@/modules/user/artist/styles";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { getLanguage } from "@/common/helpers/getLanguage";
import { SquareLoading, TextLoading } from "@/common/components/loading/styles";
import { ImgCoverLoading } from "@/common/components/loading/ImgCoverLoading";
import { RaitingLoading } from "@/common/components/loading/RaitingLoading";
import { SongItemLoading } from "@/common/components/loading/SongItemLoading";
import { AlbumItemLoading } from "@/common/components/loading/AlbumItemLoading";
import { ReviewLoading } from "@/common/components/loading/ReviewLoading";
import styled from "styled-components";

const Wrapper = styled(ArtistPageInnerWrapper)`
  row-gap: 20px;
`;

export const ArtistPageLoading = () => {
  const defaultArtistImg = "/public/images/default-user.svg";

  const accentColor = getImgAccentColor(defaultArtistImg);
  const language = getLanguage();

  scrollToTop();

  return (
    <>
      <ArtistPageSection $accentColor={accentColor}>
        <ArtistPageContentWrapper>
          <ImgCoverLoading img={defaultArtistImg} />

          <Wrapper>
            <TextLoading $height={18} $width="15%" />
            <TextLoading $height={75} $width="75%" />
            <TextLoading $height={18} $width="35%" />
          </Wrapper>
        </ArtistPageContentWrapper>

        <ArtistPageSongsWrapper>
          <ArtistPageInfoWrapper>
            <ArtistPageInfoButtonsWrapper>
              <ArtistPageButtonWrapper $accentColor={accentColor}>
                <ButtonWithIcon
                  size={60}
                  icon={"player/play-white"}
                  title={language.play}
                />
              </ArtistPageButtonWrapper>
              <SquareLoading $size={60} />
              <SquareLoading $size={60} />
            </ArtistPageInfoButtonsWrapper>

            <ArtistPageRaitingWrapper>
              <RaitingLoading />
            </ArtistPageRaitingWrapper>
          </ArtistPageInfoWrapper>

          <ArtistPageContentSection>
            <ArtistPageListTitle>{language.songs}</ArtistPageListTitle>

            <ArtistPageList>
              <SongItemLoading />
              <SongItemLoading />
              <SongItemLoading />
              <SongItemLoading />
              <SongItemLoading />
              <SongItemLoading />
              <SongItemLoading />
              <SongItemLoading />
              <SongItemLoading />
              <SongItemLoading />
            </ArtistPageList>
          </ArtistPageContentSection>

          <ArtistPageContentSection>
            <ArtistPageHeader>
              <ArtistPageListTitle>{language.albums}</ArtistPageListTitle>
              <ButtonSeeAll />
            </ArtistPageHeader>

            <ArtistPageAlbumList>
              <AlbumItemLoading isAccentColor={true} />
              <AlbumItemLoading isAccentColor={true} />
              <AlbumItemLoading isAccentColor={true} />
              <AlbumItemLoading isAccentColor={true} />
            </ArtistPageAlbumList>
          </ArtistPageContentSection>

          <ArtistPageContentSection>
            <ArtistPageHeader>
              <ArtistPageListTitle>{language.reviews}</ArtistPageListTitle>
              <ButtonSeeAll />
            </ArtistPageHeader>

            <ReviewLoading isAccentColor={true} />
          </ArtistPageContentSection>
        </ArtistPageSongsWrapper>
      </ArtistPageSection>
    </>
  );
};
