import { AlbumItem } from "@/common/components/album/AlbumItem";
import { getLanguage } from "@/common/helpers/getLanguage";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import {
  HomePageHeader,
  HomePageList,
  HomePageSection,
  HomePageTitle,
} from "@/modules/user/home/styles";

export const HomeAlbums = () => {
  const language = getLanguage();

  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>{language.topAlbums}</HomePageTitle>
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
