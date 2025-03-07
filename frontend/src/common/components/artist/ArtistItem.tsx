import {
  clampText,
  flexCenter,
  linkHoverActive,
  resetLink,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { ImgArtist } from "@/common/styles/tags/img/ImgArtist";
import styled from "styled-components";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { ShortUserInfo } from "@/store/reducers/user/types";
import { getImgByName } from "@/common/helpers/getImgByName";
import { Link } from "react-router-dom";
import {
  useDeleteFavoriteArtistMutation,
  usePostFavoriteArtistMutation,
} from "@/store/reducers/favorite/favoriteArtistApi";
import { memo, useEffect, useState } from "react";

const Item = styled("li")<{ $isAccentColor?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  padding: 20px;
  margin-inline: auto;

  ${flexCenter}
  flex-direction: column;
  row-gap: 10px;

  background-color: ${(props) =>
    props.$isAccentColor ? colors.whiteActive : colors.blackCover};
  border-radius: ${borders.smallBorderRadius};

  @media ${device.mobileL} {
    padding: 15px;
  }

  @media ${device.mobileM} {
    padding: 10px;
    row-gap: 5px;
  }
`;

const TitleLink = styled(Link)`
  ${resetLink}
  width: fit-content;
  max-width: 150px;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.whiteTotal};
  ${linkHoverActive}

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const defaultArtistImg = "/public/images/default-user.svg";

interface ArtistProps {
  artist: ShortUserInfo;
  isAccentColor?: boolean;
}

export const ArtistItem = memo(({ artist, isAccentColor }: ArtistProps) => {
  const img =
    artist.photo !== null ? getImgByName(artist.photo || "") : defaultArtistImg;
  const [liked, setLiked] = useState(artist.liked);
  const [setFavorite] = usePostFavoriteArtistMutation();
  const [deleteFavorite] = useDeleteFavoriteArtistMutation();

  useEffect(() => {
    setLiked(artist.liked);
  }, [artist.liked]);

  const handleFavoriteClick = () => {
    if (!liked) {
      setFavorite(artist.id).then(() => setLiked(true));
    } else {
      deleteFavorite(artist.id).then(() => setLiked(false));
    }
  };

  return (
    <Item $isAccentColor={isAccentColor}>
      <ImgArtist
        img={img}
        artist={artist.username}
        artistId={artist.id}
        isFavorite={liked}
        setFavorite={handleFavoriteClick}
      />

      <TitleLink to={`/artist/${artist.id}`}>{artist.username}</TitleLink>

      <ReviewRaiting value={artist.rating} />
    </Item>
  );
});
