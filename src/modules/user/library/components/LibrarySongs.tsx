import { SongInAlbum } from "@/common/components/song/SongInAlbum";
import { LibraryPageSongsList, LibraryPageCount, LibraryPageHeader, LibraryPageTitle } from "@/modules/user/library/styles";

export const LibrarySongs = () => {
  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>Liked Songs <LibraryPageCount>(2122)</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageSongsList>
        <SongInAlbum />
        <SongInAlbum />
        <SongInAlbum />
        <SongInAlbum />
        <SongInAlbum />
      </LibraryPageSongsList>
    </>
  );
};
