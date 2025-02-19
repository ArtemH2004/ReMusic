import styled from "styled-components";
import { borders, colors, shadows } from "@/common/styles/styleConstants";
import { linearGradient } from "@/common/styles/mixins";
import { getImgAccentColor } from "@/common/helpers/getImgAccentColor";
import { TextLoading } from "./styles";

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
  row-gap: 5px;

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

interface ImgCoverLoadingProps {
  img: string;
}
export const ImgCoverLoading = ({ img }: ImgCoverLoadingProps) => {
  const accentColor = getImgAccentColor(img);

  return (
    <Wrapper $accentColor={accentColor}>
      <Img src={img} />
      <TextWrapper $accentColor={accentColor}>
        <TextLoading $height={15} />
        <TextLoading $height={12} $width="30%" />
      </TextWrapper>
    </Wrapper>
  );
};
