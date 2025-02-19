import { getLanguage } from "@/common/helpers/getLanguage";

export const changeTitle = (location: string) => {
  const language = getLanguage();

  switch (location) {
    case "home":
      document.title = language.home;
      break;
    case "library":
      document.title = language.library;
      break;
    case "search":
      document.title = language.search;
      break;
    case "album":
      document.title = language.album;
      break;
    case "artist":
      document.title = language.artist;
      break;
    case "song":
      document.title = language.song;
      break;
    case "review":
      document.title = language.review;
      break;
    case "error":
      document.title = "404";
      break;
    default:
      document.title = "ReMusic";
      break;
  }
};
