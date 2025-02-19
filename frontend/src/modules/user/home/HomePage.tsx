import { HomeNew } from "@/modules/user/home/components/HomeNew";
import { HomeAlbums } from "@/modules/user/home/components/HomeAlbums";
import { HomeArtists } from "@/modules/user/home/components/HomeArtists";
import { HomeReviews } from "@/modules/user/home/components/HomeReviews";
import { changeTitle } from "@/common/helpers/changeTitle";
import { useEffect } from "react";

export const HomePage = () => {

  useEffect(() => {
    changeTitle("home");
  }, []);

  return (
    <>
      <HomeNew />
      <HomeArtists />
      <HomeAlbums />
      <HomeReviews />
    </>
  );
};
