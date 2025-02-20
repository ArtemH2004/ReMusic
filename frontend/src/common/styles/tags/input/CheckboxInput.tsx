import styled from "styled-components";
import {
  colors,
  fonts,
} from "@/common/styles/styleConstants";
import { clampText, square } from "@/common/styles/mixins";

const Wrapper = styled("div")`
  width: 100%;
  padding-inline: 20px;
  display: flex;
  justify-content: start;
  align-items: center;
  column-gap: 10px;
  color: ${colors.whiteTotal};
`;

const Label = styled("label")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
`;

const Input = styled("input")`
  &[type="checkbox"] {
    ${square(25)}
    accent-color: ${colors.red};
  }
`;

interface CheckboxInputProps {
  label: string;
  isRequired?: boolean;
  onChange?: (e: any) => void;
}

export const CheckboxInput = ({
  label,
  isRequired,
  onChange,
}: CheckboxInputProps) => {
  return (
    <Wrapper>
      <Input
        id={label}
        type="checkbox"
        required={!!isRequired ? isRequired : false}
        onChange={onChange}
      />
      <Label htmlFor={label}>{label}</Label>
    </Wrapper>
  );
};
