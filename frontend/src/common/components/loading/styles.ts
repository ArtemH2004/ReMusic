import { square } from "@/common/styles/mixins";
import { borders, colors } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const SquareLoading = styled("div")<{ $size: number }>`
  ${(props) => square(props.$size)}
  border-radius: ${borders.circleBorderRadius};
  background-color: ${colors.blackLoading};
`;

export const TextLoading = styled("div")<{ $height: number, $width?: number }>`
  width: ${(props) => props.$width || 50}%;
  height: ${(props) => props.$height}px;
  background-color: ${colors.blackLoading};
  border-radius: ${borders.mediumBorderRadius};
`;
