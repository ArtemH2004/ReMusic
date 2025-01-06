import { MultipleInput } from "@/common/styles/tags/textarea/MultipleInput";
import styled from "styled-components";
import { ReviewStatisticForm } from "@/common/components/review/ReviewStatisticForm";

const ContentWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding-inline: 5px;
`;

const CommentWrapper = styled("div")`
  width: 100%;
`;

export const ModalReview = () => {
  return (
    <>
      <ContentWrapper>
        <CommentWrapper>
          <MultipleInput title="Comment" placeholder="Add comment..." />
        </CommentWrapper>

        <ReviewStatisticForm />
      </ContentWrapper>
    </>
  );
};
