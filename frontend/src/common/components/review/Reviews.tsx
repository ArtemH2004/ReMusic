import {
  ReviewAuthorColumnWrapper,
  ReviewAuthorImg,
  ReviewAuthorName,
  ReviewAuthorTime,
  ReviewContentWrapper,
  ReviewDescription,
  ReviewHeader,
  ReviewHeaderWrapper,
  ReviewItem,
  ReviewLikesCount,
} from "@/common/components/review/styles";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ReviewStatistic } from "@/common/components/review/ReviewStatistic";
import { getLanguage } from "@/common/helpers/getLanguage";
import { Review } from "@/store/reducers/review/types";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { getImgByName } from "@/common/helpers/getImgByName";
import { getFullDate } from "@/common/helpers/getFullDate";

const defaultUserImg = '/public/images/default-user.svg';

interface ReviewProps {
  review: Review;
  isAccentColor?: boolean;
}
export const Reviews = ({review, isAccentColor}: ReviewProps) => {
  const {data: user} = useGetUserByIdQuery(review.user_id);
  const img = !!user?.photo ? getImgByName(user?.photo) : defaultUserImg;
  const date = getFullDate(review.created_at);
  const language = getLanguage();

  return (
    <ReviewItem $isAccentColor={isAccentColor}>
      <ReviewHeader>
        <ReviewHeaderWrapper>
          <ReviewAuthorImg
            src={img}
            alt={user?.username}
          />
          <ReviewAuthorColumnWrapper>
            <ReviewAuthorName>{user?.username}</ReviewAuthorName>
            <ReviewAuthorTime>{date}</ReviewAuthorTime>
          </ReviewAuthorColumnWrapper>
        </ReviewHeaderWrapper>

        <ReviewHeaderWrapper>
          <ReviewLikesCount>52</ReviewLikesCount>
          <ButtonWithIcon size={45} icon={"player/add"} title={language.add} />
        </ReviewHeaderWrapper>
      </ReviewHeader>

      <ReviewContentWrapper>
        <ReviewDescription>{review.description}</ReviewDescription>

        <ReviewStatistic review={review} username={user?.username || ""} />
      </ReviewContentWrapper>
    </ReviewItem>
  );
};
