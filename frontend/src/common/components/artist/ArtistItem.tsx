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

const Item = styled("li")`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  padding: 20px;
  margin-inline: auto;

  ${flexCenter}
  flex-direction: column;
  row-gap: 10px;

  background-color: ${colors.blackCover};
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
  artist: ShortUserInfo
}

export const ArtistItem = ({artist}: ArtistProps) => {
  const img = !!artist.photo ? getImgByName(artist.photo) : defaultArtistImg;
  return (
    <Item>
      <ImgArtist
        img={img}
        artist={artist.username}
        artistId={artist.id}
      />

      <TitleLink to={`/artist/${artist.id}`}>{artist.username}</TitleLink>

      <ReviewRaiting value={52} />

    </Item>
  );
};
