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
import { ReviewStatistics } from "@/store/reducers/review/types";
import { getSumReviewStatistic } from "@/common/helpers/getSumReviewStatistic";

interface ReviewStatisticFormProps {
  review: ReviewStatistics;
  setRhymes: (rhymes: number) => void;
  setRhythm: (rhythm: number) => void;
  setStyles: (styles: number) => void;
  setIndividuality: (individuality: number) => void;
  setAtmosphere: (atmosphere: number) => void;
}

export const ReviewStatisticForm = ({
  review,
  setRhymes,
  setRhythm,
  setStyles,
  setIndividuality,
  setAtmosphere,
}: ReviewStatisticFormProps) => {
  const language = getLanguage();
  const sum = getSumReviewStatistic(review);

  return (
    <ReviewStatisticWrapper>
      <ReviewStatisticHeaderWrapper>
        <ReviewStatisticSpaceBetweenWrapper>
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>
              {language.albumRating}
            </ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(82, true)}>
              82
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>

          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>
              {language.yourRating}
            </ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(sum, true)}>
              {sum}
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>
        </ReviewStatisticSpaceBetweenWrapper>
      </ReviewStatisticHeaderWrapper>

      <ReviewStatisticList>
        <ReviewStatisticsInput isRequired={true} title={language.rhymes} value={review.rhymes} onValueChange={setRhymes} />
        <ReviewStatisticsInput isRequired={true} title={language.rhythm} value={review.rhythm} onValueChange={setRhythm} />
        <ReviewStatisticsInput isRequired={true} title={language.style} value={review.styles} onValueChange={setStyles} />
        <ReviewStatisticsInput isRequired={true} title={language.individuality} value={review.individuality} onValueChange={setIndividuality} />
        <ReviewStatisticsInput isRequired={true} title={language.atmosphere} value={review.atmosphere} onValueChange={setAtmosphere} />
      </ReviewStatisticList>
    </ReviewStatisticWrapper>
  );
};
