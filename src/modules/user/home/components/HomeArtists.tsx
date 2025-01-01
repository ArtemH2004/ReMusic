import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import {
  HomePageHeader,
  HomePageList,
  HomePageSection,
  HomePageTitle,
} from "@/modules/user/home/styles";

export const HomeArtists = () => {
  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>Top Artists</HomePageTitle>
        <ButtonSeeAll />
      </HomePageHeader>

      <HomePageList>
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
        <ArtistItem />
      </HomePageList>
    </HomePageSection>
  );
};
