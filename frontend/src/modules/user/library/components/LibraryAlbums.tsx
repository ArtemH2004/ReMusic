import { AlbumItem } from "@/common/components/album/AlbumItem";
import { getLanguage } from "@/common/helpers/getLanguage";
import { LibraryPageAlbumsList, LibraryPageCount, LibraryPageHeader, LibraryPageTitle } from "@/modules/user/library/styles";

export const LibraryAlbums = () => {
  const language = getLanguage();
  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>{language.likedAlbums} <LibraryPageCount>(128)</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageAlbumsList>
        {/* <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem />
        <AlbumItem /> */}
      </LibraryPageAlbumsList>
    </>
  );
};
