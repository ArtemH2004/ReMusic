import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ImgCover } from "@/common/styles/tags/img/ImgCover";
import {
  SongPageContentWrapper,
  SongPageDescription,
  SongPageInnerWrapper,
  SongPageSection,
  SongPageSongsWrapper,
  SongPageSubtitle,
  SongPageSubtitleLink,
  SongPageTitle,
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

export const SongPage = () => {
  const accentColor = getImgAccentColor(
    "https://aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg"
  );

  scrollToTop();

  return (
    <>
      <SongPageSection $accentColor={accentColor}>
        <SongPageContentWrapper>
          <ImgCover
            img="https://aimm.edu/hubfs/Blog%20Images/Top%2010%20Album%20Covers%20of%202017/Tyler%20the%20Creator-%20Flower%20boy.jpg"
            title="Flower Boy"
            artist="Tyler the Creator"
            year={2020}
            isButtonsActive={false}
          />

          <SongPageInnerWrapper>
            <SongPageSubtitle>Song</SongPageSubtitle>
            <SongPageTitle>Flower Boy</SongPageTitle>
            <SongPageSubtitleLink>Tyler the Creator</SongPageSubtitleLink>
            <SongPageDescription>2 minutes • 34 seconds</SongPageDescription>
          </SongPageInnerWrapper>
        </SongPageContentWrapper>

        <SongPageSongsWrapper>
          <SongPageInfoWrapper>
            <SongPageInfoButtonsWrapper>
              <SongPageButtonWrapper $accentColor={accentColor}>
                <ButtonWithIcon
                  size={60}
                  icon={"player/play-white"}
                  title="Воспроизвести"
                />
              </SongPageButtonWrapper>
              <ButtonWithIcon size={60} icon={"player/add"} title="Добавить" />
            </SongPageInfoButtonsWrapper>

            <SongPageRaitingWrapper>
              <ReviewRaiting value={30} />
            </SongPageRaitingWrapper>
          </SongPageInfoWrapper>

          <SongPageContentSection>
            <SongPageHeader>
              <SongPageListTitle>Top Reviews</SongPageListTitle>
              <ButtonSeeAll />
            </SongPageHeader>

            <Review isAccentColor={true} />
          </SongPageContentSection>
        </SongPageSongsWrapper>
      </SongPageSection>
    </>
  );
};
