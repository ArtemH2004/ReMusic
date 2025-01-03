import {
  ReviewStatisticColumnWrapper,
  ReviewStatisticCoverWrapper,
  ReviewStatisticHeaderWrapper,
  ReviewStatisticList,
  ReviewStatisticRaiting,
  ReviewStatisticTitleRaiting,
  ReviewStatisticWrapper,
} from "@/common/components/review/styles";
import { ReviewStatisticsItem } from "./ReviewStatisticsItem";
import { AlbumItem } from "@/common/components/album/AlbumItem";
import { getColorByValue } from "@/common/helpers/getColorByValue";

export const ReviewStatistic = () => {
  return (
    <ReviewStatisticWrapper>
      <ReviewStatisticHeaderWrapper>
        <ReviewStatisticCoverWrapper>
          <AlbumItem />
        </ReviewStatisticCoverWrapper>

        <ReviewStatisticWrapper>
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>Album Raiting:</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(82)}>
              82
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>

{/* TODO Name of Author in Raiting */}
          <ReviewStatisticColumnWrapper>
            <ReviewStatisticTitleRaiting>Kizaru's Raiting:</ReviewStatisticTitleRaiting>
            <ReviewStatisticRaiting $color={getColorByValue(56)}>
              56
            </ReviewStatisticRaiting>
          </ReviewStatisticColumnWrapper>
        </ReviewStatisticWrapper>
      </ReviewStatisticHeaderWrapper>

      <ReviewStatisticList>
        <ReviewStatisticsItem title="Рифмы" value={7} />
        <ReviewStatisticsItem title="Ритм" value={5} />
        <ReviewStatisticsItem title="Стиль" value={10} />
        <ReviewStatisticsItem title="Индивидуальность" value={2} />
        <ReviewStatisticsItem title="Атмосфера" value={4} />
      </ReviewStatisticList>
    </ReviewStatisticWrapper>
  );
};
