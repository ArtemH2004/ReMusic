import { PlaylistItem } from "@/common/components/playlist/PlaylistItem";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import {
  HomePageHeader,
  HomePageList,
  HomePageSection,
  HomePageTitle,
} from "@/modules/user/home/styles";

export const HomeAlbums = () => {
  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>Top Albums</HomePageTitle>
        <ButtonSeeAll />
      </HomePageHeader>

      <HomePageList>
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
        <PlaylistItem />
      </HomePageList>
    </HomePageSection>
  );
};
