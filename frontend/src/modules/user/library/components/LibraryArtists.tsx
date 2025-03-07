import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { ArtistItemLoading } from "@/common/components/loading/ArtistItemLoading";
import { getLanguage } from "@/common/helpers/getLanguage";
import {
  LibraryPageAlbumsList,
  LibraryPageCount,
  LibraryPageHeader,
  LibraryPageNotFound,
  LibraryPageTitle,
} from "@/modules/user/library/styles";
import { useGetAllFavoritesArtistsByUserIdQuery } from "@/store/reducers/favorite/favoriteArtistApi";

export const LibraryArtists = () => {
  const language = getLanguage();
  const { data: artist, isLoading } =
    useGetAllFavoritesArtistsByUserIdQuery();

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>
          {language.likedArtists}{" "}
          <LibraryPageCount>{`(${
            !!artist ? artist.length : 0
          })`}</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      {artist?.length !== 0 ? (
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
      ) : (
        <LibraryPageNotFound>{language.notFound}</LibraryPageNotFound>
      )}
    </>
  );
};
