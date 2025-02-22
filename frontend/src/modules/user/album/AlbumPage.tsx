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
import { Reviews } from "@/common/components/review/Reviews";
import { useEffect, useState } from "react";
import { Modal } from "@/common/components/modal/Modal";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useGetAlbumByIdQuery } from "@/store/reducers/album/albumApi";
import { useParams } from "react-router-dom";
import { getImgByName } from "@/common/helpers/getImgByName";
import { AlbumPageLoading } from "@/common/components/loading/AlbumPageLoading";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { getYearFromDate } from "@/common/helpers/getYearFromDate";
import { useGetAllSongsQuery } from "@/store/reducers/song/songApi";
import { changeTitle } from "@/common/helpers/changeTitle";
import { useGetAllReviewsQuery } from "@/store/reducers/review/reviewApi";
import { useAppSelector } from "@/common/hooks/useAppSelector";

const defaultAlbumImg = "/public/images/default-album.svg";

export const AlbumPage = () => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);
  const { id } = useParams();
  const {authorizedUser} = useAppSelector((state) => state.userReducer);
  const { data: album, isLoading: isAlbumLoading } = useGetAlbumByIdQuery(Number(id));
  const { data: song, isLoading: isSongLoading } = useGetAllSongsQuery();
  const { data: artist } = useGetUserByIdQuery(album?.artist_id || 0);
  const { data: review, isLoading: isReviewLoading } = useGetAllReviewsQuery();
  const reviewsList = review?.filter((review) => !!review.album_id && review.album_id === Number(id)) || [];
  const img = !!album?.photo ? getImgByName(album.photo) : defaultAlbumImg;
  const accentColor = getImgAccentColor(img);
  const year = getYearFromDate(album?.created_at);
  const songsList = song?.filter((song) => song.album_id === Number(id)) || [];
  const isLoading = isAlbumLoading && isSongLoading && isReviewLoading;

  const language = getLanguage();

  useEffect(() => {
    scrollToTop();
    changeTitle("album");
  }, []);

  return (
    <>
      {isModalReviewOpen && (
        <Modal
          title={language.writeReview}
          isOpen={isModalReviewOpen}
          setOpen={setModalReviewOpen}
          children={<ModalReview setOpen={setModalReviewOpen}  user_id={authorizedUser.id} album_id={Number(id)} rating={album?.rating || 0} />}
        />
      )}
      {isLoading ? (
        <AlbumPageLoading />
      ) : (
        <AlbumPageSection $accentColor={accentColor}>
          <AlbumPageContentWrapper>
            <ImgCover
              img={img}
              title={album?.name || ""}
              artist={artist?.username || ""}
              year={year}
              isButtonsActive={false}
            />

            <AlbumPageInnerWrapper>
              <AlbumPageSubtitle>{language.album}</AlbumPageSubtitle>
              <AlbumPageTitle>{album?.name}</AlbumPageTitle>
              <AlbumPageSubtitleLink to={`/artist/${artist?.id}`}>
                {artist?.username}
              </AlbumPageSubtitleLink>
              <AlbumPageDescription>{`${songsList.length} ${language.songs} • 34 minutes`}</AlbumPageDescription>
            </AlbumPageInnerWrapper>
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
              </AlbumPageInfoButtonsWrapper>

              <AlbumPageRaitingWrapper>
                <ReviewRaiting value={album?.rating || 0} />
              </AlbumPageRaitingWrapper>
            </AlbumPageInfoWrapper>

            <AlbumPageList>
              {songsList?.map((song, index) => (
                <SongInAlbum key={song.id} index={index + 1} song={song} />
              ))}
            </AlbumPageList>

            {reviewsList.length !== 0 &&
              <AlbumPageContentSection>
                <AlbumPageHeader>
                  <AlbumPageListTitle>{language.newReviews}</AlbumPageListTitle>
                  <ButtonSeeAll />
                </AlbumPageHeader>

                {reviewsList.map((review) => (
                  <Reviews
                    key={review.id}
                    review={review}
                    isAccentColor={true}
                  />
                ))}
              </AlbumPageContentSection>
            }
          </AlbumPageSongsWrapper>
        </AlbumPageSection>
      )}
    </>
  );
};
