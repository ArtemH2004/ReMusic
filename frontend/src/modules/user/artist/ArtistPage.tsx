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
import { memo, useState } from "react";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { Modal } from "@/common/components/modal/Modal";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { ArtistPageLoading } from "@/common/components/loading/ArtistPageLoading";
import { getImgByName } from "@/common/helpers/getImgByName";
import { useGetAllSongsQuery } from "@/store/reducers/song/songApi";
import { useGetAllAlbumsQuery } from "@/store/reducers/album/albumApi";

const defaultArtistImg = "/public/images/default-user.svg";

export const ArtistPage = memo(() => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);
  const { id } = useParams();
  const { data: artist, isLoading: isArtistLoading } = useGetUserByIdQuery(
    Number(id)
  );
  const { data: song, isLoading: isSongLoading } = useGetAllSongsQuery();
  const { data: album, isLoading: isAlbumLoading } = useGetAllAlbumsQuery();
  const songsList = song?.filter((song) => song.artist_id === Number(id)) || [];
  const albumsList =
    album?.filter((album) => album.artist_id === Number(id)) || [];
  const img = !!artist?.photo ? getImgByName(artist?.photo) : defaultArtistImg;
  const accentColor = getImgAccentColor(img);
  // TODO Review
  const isReviewLoading = true;
  const isLoading =
    isArtistLoading && isSongLoading && isAlbumLoading && isReviewLoading;
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
        <ArtistPageLoading />
      ) : (
        <ArtistPageSection $accentColor={accentColor}>
          <ArtistPageContentWrapper>
            <ArtistPageImg src={img} alt={artist?.username} />

            <ArtistPageInnerWrapper>
              <ArtistPageSubtitle>{language.artist}</ArtistPageSubtitle>
              <ArtistPageTitle>{artist?.username}</ArtistPageTitle>
              <ArtistPageDescription>
                {`${songsList.length} ${language.songs} • ${albumsList.length} ${language.albums}`}
              </ArtistPageDescription>
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

            {songsList.length !== 0 && (
              <ArtistPageContentSection>
                <ArtistPageListTitle>{language.songs}</ArtistPageListTitle>

                <ArtistPageList>
                  {songsList.map((song) => (
                    <SongItem key={song.id} song={song} />
                  ))}
                </ArtistPageList>
              </ArtistPageContentSection>
            )}

            {albumsList.length !== 0 && (
              <ArtistPageContentSection>
                <ArtistPageHeader>
                  <ArtistPageListTitle>{language.albums}</ArtistPageListTitle>
                  <ButtonSeeAll />
                </ArtistPageHeader>

                <ArtistPageAlbumList>
                  {albumsList.map((album) => (
                    <AlbumItem
                      key={album.id}
                      album={album}
                      isAccentColor={true}
                    />
                  ))}
                </ArtistPageAlbumList>
              </ArtistPageContentSection>
            )}

            <ArtistPageContentSection>
              <ArtistPageHeader>
                <ArtistPageListTitle>{language.reviews}</ArtistPageListTitle>
                <ButtonSeeAll />
              </ArtistPageHeader>

              <Review isAccentColor={true} />
            </ArtistPageContentSection>
          </ArtistPageSongsWrapper>
        </ArtistPageSection>
      )}
    </>
  );
});
