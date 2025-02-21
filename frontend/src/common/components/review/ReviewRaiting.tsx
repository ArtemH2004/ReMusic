import { getColorByValue } from "@/common/helpers/getColorByValue";
import { getTrophyByValue } from "@/common/helpers/getTrophyByValue";
import { clampText, flexCenter, square } from "@/common/styles/mixins";
import { fonts } from "@/common/styles/styleConstants";
import styled, { keyframes } from "styled-components";

const rotateCounterClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const Wrapper = styled("div")`
  ${flexCenter}
  column-gap: 3px;
  user-select: none;
`;

const Svg = styled("img")`
  ${square(25)}
  object-fit: contain;
  object-position: center;
  animation: ${rotateCounterClockwise} 5s linear infinite;
`;

const Span = styled("span")<{$color: string}>`
  ${clampText(fonts.sizes.main, fonts.sizes.subtitleMobile)}
  font-weight: ${fonts.weights.semiBold};
  color: ${(props) => props.$color};
  line-height: 1;
`;

interface ReviewRaitingProps {
    value: number;
}

export const ReviewRaiting = ({value}: ReviewRaitingProps) => {
  return (
    <Wrapper>
      <Svg src={getTrophyByValue(value)} alt="Rating" />
      <Span $color={getColorByValue(value, true)}>{value}</Span>
    </Wrapper>
  );
};
