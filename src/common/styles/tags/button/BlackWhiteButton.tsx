import styled from "styled-components";
import {
  buttonHoverActive,
  clampText,
  flexCenter,
  resetButton,
} from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";

export const ButtonWrapper = styled("button")<{ $color: string }>`
  ${resetButton}
  ${flexCenter}

  position: relative;

  height: 50px;
  width: calc(50px * 6);
  column-gap: 10px;

  border: ${(props) =>
    props.$color === "black" ? borders.grayBorder : borders.whiteBorder};
  border-radius: ${borders.mediumBorderRadius};
  background-color: ${(props) =>
    props.$color === "black" ? colors.grayScrollBar : "transparent"};
  color: ${colors.whiteTotal};

  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.medium};

  &:active {
    background-color: ${(props) =>
      props.$color === "black" ? colors.blackPlaylist : colors.grayText};
    border-color: ${(props) =>
      props.$color === "black" && colors.grayScrollBar};
  }

  @media ${device.mobile} {
    height: calc(50px / 1.2);
    width: calc(50px * 4);

    ${clampText(fonts.sizes.smallMobile, fonts.sizes.small)}
  }

  ${buttonHoverActive}
`;

interface BlackWhiteButtonProps {
  color: "white" | "black";
  title: string;
  click?: () => void;
}

export const BlackWhiteButton = ({
  color,
  title,
  click,
}: BlackWhiteButtonProps) => {
  return (
    <ButtonWrapper $color={color} onClick={click}>
      {title}
    </ButtonWrapper>
  );
};
