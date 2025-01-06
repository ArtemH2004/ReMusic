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

export const ReviewStatisticForm = () => {
  return (
    <ReviewStatisticWrapper>
      <ReviewStatisticHeaderWrapper>

        <ReviewStatisticSpaceBetweenWrapper>
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>Album Raiting:</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(82)}>
              82
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>

          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>Your's Raiting:</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(56)}>
              56
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>
        </ReviewStatisticSpaceBetweenWrapper>
      </ReviewStatisticHeaderWrapper>

      <ReviewStatisticList>
        <ReviewStatisticsInput title="Рифмы" />
        <ReviewStatisticsInput title="Ритм" />
        <ReviewStatisticsInput title="Стиль" />
        <ReviewStatisticsInput title="Индивидуальность" />
        <ReviewStatisticsInput title="Атмосфера" />
      </ReviewStatisticList>
    </ReviewStatisticWrapper>
  );
};
