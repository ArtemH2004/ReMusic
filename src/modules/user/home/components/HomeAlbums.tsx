import { AlbumItem } from "@/common/components/album/AlbumItem";
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
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
      </HomePageList>
    </HomePageSection>
  );
};
