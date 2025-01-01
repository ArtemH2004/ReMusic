import { clampText, linkHoverActive, resetLink } from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import { ImgCover } from "@/common/styles/tags/img/ImgCover";
import styled from "styled-components";

const Item = styled("li")`
  width: 100%;
  height: 325px;
  /* padding: 20px; */

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${colors.blackCover};
  border-radius: ${borders.smallBorderRadius};
`;

const Wrapper = styled("div")`
  padding-inline: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const TitleLink = styled("a")`
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

const SubtitleLink = styled("a")`
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

export const PlaylistItem = () => {
  return (
    <Item>
      <ImgCover
        img="https://img-fotki.yandex.ru/get/765007/194398330.194/0_224238_718fa1c9_XL.jpg"
        title="Nevermind"
        artist="NIRVANA"
        year={2001}
      />

      <Wrapper>
        <TitleLink>Nevermind</TitleLink>
        <SubtitleLink>NIRVANA</SubtitleLink>
        <Span>2001 • Рок</Span>
      </Wrapper>
    </Item>
  );
};
