import { fileUrl } from "@/api/api";

export const getImgByName = (name: string): string => {
  return `${fileUrl}/images/${name}`;
};
