import { MultipleInput } from "@/common/styles/tags/textarea/MultipleInput";
import styled from "styled-components";
import { ReviewStatisticForm } from "@/common/components/review/ReviewStatisticForm";
import { getLanguage } from "@/common/helpers/getLanguage";
import { clampText, flexCenter } from "@/common/styles/mixins";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { useState } from "react";
import { useUpdateReviewByIdMutation } from "@/store/reducers/review/reviewApi";
import { getSumReviewStatistic } from "@/common/helpers/getSumReviewStatistic";
import { colors, fonts } from "@/common/styles/styleConstants";
import { ReviewContent } from "@/store/reducers/review/types";

const BodyForm = styled("form")`
  display: flex;

  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  padding-inline: 10px;
`;
const ContentWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  padding-inline: 5px;
`;

const CommentWrapper = styled("div")`
  width: 100%;
`;

const ButtonsWrapper = styled("div")`
  ${flexCenter}

  width: 75%;
  column-gap: 20px;
  margin-inline: auto;
`;

const ErrorText = styled("span")`
  ${clampText(fonts.sizes.mainMobile, fonts.sizes.main)}
  color: ${colors.red};
  text-align: center;
`;

interface ModalReviewProps {
  id: number;
  review: ReviewContent;
  rating: number;
  setOpen: (isOpen: boolean) => void;
}

export const ModalEditReview = ({
  id,
  review,
  rating,
  setOpen,
}: ModalReviewProps) => {
  const language = getLanguage();
  const [updateReview] = useUpdateReviewByIdMutation();
  const [description, setDescription] = useState(review.description ?? "");
  const [rhymes, setRhymes] = useState(review.rhymes ?? 0);
  const [rhythm, setRhythm] = useState(review.rhythm ?? 0);
  const [styles, setStyles] = useState(review.styles ?? 0);
  const [individuality, setIndividuality] = useState(review.individuality ?? 0);
  const [atmosphere, setAtmosphere] = useState(review.atmosphere ?? 0);
  const [errorStatus, setErrorStatus] = useState({ status: 0 });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const calculatedRating = getSumReviewStatistic({
      rhymes,
      rhythm,
      styles,
      individuality,
      atmosphere,
    });

    try {
      await updateReview({
        reviewId: id,
        updatedReview: {
          description,
          rating: calculatedRating,
          rhymes,
          rhythm,
          styles,
          individuality,
          atmosphere,
        },
      }).unwrap();

      setOpen(false);
      window.location.reload();
    } catch (error) {
      const apiError = error as { status: number };
      !!error && setErrorStatus({ status: apiError.status });
      console.error("Post review failed:", error);
    }
  };

  return (
    <BodyForm onSubmit={handleSubmit}>
      <ContentWrapper>
        <CommentWrapper>
          <MultipleInput
            title={language.comment}
            placeholder={language.addComment}
            isRequired={true}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </CommentWrapper>

        <ReviewStatisticForm
          review={{ rhymes, rhythm, styles, individuality, atmosphere }}
          rating={rating}
          setRhymes={setRhymes}
          setRhythm={setRhythm}
          setStyles={setStyles}
          setIndividuality={setIndividuality}
          setAtmosphere={setAtmosphere}
        />
      </ContentWrapper>

      {errorStatus.status === 400 && (
        <ErrorText>{language.requiredFields}</ErrorText>
      )}

      <ButtonsWrapper>
        <BlackWhiteButton
          color="black"
          title={language.cancel}
          click={() => setOpen(false)}
        />
        <BlackWhiteButton
          color="white"
          title={language.save}
          buttonType="submit"
        />
      </ButtonsWrapper>
    </BodyForm>
  );
};
