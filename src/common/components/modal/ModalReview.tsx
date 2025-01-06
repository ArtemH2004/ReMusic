import { MultipleInput } from "@/common/styles/tags/textarea/MultipleInput";
import styled from "styled-components";
import { ReviewStatisticForm } from "@/common/components/review/ReviewStatisticForm";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { flexCenter } from "@/common/styles/mixins";

const ContentWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  padding-inline: 5px;
`;

const CommentWrapper = styled("div")`
  width: 50%;
`;

const ButtonsWrapper = styled("div")`
  ${flexCenter}
  column-gap: 20px;
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

      <ButtonsWrapper>
        <BlackWhiteButton color="black" title="Cancel" />
        <BlackWhiteButton color="white" title="Send" />
      </ButtonsWrapper>
    </>
  );
};
