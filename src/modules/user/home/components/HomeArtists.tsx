import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { getLanguage } from "@/common/helpers/getLanguage";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import {
  HomePageHeader,
  HomePageList,
  HomePageSection,
  HomePageTitle,
} from "@/modules/user/home/styles";

export const HomeArtists = () => {
  const language = getLanguage();

  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>{language.topArtists}</HomePageTitle>
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
