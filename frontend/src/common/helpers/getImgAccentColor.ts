import { useExtractColors } from "react-extract-colors";
import { colors } from "@/common/styles/styleConstants";

export const getImgAccentColor = (img: string) => {
  const { dominantColor } = useExtractColors(img);
  return dominantColor || colors.blackLoading;
}
