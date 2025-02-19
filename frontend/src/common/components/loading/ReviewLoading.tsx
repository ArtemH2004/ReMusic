import {
  ReviewContentWrapper,
  ReviewHeader,
  ReviewHeaderWrapper,
  ReviewItem,
} from "@/common/components/review/styles";
import { ReviewStatistic } from "@/common/components/review/ReviewStatistic";
import { SquareLoading, TextLoading } from "./styles";
import styled from "styled-components";

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

        <ReviewHeaderWrapper>
        <TextLoading $height={15} $width="40px" />
        <SquareLoading $size={45} />
        </ReviewHeaderWrapper>
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

        <ReviewStatistic />
      </ReviewContentWrapper>
    </ReviewItem>
  );
};
