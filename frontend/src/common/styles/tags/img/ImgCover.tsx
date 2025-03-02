import styled from "styled-components";
import {
  borders,
  colors,
  fonts,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import { clampText, flexCenter, linearGradient } from "@/common/styles/mixins";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { NavLink } from "react-router-dom";
import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { ReviewRaiting } from "@/common/components/review/ReviewRaiting";
import { getLanguage } from "@/common/helpers/getLanguage";

const Wrapper = styled("div")<{ $accentColor: string }>`
  max-width: 300px;
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  user-select: none;
  box-shadow: ${shadows.defaultShadow};

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

const CoverWrapper = styled("div")<{ $accentColor: string }>`
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

const Link = styled(NavLink)`
  ${flexCenter}
`;

const Logo = styled("div")`
  position: absolute;
  top: 3%;
  right: 0;
  z-index: 2;

  padding: 3px;
  background-color: ${colors.blackPlaylist};
  border-top-left-radius: ${borders.mediumBorderRadius};
  border-bottom-left-radius: ${borders.mediumBorderRadius};
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
  rating?: number;
  isButtonsActive: boolean;
  linkTo?: string;
  isFavorite?: boolean;
  setFavorite?: () => void;
}
export const ImgCover = ({
  img,
  title,
  artist,
  year,
  rating,
  isButtonsActive,
  linkTo,
  isFavorite,
  setFavorite,
}: ImgCoverProps) => {
  const accentColor = getImgAccentColor(img);
  const language = getLanguage();

  return (
    <Wrapper $accentColor={accentColor}>
      {isButtonsActive && (
        <CoverWrapper $accentColor={accentColor}>
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
          <Link to={linkTo || ""}>
            <ButtonWithIcon
              size={35}
              icon={"player/open"}
              title={language.goto}
            />
          </Link>
        </CoverWrapper>
      )}
      <Img src={img} alt={title} />
      {isButtonsActive && (
        <Logo>
          <ReviewRaiting value={rating || 0} />
        </Logo>
      )}
      <TextWrapper $accentColor={accentColor}>
        <Title>{title}</Title>
        <Subtitle>
          {artist} • {year}
        </Subtitle>
      </TextWrapper>
    </Wrapper>
  );
};
