import {
  ReviewStatisticColumnWrapper,
  ReviewStatisticCoverWrapper,
  ReviewStatisticHeaderWrapper,
  ReviewStatisticList,
  ReviewStatisticRaiting,
  ReviewStatisticTitleRaiting,
  ReviewStatisticWrapper,
} from "@/common/components/review/styles";
import { ReviewStatisticsItem } from "@/common/components/review/ReviewStatisticsItem";
import { AlbumItem } from "@/common/components/album/AlbumItem";
import { getColorByValue } from "@/common/helpers/getColorByValue";
import { getLanguage } from "@/common/helpers/getLanguage";
import { Review } from "@/store/reducers/review/types";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { useGetAlbumByIdQuery } from "@/store/reducers/album/albumApi";
import { useGetSongByIdQuery } from "@/store/reducers/song/songApi";
import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { SongItem } from "@/common/components/song/SongItem";
import { ArtistItemLoading } from "../loading/ArtistItemLoading";
import { AlbumItemLoading } from "../loading/AlbumItemLoading";
import { SongItemLoading } from "../loading/SongItemLoading";

interface ReviewStatisticProps {
  review: Review;
  username: string;
}

export const ReviewStatistic = ({ review, username }: ReviewStatisticProps) => {
  const language = getLanguage();
  const { data: artist, isLoading: isArtistLoading } = useGetUserByIdQuery(
    review.artist_id
  );
  const { data: album, isLoading: isAlbumLoading } = useGetAlbumByIdQuery(
    review.album_id
  );
  const { data: song, isLoading: isSongLoading } = useGetSongByIdQuery(
    review.song_id
  );

  return (
    <ReviewStatisticWrapper>
      <ReviewStatisticHeaderWrapper $isSong={!!song}>
        {!song ? (
          <ReviewStatisticCoverWrapper>
            {!!artist ? (
              isArtistLoading ? (
                <ArtistItemLoading isAccentColor={true} />
              ) : (
                <ArtistItem isAccentColor={true} artist={artist} />
              )
            ) : (
              !!album &&
              (isAlbumLoading ? (
                <AlbumItemLoading isAccentColor={true} />
              ) : (
                <AlbumItem isAccentColor={true} album={album} />
              ))
            )}
          </ReviewStatisticCoverWrapper>
        ) : (
          !!song &&
          (isSongLoading ? <SongItemLoading /> : <SongItem song={song} />)
        )}

        <ReviewStatisticWrapper $isSong={!!song}>
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>
              {language.albumRating}
            </ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(82, true)}>
              82
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>

          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>{`${username} ${language.rating}:`}</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(review.rating, true)}>
              {review.rating}
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>
        </ReviewStatisticWrapper>
      </ReviewStatisticHeaderWrapper>

      <ReviewStatisticList>
        <ReviewStatisticsItem title={language.rhymes} value={review.rhymes} />
        <ReviewStatisticsItem title={language.rhythm} value={review.rhythm} />
        <ReviewStatisticsItem title={language.style} value={review.styles} />
        <ReviewStatisticsItem
          title={language.individuality}
          value={review.individuality}
        />
        <ReviewStatisticsItem
          title={language.atmosphere}
          value={review.atmosphere}
        />
      </ReviewStatisticList>
    </ReviewStatisticWrapper>
  );
};
