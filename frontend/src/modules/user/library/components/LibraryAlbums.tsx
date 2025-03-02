import { AlbumItem } from "@/common/components/album/AlbumItem";
import { ArtistItemLoading } from "@/common/components/loading/ArtistItemLoading";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  LibraryPageAlbumsList,
  LibraryPageCount,
  LibraryPageHeader,
  LibraryPageTitle,
} from "@/modules/user/library/styles";
import { useGetAllFavoritesAlbumsByUserIdQuery } from "@/store/reducers/favorite/favoriteAlbumApi";

export const LibraryAlbums = () => {
  const language = getLanguage();
  const authorizedUserId = useAppSelector(
    (state) => state.userReducer.authorizedUser.id
  );
  const { data: album, isLoading } =
    useGetAllFavoritesAlbumsByUserIdQuery(authorizedUserId);

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>
          {language.likedAlbums} <LibraryPageCount>{`(${!!album ? album?.length : 0})`}</LibraryPageCount>
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
          album?.map((album) => <AlbumItem key={album.id} album={album} />)
        )}
      </LibraryPageAlbumsList>
    </>
  );
};
