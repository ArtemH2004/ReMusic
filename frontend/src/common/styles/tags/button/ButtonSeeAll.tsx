import styled from "styled-components";
import {
  clampText,
  linkHoverActive,
  resetButton,
} from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import { getLanguage } from "@/common/helpers/getLanguage";
import { Link } from "react-router-dom";

const ButtonLink = styled(Link)`
  ${resetButton}
  ${linkHoverActive}
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)};
  font-weight: ${fonts.weights.bold};
  text-transform: uppercase;
  color: ${colors.grayText};
`;

export const ButtonSeeAll = ({ linkTo }: { linkTo: string }) => {
  const language = getLanguage();

  return <ButtonLink to={linkTo}>{language.seeAll}</ButtonLink>;
};
