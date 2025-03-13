import { useGetAllUsersQuery } from "@/store/reducers/user/userApi";
import {
  SeeAllAlbumsList,
  SeeAllCount,
  SeeAllTitle,
} from "@/modules/user/see-all/styles";
import { ArtistItemLoading } from "@/common/components/loading/ArtistItemLoading";
import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { getLanguage } from "@/common/helpers/getLanguage";

export const SeeAllArtists = () => {
  const language = getLanguage();
  const { data: artists, isLoading } = useGetAllUsersQuery();

  return (
    <>
      <SeeAllTitle>
        {language.artists}{" "}
        <SeeAllCount>{`(${!!artists ? artists?.length : 0})`}</SeeAllCount>
      </SeeAllTitle>

      <SeeAllAlbumsList>
        {isLoading ? (
          <>
            <ArtistItemLoading />
            <ArtistItemLoading />
            <ArtistItemLoading />
            <ArtistItemLoading />
          </>
        ) : (
          artists?.map((artist) => (
            <ArtistItem key={artist.id} artist={artist} />
          ))
        )}
      </SeeAllAlbumsList>
    </>
  );
};
