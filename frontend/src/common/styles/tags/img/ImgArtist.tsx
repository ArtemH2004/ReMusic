import styled from "styled-components";
import { borders, shadows, transitions } from "@/common/styles/styleConstants";
import { flexCenter } from "@/common/styles/mixins";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { NavLink } from "react-router-dom";
import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { getLanguage } from "@/common/helpers/getLanguage";

const Wrapper = styled("div")`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  user-select: none;
  box-shadow: ${shadows.defaultShadow};
  border-radius: ${borders.circleBorderRadius};
`;

const FlexWrapper = styled("div")<{ $accentColor: string }>`
  ${flexCenter}
  column-gap: 5px;

  width: 100%;
  height: 100%;
  border-radius: inherit;
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

const Img = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: inherit;
`;

const Link = styled(NavLink)`
  ${flexCenter}
`;
interface ImgArtistProps {
  img: string;
  artist: string;
  artistId: number;
  isFavorite: boolean;
  setFavorite: () => void;
}
export const ImgArtist = ({
  img,
  artist,
  artistId,
  isFavorite,
  setFavorite,
}: ImgArtistProps) => {
  const accentColor = getImgAccentColor(img);
  const language = getLanguage();

  return (
    <Wrapper>
      <FlexWrapper $accentColor={accentColor}>
        <ButtonWithIcon
          size={35}
          icon={isFavorite ? "player/delete" : "player/add"}
          title={isFavorite ? language.delete : language.add}
          click={setFavorite}
        />
        <ButtonWithIcon
          size={45}
          icon={"player/play-white"}
          title={language.play}
        />
        <Link to={`/artist/${artistId}`}>
          <ButtonWithIcon
            size={35}
            icon={"player/open"}
            title={language.goto}
          />
        </Link>
      </FlexWrapper>
      <Img src={img} alt={artist} />
    </Wrapper>
  );
};
