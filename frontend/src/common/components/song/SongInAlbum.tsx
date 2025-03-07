import {
  absCenter,
  clampText,
  flexCenter,
  hoverActive,
  linkHoverActive,
  resetButton,
  resetLink,
  square,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { getLanguage } from "@/common/helpers/getLanguage";
import { Song } from "@/store/reducers/song/types";
import { getImgByName } from "@/common/helpers/getImgByName";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  useDeleteFavoriteSongMutation,
  usePostFavoriteSongMutation,
} from "@/store/reducers/favorite/favoriteSongApi";
import { useDispatch } from "react-redux";
import { songActions } from "@/store/reducers/song/songSlice";
import { BarsLoading } from "../loading/BarsLoading";

const Item = styled("li")``;

const Button = styled("button")<{ $isActive: boolean }>`
  ${resetButton}
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding-inline: 40px;
  border-radius: ${borders.smallBorderRadius};
  background-color: ${(props) =>
    props.$isActive ? colors.grayActive : "transparent"};

  ${hoverActive}

  @media ${device.mobile} {
    height: 60px;
    padding-inline: 25px;
  }

  @media ${device.mobileL} {
    padding-inline: 15px;
    column-gap: 20px;
  }

  @media ${device.mobileM} {
    height: 55px;
    padding-inline: 10px;
  }
`;

const Wrapper = styled("div")`
  ${flexCenter}
  column-gap: 20px;

  @media ${device.mobileL} {
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    column-gap: 10px;
  }
`;

const Number = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
`;

const Time = styled("time")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
`;

const ImgWrapper = styled("div")`
  ${flexCenter}
  position: relative
`;

const ImgLoader = styled("div")`
  ${absCenter}
  z-index: 1;
  transform: scale(.75);
`;

const Img = styled("img")`
  ${square(42)}
  object-fit: cover;
  object-position: center;
`;

const ColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

const TitleLink = styled(Link)`
  ${resetLink}
  width: fit-content;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
  ${linkHoverActive}
`;

const ArtistLink = styled(Link)`
  ${resetLink}
  width: fit-content;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
  ${linkHoverActive}
`;

const ButtonsWrapper = styled(Wrapper)`
  @media ${device.mobileL} {
    display: none;
  }
`;

const NavLink = styled(Link)`
  ${flexCenter}
`;

const defaultSongImg = "/public/images/default-song.svg";

interface SongInAlbumProps {
  index: number;
  song: Song;
  setSongPlay?: (isSongPlay: boolean) => void;
}

export const SongInAlbum = memo(
  ({ index, song, setSongPlay }: SongInAlbumProps) => {
    const dispatch = useDispatch();
    const { songPlayer, songSettings } = useAppSelector(
      (state) => state.songReducer
    );
    const [isHover, setHover] = useState(false);
    const [liked, setLiked] = useState(song.liked);
    const img = song.photo !== null ? getImgByName(song.photo) : defaultSongImg;
    const language = getLanguage();
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
      <Item>
        <Button
          $isActive={songPlayer.id === song.id}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handlePlayClick}
        >
          <Wrapper>
            <Number>{index}</Number>
            <ImgWrapper>
              {songSettings.isPlaying && songPlayer.id === song.id && (
                <ImgLoader>
                  <BarsLoading />
                </ImgLoader>
              )}
              <Img src={img} alt={song.name} />
            </ImgWrapper>

            <ColumnWrapper>
              <TitleLink to={`/song/${song.id}`}>{song.name}</TitleLink>
              <ArtistLink to={`/artist/${song.artist_id}`}>
                {song.artist_name}
              </ArtistLink>
            </ColumnWrapper>
          </Wrapper>
          <Wrapper>
            <ButtonsWrapper>
              {isHover ? (
                <>
                  <NavLink to={`/song/${song.id}`}>
                    <ButtonWithIcon
                      size={40}
                      icon={"player/open"}
                      title={language.goto}
                    />
                  </NavLink>
                  <ButtonWithIcon
                    size={40}
                    icon={liked ? "player/delete" : "player/add"}
                    title={liked ? language.delete : language.add}
                    click={handleFavoriteClick}
                  />
                </>
              ) : (
                <ReviewRaiting value={song.rating} />
              )}
            </ButtonsWrapper>
            <Time>2:12</Time>
          </Wrapper>
        </Button>
      </Item>
    );
  }
);
