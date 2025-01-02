import { useExtractColors } from "react-extract-colors";

export const getImgAccentColor = (img: string) => {
  const { dominantColor } = useExtractColors(img);
    return dominantColor || 'gray';
}
