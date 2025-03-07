import { SongInAlbumLoading } from "@/common/components/loading/SongInAlbumLoading";
import { SongInAlbum } from "@/common/components/song/SongInAlbum";
import { getLanguage } from "@/common/helpers/getLanguage";
import {
  LibraryPageSongsList,
  LibraryPageCount,
  LibraryPageHeader,
  LibraryPageTitle,
  LibraryPageNotFound,
} from "@/modules/user/library/styles";
import { useGetAllFavoritesSongsByUserIdQuery } from "@/store/reducers/favorite/favoriteSongApi";
import { songActions } from "@/store/reducers/song/songSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const LibrarySongs = () => {
  const language = getLanguage();
  const dispatch = useDispatch();
  const [isSongPlay, setSongPlay] = useState(false);
  const { data: song, isLoading } = useGetAllFavoritesSongsByUserIdQuery();

  useEffect(() => {
    isSongPlay &&
      !!song &&
      dispatch(songActions.setSongList(song.map((song) => song.id)));
  }, [isSongPlay]);

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>
          {language.likedSongs}{" "}
          <LibraryPageCount>{`(${
            !!song ? song?.length : 0
          })`}</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      {song?.length !== 0 ? (
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
              <SongInAlbum
                key={song.id}
                index={index + 1}
                song={song}
                setSongPlay={setSongPlay}
              />
            ))
          )}
        </LibraryPageSongsList>
      ) : (
        <LibraryPageNotFound>{language.notFound}</LibraryPageNotFound>
      )}
    </>
  );
};
