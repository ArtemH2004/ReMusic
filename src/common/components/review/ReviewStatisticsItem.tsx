import {
  ReviewStatisticCount,
    ReviewStatisticItem,
    ReviewStatisticItemWrapper,
    ReviewStatisticTitle,
    ReviewStatisticValue,
  } from "@/common/components/review/styles";
  import { getColorByValue } from "@/common/helpers/getColorByValue";

interface ReviewStatisticItemProps {
    title: string;
    value: number;
}

export const ReviewStatisticsItem = ({title, value}: ReviewStatisticItemProps) => {
  return (
    <ReviewStatisticItem>
          <ReviewStatisticItemWrapper>
            <ReviewStatisticTitle>{title}</ReviewStatisticTitle>
            <ReviewStatisticTitle><ReviewStatisticCount>{value}</ReviewStatisticCount> / 10</ReviewStatisticTitle>
          </ReviewStatisticItemWrapper>
          <ReviewStatisticValue $value={value} $color={getColorByValue(value)} />
        </ReviewStatisticItem>
  )
}
