import styled from "styled-components";
import {
  borders,
  colors,
  fonts,
  shadows,
} from "@/common/styles/styleConstants";
import { clampText } from "@/common/styles/mixins";

const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  color: ${colors.whiteTotal};
`;

const Label = styled("label")`
  margin-left: 15px;
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

const Input = styled("input")`
  width: 100%;
  padding: 10px 20px;
  border: ${borders.grayBorder};
  border-radius: ${borders.defaultBorderRadius};
  background-color: transparent;
  border-color: ${colors.grayText};
  letter-spacing: 1px;
  outline: none;

  &:hover,
  &:focus {
    background-color: ${colors.whiteHover};
  }

  &:focus {
    box-shadow: ${shadows.grayShadow};
    border-color: ${colors.whiteAccent};
  }

  color: ${colors.whiteTotal};
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}

  &::placeholder {
    color: ${colors.grayText};
  }
`;

interface DefaultInputProps {
  label: string;
  type: string;
  placeholder: string;
  isRequired?: boolean;
}

export const DefaultInput = ({
  label,
  type,
  placeholder,
  isRequired,
}: DefaultInputProps) => {
  return (
    <Wrapper>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        id={label}
        required={!!isRequired ? isRequired : false}
      />
    </Wrapper>
  );
};
