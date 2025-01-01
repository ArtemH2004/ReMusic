import styled from "styled-components";
import {
  borders,
  colors,
  fonts,
  transitions,
} from "@/common/styles/styleConstants";
import { clampText, flexCenter, linearGradient } from "@/common/styles/mixins";
import { useExtractColors } from "react-extract-colors";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";

const logo = "public/logo.svg";

const Wrapper = styled("div")<{ $accentColor: string }>`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  user-select: none;

  &::before {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 75%;
    ${linearGradient("transparent", colors.blackTotal)}
  }

  &::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.$accentColor};
  }
`;

const Link = styled("div")<{ $accentColor: string }>`
  ${flexCenter}
  column-gap: 10px;

  width: 100%;
  height: 100%;
  border-radius: ${borders.smallBorderRadius};
  background-color: transparent;
  opacity: 0;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;

  transition: ${transitions.fastTransition};

  &:hover {
    background-color: ${(props) => props.$accentColor};
    opacity: 0.9;
  }
`;

const Logo = styled("img")`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 2;

  width: 10%;
  height: 10%;
`;

const Img = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${borders.smallBorderRadius};
`;

const TextWrapper = styled("div")<{ $accentColor: string }>`
  position: absolute;
  bottom: 5%;
  z-index: 2;
  width: 100%;
  padding-inline: 10%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  &::before {
    content: "";
    position: absolute;
    bottom: 5%;
    left: 0;
    z-index: 2;
    width: 5px;
    height: 100%;
    background-color: ${(props) => props.$accentColor};
  }
`;

const Title = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.whiteTotal};

  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;
`;

const Subtitle = styled("span")`
  ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmall)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};

  overflow: hidden; 
  white-space: nowrap; 
  text-overflow: ellipsis;
`;

interface ImgCoverProps {
  img: string;
  title: string;
  artist: string;
  year: number;
}
export const ImgCover = ({ img, title, artist, year }: ImgCoverProps) => {
  const { dominantColor } = useExtractColors(img);

  return (
    <Wrapper $accentColor={dominantColor || "red"}>
      <Link $accentColor={dominantColor || "red"}>
        <ButtonWithIcon size={45} icon={"player/add"} title="Добавить" />
        <ButtonWithIcon
          size={55}
          icon={"player/play-white"}
          title="Воспроизвести"
        />
        <ButtonWithIcon size={45} icon={"player/open"} title="Перейти" />
      </Link>
      <Img src={img} alt={title} />
      <Logo src={logo} alt="ReMusic" />
      <TextWrapper $accentColor={dominantColor || "red"}>
        <Title>{title}</Title>
        <Subtitle>
          {artist} • {year}
        </Subtitle>
      </TextWrapper>
    </Wrapper>
  );
};
