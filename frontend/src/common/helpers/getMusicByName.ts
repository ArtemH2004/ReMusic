import { fileUrl } from "@/api/api";

export const getMusicByName = (name: string): string => {
  return `${fileUrl}/music/${name}`;
};
