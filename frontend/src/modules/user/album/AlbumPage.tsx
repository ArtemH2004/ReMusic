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
import { memo, useEffect, useState } from "react";
import { Modal } from "@/common/components/modal/Modal";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useGetAlbumByIdQuery } from "@/store/reducers/album/albumApi";
import { useParams } from "react-router-dom";
import { getImgByName } from "@/common/helpers/getImgByName";
import { AlbumPageLoading } from "@/common/components/loading/AlbumPageLoading";
import { getYearFromDate } from "@/common/helpers/getYearFromDate";
import { changeTitle } from "@/common/helpers/changeTitle";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  useDeleteFavoriteAlbumMutation,
  usePostFavoriteAlbumMutation,
} from "@/store/reducers/favorite/favoriteAlbumApi";
import { useGetAllAlbumReviewsByIdQuery } from "@/store/reducers/review/reviewApi";
import { useDispatch } from "react-redux";
import { songActions } from "@/store/reducers/song/songSlice";

const defaultAlbumImg = "/public/images/default-album.svg";

export const AlbumPage = memo(() => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);
  const { id } = useParams();
  const { authorizedUser } = useAppSelector((state) => state.userReducer);
  const { data, isLoading: isAlbumLoading } = useGetAlbumByIdQuery(Number(id));
  const album = data?.album;
  const songs = data?.songs;

  const { data: reviews, isLoading: isReviewLoading } =
    useGetAllAlbumReviewsByIdQuery(Number(id));

  const img =
    album?.photo !== null ? getImgByName(album?.photo || "") : defaultAlbumImg;
  const accentColor = getImgAccentColor(img);
  const year = getYearFromDate(album?.created_at);
  const dispatch = useDispatch();
  const { songPlayer, songSettings } = useAppSelector(
    (state) => state.songReducer
  );

  const [liked, setLiked] = useState(album?.liked);
  const [isSongPlay, setSongPlay] = useState(false);
  const [setFavorite] = usePostFavoriteAlbumMutation();
  const [deleteFavorite] = useDeleteFavoriteAlbumMutation();

  useEffect(() => {
    setLiked(album?.liked);
  }, [album?.liked]);

  const handleFavoriteClick = () => {
    if (!!album) {
      if (!liked) {
        setFavorite(album.id).then(() => setLiked(true));
      } else {
        deleteFavorite(album.id).then(() => setLiked(false));
      }
    }
  };

  const handlePlayClick = () => {
    if (
      songs?.find((song) => song.id === songPlayer.id) &&
      songSettings.isPlaying
    ) {
      dispatch(songActions.setPlaying(false));
    } else {
      if (!!songs) {
        dispatch(songActions.setSongPlayer(songs[0]));
        dispatch(songActions.setSongList(songs.map((song) => song.id)));
      }
      dispatch(songActions.setPlaying(true));
    }
  };

  const language = getLanguage();

  useEffect(() => {
    scrollToTop();
    changeTitle("album");
  }, []);

  useEffect(() => {
    isSongPlay &&
      !!songs &&
      dispatch(songActions.setSongList(songs.map((song) => song.id)));
  }, [isSongPlay]);

  return (
    <>
      {isModalReviewOpen && (
        <Modal
          title={language.writeReview}
          isOpen={isModalReviewOpen}
          setOpen={setModalReviewOpen}
          children={
            <ModalReview
              setOpen={setModalReviewOpen}
              user_id={authorizedUser.id}
              album_id={Number(id)}
              rating={album?.rating || 0}
            />
          }
        />
      )}
      {isAlbumLoading ? (
        <AlbumPageLoading />
      ) : (
        <AlbumPageSection $accentColor={accentColor}>
          <AlbumPageContentWrapper>
            <ImgCover
              img={img}
              title={album?.name || ""}
              artist={album?.artist_name || ""}
              year={year}
              isButtonsActive={false}
            />

            <AlbumPageInnerWrapper>
              <AlbumPageSubtitle>{language.album}</AlbumPageSubtitle>
              <AlbumPageTitle>{album?.name}</AlbumPageTitle>
              <AlbumPageSubtitleLink to={`/artist/${album?.artist_id}`}>
                {album?.artist_name}
              </AlbumPageSubtitleLink>
              <AlbumPageDescription>{`${songs?.length} ${language.songs} • 34 minutes`}</AlbumPageDescription>
            </AlbumPageInnerWrapper>
          </AlbumPageContentWrapper>

          <AlbumPageSongsWrapper>
            <AlbumPageInfoWrapper>
              <AlbumPageInfoButtonsWrapper>
                <AlbumPageButtonWrapper $accentColor={accentColor}>
                  <ButtonWithIcon
                    size={60}
                    icon={`player/${
                      songPlayer.album_id === Number(id) &&
                      songSettings.isPlaying
                        ? "pause"
                        : "play"
                    }-white`}
                    title={
                      songPlayer.album_id === Number(id) &&
                      songSettings.isPlaying
                        ? language.stop
                        : language.play
                    }
                    click={handlePlayClick}
                  />
                </AlbumPageButtonWrapper>
                <ButtonWithIcon
                  size={60}
                  icon={liked ? "player/delete" : "player/add"}
                  title={liked ? language.delete : language.add}
                  click={handleFavoriteClick}
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
              {songs?.map((song, index) => (
                <SongInAlbum
                  key={song.id}
                  index={index + 1}
                  song={song}
                  setSongPlay={setSongPlay}
                />
              ))}
            </AlbumPageList>

            {!!reviews && reviews.length !== 0 && (
              <AlbumPageContentSection>
                <AlbumPageHeader>
                  <AlbumPageListTitle>{language.newReviews}</AlbumPageListTitle>
                  <ButtonSeeAll linkTo={`/album/${id}/reviews`} />
                </AlbumPageHeader>

                  <Reviews
                    key={reviews[0].id}
                    isLoading={isReviewLoading}
                    album={album}
                    review={reviews[0]}
                    isAccentColor={true}
                  />
              </AlbumPageContentSection>
            )}
          </AlbumPageSongsWrapper>
        </AlbumPageSection>
      )}
    </>
  );
});
