import styled from "styled-components";
import {
  clampText,
  linkHoverActive,
  resetButton,
} from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";

const Button = styled("button")`
  ${resetButton}
  ${linkHoverActive}
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  font-weight: ${fonts.weights.bold};
  text-transform: uppercase;
  color: ${colors.grayText};
`;

export const ButtonSeeAll = () => {
  return <Button>See All</Button>;
};
