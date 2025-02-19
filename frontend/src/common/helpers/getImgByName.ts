import { imgUrl } from "@/api/api";

export const getImgByName = (name: string): string => {
  return `${imgUrl}/${name}`;
};
