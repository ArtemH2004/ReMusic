import { colors } from "@/common/styles/styleConstants";

export const getColorByValue = (value: number, isTotal?: boolean) => {
  if (isTotal && value >= 10 && value <= 100) {
    value = value - (value % 10);
  } else if (!isTotal) {
    value *= 10;
  }

  switch (value) {
    case !isTotal && 10:
      return colors.value1;
    case 20:
      return colors.value2;
    case 30:
      return colors.value3;
    case 40:
      return colors.value4;
    case 50:
      return colors.value5;
    case 60:
      return colors.value6;
    case 70:
      return colors.value7;
    case 80:
      return colors.value8;
    case 90:
      return colors.value9;
    case 100:
      return colors.value10;
    default:
      return colors.value0;
  }
};
