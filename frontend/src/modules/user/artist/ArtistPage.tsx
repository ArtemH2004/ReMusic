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
import { SongItem } from "@/common/components/song/SongItem";
import { AlbumItem } from "@/common/components/album/AlbumItem";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { Review } from "@/common/components/review/Review";
import { useState } from "react";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { Modal } from "@/common/components/modal/Modal";
import { getLanguage } from "@/common/helpers/getLanguage";

export const ArtistPage = () => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);
  const accentColor = getImgAccentColor(
    "https://upload.wikimedia.org/wikipedia/ru/thumb/8/80/Dragonborn.jpg/274px-Dragonborn.jpg"
  );
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
      <ArtistPageSection $accentColor={accentColor}>
        <ArtistPageContentWrapper>
          <ArtistPageImg
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/8/80/Dragonborn.jpg/274px-Dragonborn.jpg"
            alt="MACAN"
          />

          <ArtistPageInnerWrapper>
            <ArtistPageSubtitle>{language.artist}</ArtistPageSubtitle>
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
                  title={language.play}
                />
              </ArtistPageButtonWrapper>
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
            </ArtistPageInfoButtonsWrapper>

            <ArtistPageRaitingWrapper>
              <ReviewRaiting value={95} />
            </ArtistPageRaitingWrapper>
          </ArtistPageInfoWrapper>

          <ArtistPageContentSection>
            <ArtistPageListTitle>{language.songs}</ArtistPageListTitle>

            <ArtistPageList>
              {/* <SongItem song={}/>
              <SongItem song={}/>
              <SongItem song={}/>
              <SongItem song={}/>
              <SongItem song={}/>
              <SongItem song={}/>
              <SongItem song={}/>
              <SongItem song={}/>
              <SongItem song={}/>
              <SongItem song={}/> */}
            </ArtistPageList>
          </ArtistPageContentSection>

          <ArtistPageContentSection>
            <ArtistPageHeader>
              <ArtistPageListTitle>{language.albums}</ArtistPageListTitle>
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
              <ArtistPageListTitle>{language.reviews}</ArtistPageListTitle>
              <ButtonSeeAll />
            </ArtistPageHeader>

            <Review isAccentColor={true} />
          </ArtistPageContentSection>
        </ArtistPageSongsWrapper>
      </ArtistPageSection>
    </>
  );
};
