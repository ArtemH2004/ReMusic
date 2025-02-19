import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { ArtistItemLoading } from "@/common/components/loading/ArtistItemLoading";
import { getLanguage } from "@/common/helpers/getLanguage";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import {
  HomePageHeader,
  HomePageList,
  HomePageSection,
  HomePageTitle,
} from "@/modules/user/home/styles";
import { useGetAllArtistsUsersQuery } from "@/store/reducers/user/userApi";

export const HomeArtists = () => {
  const { data, isLoading } = useGetAllArtistsUsersQuery();

  const language = getLanguage();

  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>{language.newArtists}</HomePageTitle>
        <ButtonSeeAll />
      </HomePageHeader>

      <HomePageList>
        {isLoading ? (
          <>
            <ArtistItemLoading />
            <ArtistItemLoading />
            <ArtistItemLoading />
            <ArtistItemLoading />
          </>
        ) : (
          data?.map((artist) => <ArtistItem key={artist.id} artist={artist} />)
        )}
      </HomePageList>
    </HomePageSection>
  );
};
