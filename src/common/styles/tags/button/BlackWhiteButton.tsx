import styled from "styled-components";
import {
  buttonHoverActive,
  clampText,
  flexCenter,
  resetButton,
} from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";

export const ButtonWrapper = styled("button")<{ $color: string }>`
  ${resetButton}
  ${flexCenter}

  position: relative;

  height: 50px;
  width: 100%;
  column-gap: 10px;

  border: ${(props) =>
    props.$color === "black" ? borders.grayBorder : borders.whiteBorder};
  border-radius: ${borders.defaultBorderRadius};
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

  ${buttonHoverActive}
`;

interface BlackWhiteButtonProps {
  color: "white" | "black";
  title: string;
  click?: () => void;
  buttonType?: "submit" | "reset" | "button";
}

export const BlackWhiteButton = ({
  color,
  title,
  click,
  buttonType,
}: BlackWhiteButtonProps) => {
  return (
    <ButtonWrapper $color={color} onClick={click} type={!!buttonType ? buttonType : "button"}>
      {title}
    </ButtonWrapper>
  );
};
