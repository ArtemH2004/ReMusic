import { SongInAlbum } from "@/common/components/song/SongInAlbum";
import { getLanguage } from "@/common/helpers/getLanguage";
import { LibraryPageSongsList, LibraryPageCount, LibraryPageHeader, LibraryPageTitle } from "@/modules/user/library/styles";

export const LibrarySongs = () => {
  const language = getLanguage();
  
  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>{language.likedSongs} <LibraryPageCount>(2122)</LibraryPageCount>
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
