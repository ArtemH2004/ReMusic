import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { SongInAlbum } from "@/common/components/song/SongInAlbum";
import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ImgCover } from "@/common/styles/tags/img/ImgCover";
import {
  AlbumPageContentWrapper,
  AlbumPageDescription,
  AlbumPageInnerWrapper,
  AlbumPageSection,
  AlbumPageSongsWrapper,
  AlbumPageSubtitle,
  AlbumPageSubtitleLink,
  AlbumPageTitle,
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
import { Review } from "@/common/components/review/Review";
import { useState } from "react";
import { Modal } from "@/common/components/modal/Modal";
import { ModalReview } from "@/common/components/modal/ModalReview";

export const AlbumPage = () => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);

  const accentColor = getImgAccentColor(
    "https://img-fotki.yandex.ru/get/765007/194398330.194/0_224238_718fa1c9_XL.jpg"
  );

  scrollToTop();

  return (
    <>
      {isModalReviewOpen && <Modal title="Add Review" isOpen={isModalReviewOpen} setOpen={setModalReviewOpen} children={<ModalReview />} />}
      <AlbumPageSection $accentColor={accentColor}>
        <AlbumPageContentWrapper>
          <ImgCover
            img="https://img-fotki.yandex.ru/get/765007/194398330.194/0_224238_718fa1c9_XL.jpg"
            title="Nevermind"
            artist="NIRVANA"
            year={2001}
            isButtonsActive={false}
          />

          <AlbumPageInnerWrapper>
            <AlbumPageSubtitle>Album</AlbumPageSubtitle>
            <AlbumPageTitle>Nevermind</AlbumPageTitle>
            <AlbumPageSubtitleLink>NIRVANA</AlbumPageSubtitleLink>
            <AlbumPageDescription>5 songs • 34 minutes</AlbumPageDescription>
          </AlbumPageInnerWrapper>
        </AlbumPageContentWrapper>

        <AlbumPageSongsWrapper>
          <AlbumPageInfoWrapper>
            <AlbumPageInfoButtonsWrapper>
              <AlbumPageButtonWrapper $accentColor={accentColor}>
                <ButtonWithIcon
                  size={60}
                  icon={"player/play-white"}
                  title="Воспроизвести"
                />
              </AlbumPageButtonWrapper>
              <ButtonWithIcon size={60} icon={"player/add"} title="Добавить" />
              <ButtonWithIcon
                size={60}
                icon={"player/review"}
                title="Review"
                click={() => setModalReviewOpen(true)}
              />
            </AlbumPageInfoButtonsWrapper>

            <AlbumPageRaitingWrapper>
              <ReviewRaiting value={82} />
            </AlbumPageRaitingWrapper>
          </AlbumPageInfoWrapper>

          <AlbumPageList>
            <SongInAlbum />
            <SongInAlbum />
            <SongInAlbum />
            <SongInAlbum />
          </AlbumPageList>

          <AlbumPageContentSection>
            <AlbumPageHeader>
              <AlbumPageListTitle>Top Reviews</AlbumPageListTitle>
              <ButtonSeeAll />
            </AlbumPageHeader>

            <Review isAccentColor={true} />
          </AlbumPageContentSection>
        </AlbumPageSongsWrapper>
      </AlbumPageSection>
    </>
  );
};
