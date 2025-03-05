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
import { Reviews } from "@/common/components/review/Reviews";
import { memo, useEffect, useState } from "react";
import { Modal } from "@/common/components/modal/Modal";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useGetSongByIdQuery } from "@/store/reducers/song/songApi";
import { useParams } from "react-router-dom";
import { getImgByName } from "@/common/helpers/getImgByName";
import { getYearFromDate } from "@/common/helpers/getYearFromDate";
import { SongPageLoading } from "@/common/components/loading/SongPageLoading";
import { changeTitle } from "@/common/helpers/changeTitle";
import { useGetAllSongReviewsByIdQuery } from "@/store/reducers/review/reviewApi";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  useDeleteFavoriteSongMutation,
  useGetFavoriteSongByIdAndUserIdQuery,
  usePostFavoriteSongMutation,
} from "@/store/reducers/favorite/favoriteSongApi";
import { useDispatch } from "react-redux";
import { songActions } from "@/store/reducers/song/songSlice";

const defaultSongImg = "/public/images/default-song.svg";

export const SongPage = memo(() => {
  const dispatch = useDispatch();
  const { songPlayer, songSettings } = useAppSelector(
    (state) => state.songReducer
  );
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);
  const { id } = useParams();
  const { authorizedUser } = useAppSelector((state) => state.userReducer);
  const { data: song, isLoading: isSongLoading } = useGetSongByIdQuery(
    Number(id)
  );
  const { data: reviews, isLoading: isReviewLoading } =
    useGetAllSongReviewsByIdQuery(Number(id));
  const year = getYearFromDate(song?.created_at);
  const isLoading = isSongLoading && isReviewLoading;
  const img =
    song?.photo !== null ? getImgByName(song?.photo || "") : defaultSongImg;
  const accentColor = getImgAccentColor(img);
  const language = getLanguage();
  const { data: isFavorite } = useGetFavoriteSongByIdAndUserIdQuery({
    user_id: authorizedUser.id,
    song_id: Number(id),
  });
  const [isLike, setLike] = useState(!!isFavorite?.id ? true : false);
  const [setFavorite] = usePostFavoriteSongMutation();
  const [deleteFavorite] = useDeleteFavoriteSongMutation();

  const handleFavoriteClick = () => {
    if (!isLike) {
      setLike(true);
      setFavorite({ user_id: authorizedUser.id, song_id: Number(id) });
    } else if (!!isFavorite && isLike) {
      setLike(false);
      deleteFavorite(isFavorite.id);
    }
  };

  useEffect(() => {
    !!isFavorite ? setLike(true) : setLike(false);
  }, [isFavorite]);

  useEffect(() => {
    scrollToTop();
    changeTitle("song");
  }, []);

  const handlePlayClick = () => {
    if (songPlayer.id === Number(id) && songSettings.isPlaying) {
      dispatch(songActions.setPlaying(false));
    } else {
      if (!!song) {
        dispatch(songActions.setSongPlayer(song));
        dispatch(songActions.setSongList([Number(id)]));
      }
      dispatch(songActions.setPlaying(true));
    }
  };

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
              song_id={Number(id)}
              rating={song?.rating || 0}
            />
          }
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
              artist={song?.artist_name || ""}
              year={year}
              isButtonsActive={false}
            />

            <SongPageInnerWrapper>
              <SongPageSubtitle>{language.song}</SongPageSubtitle>
              <SongPageTitle>{song?.name}</SongPageTitle>
              <SongPageSubtitleLink to={`/artist/${song?.artist_id}`}>
                {song?.artist_name}
              </SongPageSubtitleLink>
              <SongPageDescription>2 minutes • 12 seconds</SongPageDescription>
            </SongPageInnerWrapper>
          </SongPageContentWrapper>

          <SongPageSongsWrapper>
            <SongPageInfoWrapper>
              <SongPageInfoButtonsWrapper>
                <SongPageButtonWrapper $accentColor={accentColor}>
                  <ButtonWithIcon
                    size={60}
                    icon={`player/${songPlayer.id === Number(id) && songSettings.isPlaying ? "pause" : "play"}-white`}
                    title={songPlayer.id === Number(id) && songSettings.isPlaying ? language.stop : language.play}
                    click={handlePlayClick}
                  />
                </SongPageButtonWrapper>
                <ButtonWithIcon
                  size={60}
                  icon={isLike ? "player/delete" : "player/add"}
                  title={isLike ? language.delete : language.add}
                  click={handleFavoriteClick}
                />
                <ButtonWithIcon
                  size={60}
                  icon={"player/review"}
                  title={language.writeReview}
                  click={() => setModalReviewOpen(true)}
                />
              </SongPageInfoButtonsWrapper>

              <SongPageRaitingWrapper>
                <ReviewRaiting value={song?.rating || 0} />
              </SongPageRaitingWrapper>
            </SongPageInfoWrapper>

            {!!reviews && reviews.length !== 0 && (
              <SongPageContentSection>
                <SongPageHeader>
                  <SongPageListTitle>{language.newReviews}</SongPageListTitle>
                  <ButtonSeeAll />
                </SongPageHeader>

                {reviews.map((review) => (
                  <Reviews
                    key={review.id}
                    review={review}
                    isLoading={isReviewLoading}
                    song={song}
                    isAccentColor={true}
                  />
                ))}
              </SongPageContentSection>
            )}
          </SongPageSongsWrapper>
        </SongPageSection>
      )}
    </>
  );
});
