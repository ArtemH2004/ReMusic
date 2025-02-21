import {
  ReviewStatisticColumnWrapper,
  ReviewStatisticHeaderWrapper,
  ReviewStatisticList,
  ReviewStatisticWrapper,
} from "@/common/components/review/styles";
import { TextLoading } from "@/common/components/loading/styles";
import styled from "styled-components";
import { ReviewStatisticsItemLoading } from "@/common/components/loading/ReviewStatisticsItemLoading";

const Header = styled(ReviewStatisticHeaderWrapper)`
  align-items: center;
  justify-content: end;
`;

const Wrapper = styled(ReviewStatisticColumnWrapper)`
  row-gap: 10px;
`;

const List = styled(ReviewStatisticList)`
  row-gap: 15px;
`;

export const ReviewStatisticLoading = () => {
  return (
    <ReviewStatisticWrapper>
      <Header>
        <ReviewStatisticWrapper>
          <Wrapper>
            <TextLoading $height={18} $width="100px" />
            <TextLoading $height={100} $width="100px" />
          </Wrapper>

          <Wrapper>
            <TextLoading $height={18} $width="100px" />
            <TextLoading $height={100} $width="100px" />
          </Wrapper>
        </ReviewStatisticWrapper>
      </Header>

      <List>
        <ReviewStatisticsItemLoading />
        <ReviewStatisticsItemLoading />
        <ReviewStatisticsItemLoading />
        <ReviewStatisticsItemLoading />
        <ReviewStatisticsItemLoading />
      </List>
    </ReviewStatisticWrapper>
  );
};
