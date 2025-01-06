import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { scrollToTop } from "@/common/helpers/scrollToTop";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import {
  ArtistPageAlbumList,
  ArtistPageButtonWrapper,
  ArtistPageContentSection,
  ArtistPageContentWrapper,
  ArtistPageDescription,
  ArtistPageHeader,
  ArtistPageImg,
  ArtistPageInfoButtonsWrapper,
  ArtistPageInfoWrapper,
  ArtistPageInnerWrapper,
  ArtistPageList,
  ArtistPageListTitle,
  ArtistPageRaitingWrapper,
  ArtistPageSection,
  ArtistPageSongsWrapper,
  ArtistPageSubtitle,
  ArtistPageTitle,
} from "@/modules/user/artist/styles";
import { Song } from "@/common/components/song/Song";
import { AlbumItem } from "@/common/components/album/AlbumItem";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { Review } from "@/common/components/review/Review";
import { useState } from "react";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { Modal } from "@/common/components/modal/Modal";

export const ArtistPage = () => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(true);
  const accentColor = getImgAccentColor(
    "https://upload.wikimedia.org/wikipedia/ru/thumb/8/80/Dragonborn.jpg/274px-Dragonborn.jpg"
  );
  scrollToTop();

  return (
    <>
    {isModalReviewOpen && <Modal title="Add Review" isOpen={isModalReviewOpen} setOpen={setModalReviewOpen} children={<ModalReview />} />}
    <ArtistPageSection $accentColor={accentColor}>
      <ArtistPageContentWrapper>
        <ArtistPageImg
          src="https://upload.wikimedia.org/wikipedia/ru/thumb/8/80/Dragonborn.jpg/274px-Dragonborn.jpg"
          alt="MACAN"
        />

        <ArtistPageInnerWrapper>
          <ArtistPageSubtitle>Artist</ArtistPageSubtitle>
          <ArtistPageTitle>Big Baby Tape</ArtistPageTitle>
          <ArtistPageDescription>152 songs • 6 albums</ArtistPageDescription>
        </ArtistPageInnerWrapper>
      </ArtistPageContentWrapper>

      <ArtistPageSongsWrapper>
        <ArtistPageInfoWrapper>
          <ArtistPageInfoButtonsWrapper>
            <ArtistPageButtonWrapper $accentColor={accentColor}>
              <ButtonWithIcon
                size={60}
                icon={"player/play-white"}
                title="Воспроизвести"
              />
            </ArtistPageButtonWrapper>
            <ButtonWithIcon size={60} icon={"player/add"} title="Добавить" />
            <ButtonWithIcon size={60} icon={"player/review"} title="Review" click={() => setModalReviewOpen(true)} />
          </ArtistPageInfoButtonsWrapper>

          <ArtistPageRaitingWrapper>
            <ReviewRaiting value={95} />
          </ArtistPageRaitingWrapper>
        </ArtistPageInfoWrapper>

        <ArtistPageContentSection>
          <ArtistPageListTitle>Songs</ArtistPageListTitle>

          <ArtistPageList>
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
          </ArtistPageList>
        </ArtistPageContentSection>

        <ArtistPageContentSection>
          <ArtistPageHeader>
            <ArtistPageListTitle>Albums</ArtistPageListTitle>
            <ButtonSeeAll />
          </ArtistPageHeader>

          <ArtistPageAlbumList>
            <AlbumItem isAccentColor={true} />
            <AlbumItem isAccentColor={true} />
            <AlbumItem isAccentColor={true} />
            <AlbumItem isAccentColor={true} />
            <AlbumItem isAccentColor={true} />
          </ArtistPageAlbumList>
        </ArtistPageContentSection>

        <ArtistPageContentSection>
          <ArtistPageHeader>
            <ArtistPageListTitle>Reviews</ArtistPageListTitle>
            <ButtonSeeAll />
          </ArtistPageHeader>

          <Review isAccentColor={true} />
        </ArtistPageContentSection>
      </ArtistPageSongsWrapper>
    </ArtistPageSection>
    </>
  );
};
