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
import { ArtistItem } from "@/common/components/artist/ArtistItem";
import { SongItem } from "@/common/components/song/SongItem";
import { ArtistItemLoading } from "@/common/components/loading/ArtistItemLoading";
import { AlbumItemLoading } from "@/common/components/loading/AlbumItemLoading";
import { SongItemLoading } from "@/common/components/loading/SongItemLoading";
import { User } from "@/store/reducers/user/types";
import { Album } from "@/store/reducers/album/types";
import { Song } from "@/store/reducers/song/types";

interface ReviewStatisticProps {
  artist?: User;
  album?: Album;
  song?: Song;
  isLoading: boolean;
  review: Review;
  username: string;
}

export const ReviewStatistic = ({ artist, album, song, isLoading, review, username }: ReviewStatisticProps) => {
  const language = getLanguage();

  const rating = !!artist ? artist.rating : !!album ? album.rating : !!song ? song.rating : 0;

  return (
    <ReviewStatisticWrapper>
      <ReviewStatisticHeaderWrapper $isSong={!!song}>
        {!song ? (
          <ReviewStatisticCoverWrapper>
            {!!artist ? (
              isLoading ? (
                <ArtistItemLoading isAccentColor={true} />
              ) : (
                <ArtistItem isAccentColor={true} artist={artist} />
              )
            ) : (
              !!album &&
              (isLoading ? (
                <AlbumItemLoading isAccentColor={true} />
              ) : (
                <AlbumItem isAccentColor={true} album={album} />
              ))
            )}
          </ReviewStatisticCoverWrapper>
        ) : (
          !!song &&
          (isLoading ? <SongItemLoading /> : <SongItem song={song} />)
        )}

        <ReviewStatisticWrapper $isSong={!!song}>
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>
              {`${!!artist ? language.artistRating : !!album ? language.albumRating : language.songRating}`}
            </ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(rating, true)}>
              {rating}
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
