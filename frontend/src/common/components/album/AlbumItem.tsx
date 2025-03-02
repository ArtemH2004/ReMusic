import { getImgByName } from "@/common/helpers/getImgByName";
import { getYearFromDate } from "@/common/helpers/getYearFromDate";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { clampText, linkHoverActive, resetLink } from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";
import { ImgCover } from "@/common/styles/tags/img/ImgCover";
import { Album } from "@/store/reducers/album/types";
import {
  useDeleteFavoriteAlbumMutation,
  useGetFavoriteAlbumByIdAndUserIdQuery,
  usePostFavoriteAlbumMutation,
} from "@/store/reducers/favorite/favoriteAlbumApi";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = styled("li")<{ $isAccentColor?: boolean }>`
  width: 100%;
  max-width: 300px;
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${(props) =>
    props.$isAccentColor ? colors.whiteActive : colors.blackCover};
  border-radius: ${borders.smallBorderRadius};
`;

const Wrapper = styled("div")`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  @media ${device.mobileL} {
    padding: 15px;
  }

  @media ${device.mobileM} {
    padding: 10px;
  }
`;

const TitleLink = styled(Link)`
  ${resetLink}
  width: fit-content;
  max-width: 150px;
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.whiteTotal};
  ${linkHoverActive}

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const SubtitleLink = styled(Link)`
  ${resetLink}
  width: fit-content;
  max-width: 150px;
  ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmallMobile)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
  ${linkHoverActive}

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Span = styled("span")`
  ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmall)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
  user-select: none;
`;

const defaultAlbumImg = "/public/images/default-album.svg";

interface AlbumItemProps {
  album: Album;
  isAccentColor?: boolean;
}

export const AlbumItem = memo(({ album, isAccentColor }: AlbumItemProps) => {
  const { data: artist } = useGetUserByIdQuery(album?.artist_id || 0);
  const img =
    album?.photo !== null ? getImgByName(album?.photo || "") : defaultAlbumImg;
  const year = getYearFromDate(album?.created_at);
  const authorizedUserId = useAppSelector(
    (state) => state.userReducer.authorizedUser.id
  );
  const { data: isFavorite } = useGetFavoriteAlbumByIdAndUserIdQuery({
    user_id: authorizedUserId,
    album_id: album.id,
  });
  const [isLike, setLike] = useState(!!isFavorite?.id ? true : false);
  const [setFavorite] = usePostFavoriteAlbumMutation();
  const [deleteFavorite] = useDeleteFavoriteAlbumMutation();

  const handleFavoriteClick = () => {
    if (!isLike) {
      setLike(true);
      setFavorite({ user_id: authorizedUserId, album_id: album.id });
    } else if (!!isFavorite && isLike) {
      setLike(false);
      deleteFavorite(isFavorite.id);
    }
  };

  useEffect(() => {
    !!isFavorite ? setLike(true) : setLike(false);
  }, [isFavorite]);

  return (
    <Item $isAccentColor={isAccentColor}>
      <ImgCover
        img={img}
        title={album?.name || ""}
        artist={artist?.username || ""}
        year={year}
        rating={album.rating}
        isButtonsActive={true}
        linkTo={`/album/${album?.id}`}
        isFavorite={isLike}
        setFavorite={handleFavoriteClick}
      />

      <Wrapper>
        <TitleLink to={`/album/${album?.id}`}>{album?.name}</TitleLink>
        <SubtitleLink to={`/artist/${artist?.id}`}>
          {artist?.username}
        </SubtitleLink>
        <Span>{year}</Span>
      </Wrapper>
    </Item>
  );
});
