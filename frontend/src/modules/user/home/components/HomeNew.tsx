import { SongItemLoading } from "@/common/components/loading/SongItemLoading";
import { SongItem } from "@/common/components/song/SongItem";
import { getLanguage } from "@/common/helpers/getLanguage";
import {
  HomeNewList,
  HomeNewSection,
  HomeNewTitle,
} from "@/modules/user/home/styles";
import { useGetAllSongsQuery } from "@/store/reducers/song/songApi";

export const HomeNew = () => {
  const { data, isLoading } = useGetAllSongsQuery();

  const language = getLanguage();

  return (
    <HomeNewSection>
      <HomeNewTitle>{language.newSongs}</HomeNewTitle>
      <HomeNewList $columns={!!data ? data?.length / 2 : 5}>
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
          data?.map((song) => <SongItem key={song.id} song={song} />)
        )}
      </HomeNewList>
    </HomeNewSection>
  );
};
