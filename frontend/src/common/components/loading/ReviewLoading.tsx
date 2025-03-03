import styled from "styled-components";
import {
  ReviewContentWrapper,
  ReviewHeader,
  ReviewHeaderWrapper,
  ReviewItem,
} from "@/common/components/review/styles";
import { SquareLoading, TextLoading } from "@/common/components/loading/styles";
import { ReviewStatisticLoading } from "@/common/components/loading/ReviewStatisticLoading";

const ColumnWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const TextColumnWrapper = styled(ColumnWrapper)`
  row-gap: 10px;
`;

interface ReviewProps {
  isAccentColor?: boolean;
}
export const ReviewLoading = ({ isAccentColor }: ReviewProps) => {
  return (
    <ReviewItem $isAccentColor={isAccentColor}>
      <ReviewHeader>
        <ReviewHeaderWrapper>
          <SquareLoading $size={50} />
          <ColumnWrapper>
            <TextLoading $height={18} $width="100px" />
            <TextLoading $height={13} $width="50px" />
          </ColumnWrapper>
        </ReviewHeaderWrapper>

        <SquareLoading $size={45} />
      </ReviewHeader>

      <ReviewContentWrapper>
        <TextColumnWrapper>
          <TextLoading $height={18} $width="100%" />
          <TextLoading $height={18} $width="100%" />
          <TextLoading $height={18} $width="100%" />
          <TextLoading $height={18} $width="100%" />
          <TextLoading $height={18} $width="100%" />
          <TextLoading $height={18} $width="100%" />
          <TextLoading $height={18} $width="100%" />
          <TextLoading $height={18} $width="75%" />
        </TextColumnWrapper>

        <ReviewStatisticLoading />
      </ReviewContentWrapper>
    </ReviewItem>
  );
};
