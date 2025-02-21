import {
  clampText,
  clampWidth,
  flexCenter,
  square,
} from "@/common/styles/mixins";
import {
  borders,
  colors,
  device,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import styled from "styled-components";

export const ReviewList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media ${device.tablet} {
    row-gap: 25px;
  }

  @media ${device.mobile} {
    row-gap: 20px;
  }

  @media ${device.mobileL} {
    row-gap: 15px;
  }

  @media ${device.mobileM} {
    row-gap: 10px;
  }
`;

export const ReviewItem = styled("li")<{ $isAccentColor?: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 25px 40px;
  background-color: ${(props) =>
    props.$isAccentColor ? colors.whiteActive : colors.blackCover};
  border-radius: ${borders.smallBorderRadius};

  @media ${device.mobileL} {
    row-gap: 15px;
    padding: 20px;
  }

  @media ${device.mobileM} {
    padding: 15px;
  }
`;

export const ReviewHeader = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
`;

export const ReviewHeaderWrapper = styled("div")`
  ${flexCenter}
  column-gap: 15px;
`;

export const ReviewAuthorImg = styled("img")`
  ${square(50)}
  border-radius: ${borders.circleBorderRadius};
  object-fit: cover;
  object-position: center;
`;

export const ReviewAuthorColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const ReviewAuthorName = styled("h3")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.whiteTotal};
`;

export const ReviewAuthorTime = styled("time")`
  ${clampText(fonts.sizes.extraSmallMobile, fonts.sizes.extraSmall)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
`;

export const ReviewLikesCount = styled("span")`
  ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  font-weight: ${fonts.weights.medium};
  color: ${colors.grayText};
`;

export const ReviewContentWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  column-gap: 50px;

  @media ${device.tablet} {
    ${flexCenter}
    flex-direction: column-reverse;
    row-gap: 30px;
  }
`;

export const ReviewDescription = styled("p")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  color: ${colors.whiteAccent};
`;

export const ReviewStatisticWrapper = styled("div")<{$isSong?: boolean}>`  
  display: flex;
  width: ${(props) => props.$isSong ? '100%' : 'fit-content'};
  flex-direction: ${(props) => props.$isSong ? 'row' : 'column'};
  justify-content: ${(props) => props.$isSong && 'space-between'};
  row-gap: 15px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ReviewStatisticHeaderWrapper = styled("div")<{$isSong?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;

  flex-direction: ${(props) => props.$isSong && 'column'};
  row-gap: ${(props) => props.$isSong && '25px'};

  @media ${device.mobileL} {
    ${flexCenter}
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const ReviewStatisticColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReviewStatisticSpaceBetweenWrapper = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
`;

export const ReviewStatisticTitleRaiting = styled("p")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.whiteTotal};
`;

export const ReviewStatisticRaiting = styled("span")<{ $color: string }>`
  ${clampText(fonts.sizes.extraTitleMobile, fonts.sizes.extraTitle)}
  font-weight: ${fonts.weights.bold};
  color: ${(props) => props.$color};
  line-height: 1;
`;

export const ReviewStatisticList = styled("ul")`
  ${clampWidth(275, 500)}
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ReviewStatisticItem = styled("li")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const ReviewStatisticItemWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;
  padding-inline: 5px;
`;

export const ReviewStatisticTitle = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-size: ${fonts.weights.medium};
  color: ${colors.grayText};
`;

export const ReviewStatisticCount = styled(ReviewStatisticTitle)`
  font-size: ${fonts.weights.bold};
  color: ${colors.whiteTotal};
`;

export const ReviewStatisticValue = styled("div")<{
  $value: number;
  $color: string;
}>`
  width: 100%;
  height: 5px;
  border-radius: ${borders.smallBorderRadius};
  background-color: ${colors.blackTotal};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.$value * 10}%;
    height: 100%;
    background-color: ${(props) => props.$color};
    border-radius: ${borders.smallBorderRadius};
  }
`;

export const ReviewStatisticCoverWrapper = styled("div")`
  ${clampWidth(150, 200)}
  border-radius: ${borders.smallBorderRadius};
  box-shadow: ${shadows.defaultShadow};

  @media ${device.tablet} {
    width: fit-content;
  }
`;
