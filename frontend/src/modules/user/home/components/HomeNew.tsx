import { SongItemLoading } from "@/common/components/loading/SongItemLoading";
import { SongItem } from "@/common/components/song/SongItem";
import { getLanguage } from "@/common/helpers/getLanguage";
import {
  HomeNewList,
  HomeNewSection,
  HomeNewTitle,
} from "@/modules/user/home/styles";
import { useGetAllSongsQuery } from "@/store/reducers/song/songApi";
import { songActions } from "@/store/reducers/song/songSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const HomeNew = () => {
  const language = getLanguage();
  const dispatch = useDispatch();
  const [isSongPlay, setSongPlay] = useState(false);
  const { data, isLoading } = useGetAllSongsQuery();

  useEffect(() => {
    isSongPlay &&
      !!data &&
      dispatch(songActions.setSongList(data?.map((song) => song.id)));
  }, [isSongPlay]);

  return (
    <HomeNewSection>
      <HomeNewTitle>{language.newSongs}</HomeNewTitle>
      <HomeNewList $columns={!!data ? Math.round(data?.length / 2) : 5}>
        {isLoading ? (
          <>
            <SongItemLoading />
            <SongItemLoading />
            <SongItemLoading />
            <SongItemLoading />
            <SongItemLoading />
            <SongItemLoading />
            <SongItemLoading />
            <SongItemLoading />
            <SongItemLoading />
            <SongItemLoading />
          </>
        ) : (
          data?.map((song) => <SongItem key={song.id} song={song} setSongPlay={setSongPlay} />)
        )}
      </HomeNewList>
    </HomeNewSection>
  );
};
