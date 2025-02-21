import { MultipleInput } from "@/common/styles/tags/textarea/MultipleInput";
import styled from "styled-components";
import { ReviewStatisticForm } from "@/common/components/review/ReviewStatisticForm";
import { getLanguage } from "@/common/helpers/getLanguage";
import { clampText, flexCenter } from "@/common/styles/mixins";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";
import { useState } from "react";
import { usePostReviewMutation } from "@/store/reducers/review/reviewApi";
import { getSumReviewStatistic } from "@/common/helpers/getSumReviewStatistic";
import { colors, fonts } from "@/common/styles/styleConstants";

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
  user_id: number;
  artist_id?: number;
  album_id?: number;
  song_id?: number;
  setOpen: (isOpen: boolean) => void;
}

export const ModalReview = ({
  user_id,
  artist_id,
  album_id,
  song_id,
  setOpen,
}: ModalReviewProps) => {
  const language = getLanguage();
  const [review] = usePostReviewMutation();
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [rhymes, setRhymes] = useState(0);
  const [rhythm, setRhythm] = useState(0);
  const [styles, setStyles] = useState(0);
  const [individuality, setIndividuality] = useState(0);
  const [atmosphere, setAtmosphere] = useState(0);
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
      await review({
        description,
        user_id,
        artist_id,
        album_id,
        song_id,
        rating: calculatedRating,
        rhymes,
        rhythm,
        styles,
        individuality,
        atmosphere,
      }).unwrap();

      setOpen(false);
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
            onChange={(e) => setDescription(e.target.value)}
          />
        </CommentWrapper>

        <ReviewStatisticForm
          review={{ rating, rhymes, rhythm, styles, individuality, atmosphere }}
          setRhymes={setRhymes}
          setRhythm={setRhythm}
          setStyles={setStyles}
          setIndividuality={setIndividuality}
          setAtmosphere={setAtmosphere}
        />
      </ContentWrapper>

      {errorStatus.status === 400 && <ErrorText>{language.requiredFields}</ErrorText>}

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
