import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
  AlbumPageContentWrapper,
  AlbumPageInnerWrapper,
  AlbumPageSection,
  AlbumPageSongsWrapper,
  AlbumPageButtonWrapper,
  AlbumPageList,
  AlbumPageInfoWrapper,
  AlbumPageInfoButtonsWrapper,
  AlbumPageRaitingWrapper,
  AlbumPageContentSection,
  AlbumPageHeader,
  AlbumPageListTitle,
} from "@/modules/user/album/styles";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { getLanguage } from "@/common/helpers/getLanguage";
import { SongInAlbumLoading } from "@/common/components/loading/SongInAlbumLoading";
import { SquareLoading, TextLoading } from "@/common/components/loading/styles";
import { ImgCoverLoading } from "@/common/components/loading/ImgCoverLoading";
import { RaitingLoading } from "@/common/components/loading/RaitingLoading";
import { ReviewLoading } from "@/common/components/loading/ReviewLoading";
import styled from "styled-components";

const Wrapper = styled(AlbumPageInnerWrapper)`
  row-gap: 20px;
`;

export const AlbumPageLoading = () => {
  const defaultAlbumImg = "/public/images/default-album.svg";
  const accentColor = getImgAccentColor(defaultAlbumImg);
  const language = getLanguage();

  scrollToTop();

  return (
    <>
      <AlbumPageSection $accentColor={accentColor}>
        <AlbumPageContentWrapper>
          <ImgCoverLoading img={defaultAlbumImg} />

          <Wrapper>
            <TextLoading $height={18} $width="15%" />
            <TextLoading $height={75} $width="75%" />
            <TextLoading $height={18} $width="25%" />
            <TextLoading $height={18} $width="35%" />
          </Wrapper>
        </AlbumPageContentWrapper>

        <AlbumPageSongsWrapper>
          <AlbumPageInfoWrapper>
            <AlbumPageInfoButtonsWrapper>
              <AlbumPageButtonWrapper $accentColor={accentColor}>
                <ButtonWithIcon
                  size={60}
                  icon={"player/play-white"}
                  title={language.play}
                />
              </AlbumPageButtonWrapper>
              <SquareLoading $size={60} />
              <SquareLoading $size={60} />
            </AlbumPageInfoButtonsWrapper>

            <AlbumPageRaitingWrapper>
              <RaitingLoading />
            </AlbumPageRaitingWrapper>
          </AlbumPageInfoWrapper>

          <AlbumPageList>
            <SongInAlbumLoading />
            <SongInAlbumLoading />
            <SongInAlbumLoading />
            <SongInAlbumLoading />
            <SongInAlbumLoading />
          </AlbumPageList>

          <AlbumPageContentSection>
            <AlbumPageHeader>
              <AlbumPageListTitle>{language.newReviews}</AlbumPageListTitle>
              <ButtonSeeAll />
            </AlbumPageHeader>

            <ReviewLoading isAccentColor={true} />
          </AlbumPageContentSection>
        </AlbumPageSongsWrapper>
      </AlbumPageSection>
    </>
  );
};
