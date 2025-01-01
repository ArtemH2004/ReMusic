import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { clampText, clampWidth } from "@/common/styles/mixins";
import { borders, colors, fonts, shadows } from "@/common/styles/styleConstants";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import styled from "styled-components";

const Form = styled("form")`
  position: relative;
  height: 52px;
  ${clampWidth(350, 500)};
`;

const Input = styled("input")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  color: ${colors.blackTotal};
  font-weight: ${fonts.weights.medium};
  background-color: ${colors.whiteTotal};

  width: 100%;
  height: 100%;
  border: ${borders.defaultBorder};
  border-radius: ${borders.searchBorderRadius};
  padding-block: 10px;
  padding-inline: 65px 15px;
  outline: none;

  &::placeholder {
    color: ${colors.grayPlaceholder};
  }

  &:hover,
  &:focus {
    border: ${borders.grayBorder};
    box-shadow: ${shadows.grayShadow};
  }
`;

const ButtonWrapper = styled("div")`
  position: absolute;
  left: 1px;
  top: 1px;
  z-index: 1;
`;
export const HeaderSearch = () => {
  return (
    <Form>
      <ButtonWrapper>
        <ButtonWithIcon
          size={50}
          icon={"search"}
          title="Поиск"
        />
        {/* TODO CLICK FOR BUTTON */}
      </ButtonWrapper>

      <VisuallyHidden>
        <label htmlFor="search">Search</label>
      </VisuallyHidden>
      <Input id="search" placeholder="Artists, songs or albums" type="text" />
    </Form>
  );
};
