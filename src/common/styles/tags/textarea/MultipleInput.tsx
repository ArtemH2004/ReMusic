import styled from "styled-components";
import {
  borders,
  colors,
  fonts,
  shadows,
  transitions,
} from "@/common/styles/styleConstants";
import { clampText } from "@/common/styles/mixins";
import { VisuallyHidden } from "@/common/styles/GlobalStyles";
import { useState } from "react";

const MultipleForm = styled("form")`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MultipleLabel = styled("label")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  font-weight: ${fonts.weights.bold};
  margin-inline: 10px;
`;

const MultipleWrapper = styled("div")<{ $isFocus: boolean; $height?: string }>`
  width: 100%;
  height: ${(props) => (!!props.$height ? props.$height : "365px")};
  padding: 10px 10px;
  border: ${borders.grayBorder};
  border-radius: ${borders.mediumBorderRadius};
  background-color: ${(props) =>
    props.$isFocus ? colors.whiteHover : "transparent"};
  border-color: ${(props) =>
    props.$isFocus ? colors.whiteAccent : colors.grayText};
  box-shadow: ${(props) => props.$isFocus ? shadows.grayShadow : 'none'};
  transition: ${transitions.fastTransition};

  &:hover {
    background-color: ${colors.whiteHover};
  }
`;

const MultipleTextarea = styled("textarea")`
  width: 100%;
  height: 100%;
  padding-inline: 10px;
  background-color: transparent;
  border: none;
  color: ${colors.whiteTotal};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  resize: none;
  overflow-y: auto;
  outline: none;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::placeholder {
    color: ${colors.grayText};
  }
`;

interface MultipleInputProps {
  placeholder: string;
  title?: string;
  height?: string;
}

export const MultipleInput = ({
  placeholder,
  title,
  height,
}: MultipleInputProps) => {
  const [isFocus, setFocus] = useState(false);
  return (
    <MultipleForm>
      {!!title ? (
        <MultipleLabel htmlFor={placeholder}>{title}</MultipleLabel>
      ) : (
        <VisuallyHidden>
          <label htmlFor={placeholder}>{placeholder}</label>
        </VisuallyHidden>
      )}
      <MultipleWrapper $isFocus={isFocus} $height={height}>
        <MultipleTextarea
          id={placeholder}
          name={placeholder}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </MultipleWrapper>
    </MultipleForm>
  );
};
