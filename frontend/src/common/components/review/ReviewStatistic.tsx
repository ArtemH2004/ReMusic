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
import { ReviewStatistics } from "@/store/reducers/review/types";

interface ReviewStatisticProps {
  review: ReviewStatistics;
}

export const ReviewStatistic = ({review}: ReviewStatisticProps) => {
  const language = getLanguage();
  
  return (
    <ReviewStatisticWrapper>
      <ReviewStatisticHeaderWrapper>
        <ReviewStatisticCoverWrapper>
          <AlbumItem />
        </ReviewStatisticCoverWrapper>

        <ReviewStatisticWrapper>
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>{language.albumRating}</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(82)}>
              82
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>

{/* TODO Name of Author in Raiting */}
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>{`Kizaru ${language.rating}:`}</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(review.rating)}>
              {review.rating}
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>
        </ReviewStatisticWrapper>
      </ReviewStatisticHeaderWrapper>

      <ReviewStatisticList>
        <ReviewStatisticsItem title={language.rhymes} value={review.rhymes} />
        <ReviewStatisticsItem title={language.rhythm} value={review.rhythm} />
        <ReviewStatisticsItem title={language.style} value={review.styles} />
        <ReviewStatisticsItem title={language.individuality} value={review.individuality} />
        <ReviewStatisticsItem title={language.atmosphere} value={review.atmosphere} />
      </ReviewStatisticList>
    </ReviewStatisticWrapper>
  );
};
