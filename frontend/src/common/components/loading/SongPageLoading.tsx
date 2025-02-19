import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
  SongPageContentWrapper,
  SongPageInnerWrapper,
  SongPageSection,
  SongPageSongsWrapper,
  SongPageButtonWrapper,
  SongPageInfoWrapper,
  SongPageInfoButtonsWrapper,
  SongPageRaitingWrapper,
  SongPageContentSection,
  SongPageHeader,
  SongPageListTitle,
} from "@/modules/user/song/styles";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { Review } from "@/common/components/review/Review";

import { getLanguage } from "@/common/helpers/getLanguage";
import { SquareLoading, TextLoading } from "@/common/components/loading/styles";
import { RaitingLoading } from "@/common/components/loading/RaitingLoading";
import { ImgCoverLoading } from "@/common/components/loading/ImgCoverLoading";
import { ReviewLoading } from "@/common/components/loading/ReviewLoading";

export const SongPageLoading = () => {
  const defaultSongImg = "/public/images/default-song.svg";
  const accentColor = getImgAccentColor(defaultSongImg);
  const language = getLanguage();
  scrollToTop();

  return (
    <>
      <SongPageSection $accentColor={accentColor}>
        <SongPageContentWrapper>
          <ImgCoverLoading img={defaultSongImg} />

          <SongPageInnerWrapper>
            <TextLoading $height={18} $width="15%" />
            <TextLoading $height={75} $width="75%" />
            <TextLoading $height={18} $width="25%" />
            <TextLoading $height={18} $width="35%" />
          </SongPageInnerWrapper>
        </SongPageContentWrapper>

        <SongPageSongsWrapper>
          <SongPageInfoWrapper>
            <SongPageInfoButtonsWrapper>
              <SongPageButtonWrapper $accentColor={accentColor}>
                <ButtonWithIcon
                  size={60}
                  icon={"player/play-white"}
                  title={language.play}
                />
              </SongPageButtonWrapper>
              <SquareLoading $size={60} />
              <SquareLoading $size={60} />
            </SongPageInfoButtonsWrapper>

            <SongPageRaitingWrapper>
              <RaitingLoading />
            </SongPageRaitingWrapper>
          </SongPageInfoWrapper>

          <SongPageContentSection>
            <SongPageHeader>
              <SongPageListTitle>{language.topReviews}</SongPageListTitle>
              <ButtonSeeAll />
            </SongPageHeader>

            <ReviewLoading isAccentColor={true} />
          </SongPageContentSection>
        </SongPageSongsWrapper>
      </SongPageSection>
    </>
  );
};
