import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { ArtistItemLoading } from "@/common/components/loading/ArtistItemLoading";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  LibraryPageAlbumsList,
  LibraryPageCount,
  LibraryPageHeader,
  LibraryPageTitle,
} from "@/modules/user/library/styles";
import { useGetAllFavoritesArtistsByUserIdQuery } from "@/store/reducers/favorite/favoriteArtistApi";

export const LibraryArtists = () => {
  const language = getLanguage();
  const authorizedUserId = useAppSelector(
    (state) => state.userReducer.authorizedUser.id
  );
  const { data: artist, isLoading } =
    useGetAllFavoritesArtistsByUserIdQuery(authorizedUserId);

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>
          {language.likedArtists} <LibraryPageCount>{`(${!!artist ? artist.length : 0})`}</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageAlbumsList>
        {isLoading ? (
          <>
            <ArtistItemLoading />
            <ArtistItemLoading />
            <ArtistItemLoading />
            <ArtistItemLoading />
          </>
        ) : (
          artist?.map((artist) => (
            <ArtistItem key={artist.id} artist={artist} />
          ))
        )}
      </LibraryPageAlbumsList>
    </>
  );
};
