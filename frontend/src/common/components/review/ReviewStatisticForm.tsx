import {
  ReviewStatisticColumnWrapper,
  ReviewStatisticHeaderWrapper,
  ReviewStatisticList,
  ReviewStatisticRaiting,
  ReviewStatisticSpaceBetweenWrapper,
  ReviewStatisticTitleRaiting,
  ReviewStatisticWrapper,
} from "@/common/components/review/styles";
import { ReviewStatisticsInput } from "@/common/components/review/ReviewStatisticsInput";
import { getColorByValue } from "@/common/helpers/getColorByValue";
import { getLanguage } from "@/common/helpers/getLanguage";

export const ReviewStatisticForm = () => {
  const language = getLanguage();
  
  return (
    <ReviewStatisticWrapper>
      <ReviewStatisticHeaderWrapper>

        <ReviewStatisticSpaceBetweenWrapper>
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>{language.albumRating}</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(82)}>
              82
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>

          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>{language.yourRating}</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(56)}>
              56
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>
        </ReviewStatisticSpaceBetweenWrapper>
      </ReviewStatisticHeaderWrapper>

      <ReviewStatisticList>
        <ReviewStatisticsInput title={language.rhymes} />
        <ReviewStatisticsInput title={language.rhythm} />
        <ReviewStatisticsInput title={language.style} />
        <ReviewStatisticsInput title={language.individuality} />
        <ReviewStatisticsInput title={language.atmosphere} />
      </ReviewStatisticList>
    </ReviewStatisticWrapper>
  );
};
