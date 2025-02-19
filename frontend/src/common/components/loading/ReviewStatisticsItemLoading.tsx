import {
  ReviewStatisticItem,
  ReviewStatisticItemWrapper,
} from "@/common/components/review/styles";
import { TextLoading } from "@/common/components/loading/styles";
import styled from "styled-components";
import { borders, colors } from "@/common/styles/styleConstants";

const Wrapper = styled("div")`
  width: 100%;
  height: 5px;
  border-radius: ${borders.smallBorderRadius};
  background-color: ${colors.blackLoading};
  position: relative;
`;

const ColumnItem = styled(ReviewStatisticItem)`
  row-gap: 10px;
`;

export const ReviewStatisticsItemLoading = () => {
  return (
    <ColumnItem>
      <ReviewStatisticItemWrapper>
        <TextLoading $height={18} $width="20%" />
        <TextLoading $height={18} $width="10%" />
      </ReviewStatisticItemWrapper>
      <Wrapper />
    </ColumnItem>
  );
};
