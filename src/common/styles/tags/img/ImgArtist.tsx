import styled from "styled-components";
import {
  borders,
  colors,
  transitions,
} from "@/common/styles/styleConstants";
import { flexCenter } from "@/common/styles/mixins";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";

const Wrapper = styled("div")`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  user-select: none;
`;

const Link = styled("div")`
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
    background-color: ${colors.blackShadow};
    opacity: 1;
  }
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

interface ImgArtistProps {
  img: string;
  artist: string;
}
export const ImgArtist = ({ img, artist }: ImgArtistProps) => {
  return (
    <Wrapper>
      <Link>
        <ButtonWithIcon size={45} icon={"player/add"} title="Добавить" />
        <ButtonWithIcon
          size={55}
          icon={"player/play-white"}
          title="Воспроизвести"
        />
        <ButtonWithIcon size={45} icon={"player/open"} title="Перейти" />
      </Link>
      <Img src={img} alt={artist} />
    </Wrapper>
  );
};
