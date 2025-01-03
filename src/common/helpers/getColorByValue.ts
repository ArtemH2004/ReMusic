import { colors } from "@/common/styles/styleConstants";

export const getColorByValue = (value: number) => {
  if (value > 10 && value < 100) {
    value = (value - (value % 10)) / 10;
  }

  if (value == 0) value = 1;
  if (value == 100) value = 10;

  switch (value) {
    case 1:
      return colors.value1;
    case 2:
      return colors.value2;
    case 3:
      return colors.value3;
    case 4:
      return colors.value4;
    case 5:
      return colors.value5;
    case 6:
      return colors.value6;
    case 7:
      return colors.value7;
    case 8:
      return colors.value8;
    case 9:
      return colors.value9;
    case 10:
      return colors.value10;
    default:
      return colors.blackTotal;
  }
};
