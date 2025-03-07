import {
  clampText,
  clampWidth,
  flexCenter,
  linkHoverActive,
  resetLink,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { NavLink } from "react-router-dom";
import { getLanguage } from "@/common/helpers/getLanguage";
import { Song } from "@/store/reducers/song/types";
import { getImgByName } from "@/common/helpers/getImgByName";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  useDeleteFavoriteSongMutation,
  usePostFavoriteSongMutation,
} from "@/store/reducers/favorite/favoriteSongApi";
import { useDispatch } from "react-redux";
import { songActions } from "@/store/reducers/song/songSlice";
import { BarsLoading } from "@/common/components/loading/BarsLoading";

const Item = styled("li")`
  ${clampWidth(300, 500)}
  height: 82px;
  background-color: ${colors.whiteActive};
  border-radius: ${borders.smallBorderRadius};

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;

  @media ${device.mobile} {
    height: 70px;
    column-gap: 15px;
  }

  @media ${device.mobileL} {
    height: 60px;
  }
`;

const Wrapper = styled("div")<{ $isRightPadding?: boolean }>`
  ${flexCenter}
  column-gap: 15px;
  height: 100%;
  padding-right: ${(props) => (props.$isRightPadding ? 20 : 0)}px;

  @media ${device.mobile} {
    column-gap: 10px;
  }
`;

const ColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

const Title = styled(NavLink)`
  color: ${colors.whiteTotal};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.semiBold};
  ${linkHoverActive}

  max-width: fit-content;
  ${clampWidth(75, 175)}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ArtistLink = styled(NavLink)`
  ${resetLink}
  width: fit-content;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  ${linkHoverActive}
`;

const ImgWrapper = styled("div")`
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  border-radius: ${borders.smallBorderRadius};
`;

const Img = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
  object-position: center;
`;

const ImgLink = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${colors.blackShadow};
  ${flexCenter}
`;

const Time = styled("time")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
`;

const Link = styled(NavLink)`
  ${flexCenter}
`;

const defaultSongImg = "/public/images/default-song.svg";

interface SongProps {
  song: Song;
  setSongPlay?: (isSongPlay: boolean) => void;
}

export const SongItem = memo(({ song, setSongPlay }: SongProps) => {
  const dispatch = useDispatch();
  const [isHover, setHover] = useState(false);
  const language = getLanguage();
  const img = song.photo !== null ? getImgByName(song.photo) : defaultSongImg;
  const { songPlayer, songSettings } = useAppSelector(
    (state) => state.songReducer
  );
  const [liked, setLiked] = useState(song.liked);
  const [setFavorite] = usePostFavoriteSongMutation();
  const [deleteFavorite] = useDeleteFavoriteSongMutation();

  useEffect(() => {
    setLiked(song.liked);
  }, [song.liked]);

  const handleFavoriteClick = () => {
    if (!liked) {
      setFavorite(song.id).then(() => setLiked(true));
    } else {
      deleteFavorite(song.id).then(() => setLiked(false));
    }
  };

  const handlePlayClick = () => {
    if (songPlayer.id === song.id && songSettings.isPlaying) {
      dispatch(songActions.setPlaying(false));
    } else {
      !!setSongPlay && setSongPlay(true);
      dispatch(songActions.setSongPlayer(song));
      dispatch(songActions.setPlaying(true));
    }
  };

  return (
    <Item
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Wrapper>
        <ImgWrapper>
          <Img src={img} alt={`"${song.name}" ${song.artist_name}`} />
          {!isHover && songPlayer.id === song.id && songSettings.isPlaying && (
            <ImgLink>
              <BarsLoading />
            </ImgLink>
          )}
          {isHover && (
            <ImgLink>
              <ButtonWithIcon
                size={50}
                icon={`player/${
                  songPlayer.id === song.id && songSettings.isPlaying
                    ? "pause"
                    : "play"
                }-white`}
                title={
                  songPlayer.id === song.id && songSettings.isPlaying
                    ? language.stop
                    : language.play
                }
                click={handlePlayClick}
              />
            </ImgLink>
          )}
        </ImgWrapper>

        <ColumnWrapper>
          <Title to={`/song/${song.id}`}>{song.name}</Title>
          <ArtistLink to={`/artist/${song.artist_id}`}>
            {song.artist_name}
          </ArtistLink>
        </ColumnWrapper>
      </Wrapper>

      <Wrapper $isRightPadding={true}>
        {isHover ? (
          <>
            <Link to={`/song/${song.id}`}>
              <ButtonWithIcon
                size={40}
                icon={"player/open"}
                title={language.goto}
              />
            </Link>
            <ButtonWithIcon
              size={40}
              icon={liked ? "player/delete" : "player/add"}
              title={liked ? language.delete : language.add}
              click={handleFavoriteClick}
            />
          </>
        ) : (
          <ReviewRaiting value={song?.rating || 0} />
        )}
        <Time>2:12</Time>
      </Wrapper>
    </Item>
  );
});
