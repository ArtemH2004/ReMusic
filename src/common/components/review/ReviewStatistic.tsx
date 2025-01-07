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

export const ReviewStatistic = () => {
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
            <ReviewStatisticRaiting $color={getColorByValue(56)}>
              56
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>
        </ReviewStatisticWrapper>
      </ReviewStatisticHeaderWrapper>

      <ReviewStatisticList>
        <ReviewStatisticsItem title={language.rhymes} value={7} />
        <ReviewStatisticsItem title={language.rhythm} value={5} />
        <ReviewStatisticsItem title={language.style} value={10} />
        <ReviewStatisticsItem title={language.individuality} value={2} />
        <ReviewStatisticsItem title={language.atmosphere} value={4} />
      </ReviewStatisticList>
    </ReviewStatisticWrapper>
  );
};
