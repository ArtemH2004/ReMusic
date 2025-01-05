import styled from "styled-components";
import { borders, colors } from "@/common/styles/styleConstants";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import {
  absCenter,
  hoverActive,
  resetButton,
  square,
} from "@/common/styles/mixins";

const ButtonWrapper = styled("button")<{ $size: number }>`
  ${resetButton};
  ${(props) => square(props.$size)}

  border-radius: ${borders.circleBorderRadius};
  background-color: ${colors.blackShadow};
  position: relative;

  ${hoverActive}
`;

const ButtonIcon = styled("img")`
  width: 50%;
  height: 50%;
  ${absCenter}
  z-index: 1;
`;

interface ButtonWithIconProps {
  size: number;
  icon: string;
  title?: string;
  click?: () => void;
}

export const ButtonWithIcon = ({
  size,
  icon,
  title,
  click,
}: ButtonWithIconProps) => {
  return (
    <ButtonWrapper $size={size} title={title} onClick={click}>
      <VisuallyHidden>{title}</VisuallyHidden>
      <ButtonIcon src={`src/common/images/icons/${icon}.svg`} alt={title} />
    </ButtonWrapper>
  );
};
