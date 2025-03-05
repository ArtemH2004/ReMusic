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
import { Reviews } from "@/common/components/review/Reviews";
import { memo, useEffect, useState } from "react";
import { ModalReview } from "@/common/components/modal/ModalReview";
import { Modal } from "@/common/components/modal/Modal";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { ArtistPageLoading } from "@/common/components/loading/ArtistPageLoading";
import { getImgByName } from "@/common/helpers/getImgByName";
import { changeTitle } from "@/common/helpers/changeTitle";
import { useGetAllArtistReviewsByIdQuery } from "@/store/reducers/review/reviewApi";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  useDeleteFavoriteArtistMutation,
  useGetFavoriteArtistByIdAndUserIdQuery,
  usePostFavoriteArtistMutation,
} from "@/store/reducers/favorite/favoriteArtistApi";
import { useDispatch } from "react-redux";
import { songActions } from "@/store/reducers/song/songSlice";

const defaultArtistImg = "/public/images/default-user.svg";

export const ArtistPage = memo(() => {
  const [isModalReviewOpen, setModalReviewOpen] = useState(false);
  const { id } = useParams();
  const { authorizedUser } = useAppSelector((state) => state.userReducer);
  const { data, isLoading: isArtistLoading } = useGetUserByIdQuery(Number(id));
  const artist = data?.artist;
  const songs = data?.songs;
  const albums = data?.albums;
  const { data: reviews, isLoading: isReviewLoading } =
    useGetAllArtistReviewsByIdQuery(Number(id));
  const img =
    artist?.photo !== null
      ? getImgByName(artist?.photo || "")
      : defaultArtistImg;
  const accentColor = getImgAccentColor(img);
  const isLoading = isArtistLoading && isReviewLoading;
  const { data: isFavorite } = useGetFavoriteArtistByIdAndUserIdQuery({
    user_id: authorizedUser.id,
    artist_id: Number(id),
  });

  const dispatch = useDispatch();
  const { songPlayer, songSettings } = useAppSelector(
    (state) => state.songReducer
  );

  const [isLike, setLike] = useState(false);
  const [isSongPlay, setSongPlay] = useState(false);
  const [setFavorite] = usePostFavoriteArtistMutation();
  const [deleteFavorite] = useDeleteFavoriteArtistMutation();

  const handleFavoriteClick = () => {
    if (!isLike) {
      setLike(true);
      setFavorite({ user_id: authorizedUser.id, artist_id: Number(id) });
    } else if (!!isFavorite && isLike) {
      setLike(false);
      deleteFavorite(isFavorite.id);
    }
  };

  useEffect(() => {
    !!isFavorite ? setLike(true) : setLike(false);
  }, [isFavorite]);

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

  useEffect(() => {
    isSongPlay &&
      !!songs &&
      dispatch(songActions.setSongList(songs.map((song) => song.id)));
  }, [isSongPlay]);

  const language = getLanguage();

  useEffect(() => {
    scrollToTop();
    changeTitle("artist");
  }, []);

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
              artist_id={Number(id)}
              rating={artist?.rating || 0}
            />
          }
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
                {`${!!songs ? songs.length : 0} ${language.songs} • ${
                  !!albums ? albums.length : 0
                } ${language.albums}`}
              </ArtistPageDescription>
            </ArtistPageInnerWrapper>
          </ArtistPageContentWrapper>

          <ArtistPageSongsWrapper>
            <ArtistPageInfoWrapper>
              <ArtistPageInfoButtonsWrapper>
                <ArtistPageButtonWrapper $accentColor={accentColor}>
                  <ButtonWithIcon
                    size={60}
                    icon={`player/${
                      songPlayer.artist_id === Number(id) &&
                      songSettings.isPlaying
                        ? "pause"
                        : "play"
                    }-white`}
                    title={
                      songPlayer.artist_id === Number(id) &&
                      songSettings.isPlaying
                        ? language.stop
                        : language.play
                    }
                    click={handlePlayClick}
                  />
                </ArtistPageButtonWrapper>
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
              </ArtistPageInfoButtonsWrapper>

              <ArtistPageRaitingWrapper>
                <ReviewRaiting value={artist?.rating || 0} />
              </ArtistPageRaitingWrapper>
            </ArtistPageInfoWrapper>

            {!!songs && songs.length !== 0 && (
              <ArtistPageContentSection>
                <ArtistPageListTitle>{language.songs}</ArtistPageListTitle>

                <ArtistPageList $columns={Math.round(songs.length / 2)}>
                  {songs.map((song) => (
                    <SongItem
                      key={song.id}
                      song={song}
                      setSongPlay={setSongPlay}
                    />
                  ))}
                </ArtistPageList>
              </ArtistPageContentSection>
            )}

            {!!albums && albums.length !== 0 && (
              <ArtistPageContentSection>
                <ArtistPageHeader>
                  <ArtistPageListTitle>{language.albums}</ArtistPageListTitle>
                  <ButtonSeeAll />
                </ArtistPageHeader>

                <ArtistPageAlbumList>
                  {albums.map((album) => (
                    <AlbumItem
                      key={album.id}
                      album={album}
                      isAccentColor={true}
                    />
                  ))}
                </ArtistPageAlbumList>
              </ArtistPageContentSection>
            )}

            {!!reviews && reviews.length !== 0 && (
              <ArtistPageContentSection>
                <ArtistPageHeader>
                  <ArtistPageListTitle>{language.reviews}</ArtistPageListTitle>
                  <ButtonSeeAll />
                </ArtistPageHeader>

                {reviews.map((review) => (
                  <Reviews
                    key={review.id}
                    isLoading={isReviewLoading}
                    artist={artist}
                    review={review}
                    isAccentColor={true}
                  />
                ))}
              </ArtistPageContentSection>
            )}
          </ArtistPageSongsWrapper>
        </ArtistPageSection>
      )}
    </>
  );
});
