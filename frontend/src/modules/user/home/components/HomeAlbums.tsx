import { AlbumItem } from "@/common/components/album/AlbumItem";
import { AlbumItemLoading } from "@/common/components/loading/AlbumItemLoading";
import { getLanguage } from "@/common/helpers/getLanguage";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import {
  HomePageHeader,
  HomePageList,
  HomePageSection,
  HomePageTitle,
} from "@/modules/user/home/styles";
import { useGetAllAlbumsQuery } from "@/store/reducers/album/albumApi";

export const HomeAlbums = () => {
  const {data, isLoading} = useGetAllAlbumsQuery();

  const language = getLanguage();

  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>{language.newAlbums}</HomePageTitle>
        <ButtonSeeAll linkTo="/all/albums" />
      </HomePageHeader>

      <HomePageList>
        {isLoading ? (
          <>
            <AlbumItemLoading />
            <AlbumItemLoading />
            <AlbumItemLoading />
            <AlbumItemLoading />
          </>
        ) : (
          data?.slice(0, 5).map((album) => <AlbumItem key={album.id} album={album} />)
        )}
      </HomePageList>
    </HomePageSection>
  );
};
