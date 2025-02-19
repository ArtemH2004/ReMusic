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
import { useState } from "react";
import { Modal } from "@/common/components/modal/Modal";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useGetSongByIdQuery } from "@/store/reducers/song/songApi";
import { useParams } from "react-router-dom";
import { getImgByName } from "@/common/helpers/getImgByName";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { getYearFromDate } from "@/common/helpers/getYearFromDate";
import { SongPageLoading } from "@/common/components/loading/SongPageLoading";

const defaultSongImg = "/public/images/default-song.svg";

export const SongPage = () => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);
  const { id } = useParams();
  const { data: song, isLoading } = useGetSongByIdQuery(Number(id));
  const { data: artist } = useGetUserByIdQuery(song?.artist_id || 0);
  const year = getYearFromDate(song?.created_at);

  const img = song?.photo !== "" ? getImgByName(song?.photo || "") : defaultSongImg;
  const accentColor = getImgAccentColor(img);
  const language = getLanguage();
  scrollToTop();

  return (
    <>
      {isModalReviewOpen && (
        <Modal
          title={language.writeReview}
          isOpen={isModalReviewOpen}
          setOpen={setModalReviewOpen}
          children={<ModalReview />}
        />
      )}
      {isLoading ? (
        <SongPageLoading />
      ) : (
        <SongPageSection $accentColor={accentColor}>
          <SongPageContentWrapper>
            <ImgCover
              img={img}
              title={song?.name || ""}
              artist={artist?.username || ""}
              year={year}
              isButtonsActive={false}
            />

            <SongPageInnerWrapper>
              <SongPageSubtitle>{language.song}</SongPageSubtitle>
              <SongPageTitle>{song?.name}</SongPageTitle>
              <SongPageSubtitleLink to={`/artist/${artist?.id}`}>{artist?.username}</SongPageSubtitleLink>
              <SongPageDescription>2 minutes • 12 seconds</SongPageDescription>
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
                <ButtonWithIcon
                  size={60}
                  icon={"player/add"}
                  title={language.add}
                />
                <ButtonWithIcon
                  size={60}
                  icon={"player/review"}
                  title={language.writeReview}
                  click={() => setModalReviewOpen(true)}
                />
              </SongPageInfoButtonsWrapper>

              <SongPageRaitingWrapper>
                <ReviewRaiting value={30} />
              </SongPageRaitingWrapper>
            </SongPageInfoWrapper>

            <SongPageContentSection>
              <SongPageHeader>
                <SongPageListTitle>{language.topReviews}</SongPageListTitle>
                <ButtonSeeAll />
              </SongPageHeader>

              <Review isAccentColor={true} />
            </SongPageContentSection>
          </SongPageSongsWrapper>
        </SongPageSection>
      )}
    </>
  );
};
