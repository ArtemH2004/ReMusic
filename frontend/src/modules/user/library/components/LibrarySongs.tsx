import { SongInAlbumLoading } from "@/common/components/loading/SongInAlbumLoading";
import { SongInAlbum } from "@/common/components/song/SongInAlbum";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  LibraryPageSongsList,
  LibraryPageCount,
  LibraryPageHeader,
  LibraryPageTitle,
} from "@/modules/user/library/styles";
import { useGetAllFavoritesSongsByUserIdQuery } from "@/store/reducers/favorite/favoriteSongApi";

export const LibrarySongs = () => {
  const language = getLanguage();
  const authorizedUserId = useAppSelector(
    (state) => state.userReducer.authorizedUser.id
  );
  const { data: song, isLoading } =
    useGetAllFavoritesSongsByUserIdQuery(authorizedUserId);

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>
          {language.likedSongs}{" "}
          <LibraryPageCount>{`(${song?.length})`}</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageSongsList>
        {isLoading ? (
          <>
            <SongInAlbumLoading />
            <SongInAlbumLoading />
            <SongInAlbumLoading />
            <SongInAlbumLoading />
            <SongInAlbumLoading />
          </>
        ) : (
          song?.map((song, index) => (
            <SongInAlbum key={song.id} index={index + 1} song={song} />
          ))
        )}
      </LibraryPageSongsList>
    </>
  );
};
