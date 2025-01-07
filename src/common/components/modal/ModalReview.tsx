import { MultipleInput } from "@/common/styles/tags/textarea/MultipleInput";
import styled from "styled-components";
import { ReviewStatisticForm } from "@/common/components/review/ReviewStatisticForm";
import { getLanguage } from "@/common/helpers/getLanguage";

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
  const language = getLanguage();

  return (
    <>
      <ContentWrapper>
        <CommentWrapper>
          <MultipleInput title={language.comment} placeholder={language.addComment} />
        </CommentWrapper>

        <ReviewStatisticForm />
      </ContentWrapper>
    </>
  );
};
