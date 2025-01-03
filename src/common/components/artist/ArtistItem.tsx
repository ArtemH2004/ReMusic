import {
  clampText,
  flexCenter,
  linkHoverActive,
  resetLink,
} from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { ImgArtist } from "@/common/styles/tags/img/ImgArtist";
import styled from "styled-components";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";

const Item = styled("li")`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  padding: 20px;

  ${flexCenter}
  flex-direction: column;
  row-gap: 10px;

  background-color: ${colors.blackCover};
  border-radius: ${borders.smallBorderRadius};
`;

const TitleLink = styled("a")`
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

export const ArtistItem = () => {
  return (
    <Item>
      <ImgArtist
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIy0LtrihX_aP7keDMCMHkBj9GoMf_AIuZiQ&s"
        artist="MACAN"
      />

      <TitleLink>MACAN</TitleLink>

      <ReviewRaiting value={52} />

    </Item>
  );
};
