import { AlbumItem } from "@/common/components/album/AlbumItem";
import { LibraryPageAlbumsList, LibraryPageCount, LibraryPageHeader, LibraryPageTitle } from "@/modules/user/library/styles";

export const LibraryAlbums = () => {
  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>Liked Albums <LibraryPageCount>(128)</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageAlbumsList>
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
        <AlbumItem />
        <AlbumItem />
      </LibraryPageAlbumsList>
    </>
  );
};
