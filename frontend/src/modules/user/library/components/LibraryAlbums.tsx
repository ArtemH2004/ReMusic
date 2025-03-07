import { AlbumItem } from "@/common/components/album/AlbumItem";
import { AlbumItemLoading } from "@/common/components/loading/AlbumItemLoading";
import { getLanguage } from "@/common/helpers/getLanguage";
import {
  LibraryPageAlbumsList,
  LibraryPageCount,
  LibraryPageHeader,
  LibraryPageNotFound,
  LibraryPageTitle,
} from "@/modules/user/library/styles";
import { useGetAllFavoritesAlbumsByUserIdQuery } from "@/store/reducers/favorite/favoriteAlbumApi";

export const LibraryAlbums = () => {
  const language = getLanguage();
  const { data: album, isLoading } =
    useGetAllFavoritesAlbumsByUserIdQuery();

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>
          {language.likedAlbums}{" "}
          <LibraryPageCount>{`(${
            !!album ? album?.length : 0
          })`}</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      {album?.length !== 0 ? (
        <LibraryPageAlbumsList>
          {isLoading ? (
            <>
              <AlbumItemLoading />
              <AlbumItemLoading />
              <AlbumItemLoading />
              <AlbumItemLoading />
            </>
          ) : (
            album?.map((album) => <AlbumItem key={album.id} album={album} />)
          )}
        </LibraryPageAlbumsList>
      ) : (
        <LibraryPageNotFound>{language.notFound}</LibraryPageNotFound>
      )}
    </>
  );
};
