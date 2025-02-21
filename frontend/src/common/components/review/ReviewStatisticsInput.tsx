import { useState } from "react";
import {
  ReviewStatisticItem,
  ReviewStatisticItemWrapper,
  ReviewStatisticTitle,
  ReviewStatisticValue,
} from "@/common/components/review/styles";
import { getColorByValue } from "@/common/helpers/getColorByValue";
import styled from "styled-components";
import { borders, colors, fonts, shadows } from "@/common/styles/styleConstants";
import { clampText } from "@/common/styles/mixins";

const Input = styled("input")`
  width: 100%;
  padding: 2px 2px;
  margin-inline: 5px;
  border: ${borders.grayBorder};
  border-radius: ${borders.smallBorderRadius};
  background-color: transparent;
  border-color: ${colors.grayText};
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

interface ReviewStatisticInputProps {
  title: string;
  value: number;
  isRequired?: boolean;
  onValueChange: (newValue: number) => void; 
}

export const ReviewStatisticsInput = ({ title, value, isRequired, onValueChange }: ReviewStatisticInputProps) => {
  const [inputValue, setInputValue] = useState(!!value ? value : 0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 10) {
      setInputValue(newValue);
      onValueChange(newValue);
    }
  };

  return (
    <ReviewStatisticItem>
      <ReviewStatisticItemWrapper>
        <ReviewStatisticTitle>{title}</ReviewStatisticTitle>
        <ReviewStatisticTitle>
          <Input
            type="number"
            min="0"
            max="10"
            required={isRequired}
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: "50px", textAlign: "center" }}
          />
          / 10
        </ReviewStatisticTitle>
      </ReviewStatisticItemWrapper>
      <ReviewStatisticValue
        $value={inputValue}
        $color={getColorByValue(inputValue)}
      />
    </ReviewStatisticItem>
  );
};
