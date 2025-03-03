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
} from "@/common/components/review/styles";
import { ButtonWithIcon } from "@/common/styles/tags/button/ButtonWithIcon";
import { ReviewStatistic } from "@/common/components/review/ReviewStatistic";
import { getLanguage } from "@/common/helpers/getLanguage";
import { Review } from "@/store/reducers/review/types";
import { useGetUserByIdQuery } from "@/store/reducers/user/userApi";
import { getImgByName } from "@/common/helpers/getImgByName";
import { getFullDate } from "@/common/helpers/getFullDate";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  useDeleteFavoriteReviewMutation,
  useGetFavoriteReviewByIdAndUserIdQuery,
  usePostFavoriteReviewMutation,
} from "@/store/reducers/favorite/favoriteReviewApi";
import { useEffect, useState } from "react";

const defaultUserImg = "/public/images/default-user.svg";

interface ReviewProps {
  review: Review;
  isAccentColor?: boolean;
}
export const Reviews = ({ review, isAccentColor }: ReviewProps) => {
  const { data: user } = useGetUserByIdQuery(review.user_id);
  const img = !!user?.photo ? getImgByName(user?.photo) : defaultUserImg;
  const date = getFullDate(review.created_at);
  const language = getLanguage();
  const authorizedUserId = useAppSelector(
    (state) => state.userReducer.authorizedUser.id
  );
  const { data: isFavorite } = useGetFavoriteReviewByIdAndUserIdQuery({
    user_id: authorizedUserId,
    review_id: review.id,
  });
  const [isLike, setLike] = useState(!!isFavorite?.id ? true : false);
  const [setFavorite] = usePostFavoriteReviewMutation();
  const [deleteFavorite] = useDeleteFavoriteReviewMutation();

  const handleFavoriteClick = () => {
    if (!isLike) {
      setLike(true);
      setFavorite({ user_id: authorizedUserId, review_id: review.id });
    } else if (!!isFavorite && isLike) {
      setLike(false);
      deleteFavorite(isFavorite.id);
    }
  };

  useEffect(() => {
    !!isFavorite ? setLike(true) : setLike(false);
  }, [isFavorite]);

  return (
    <ReviewItem $isAccentColor={isAccentColor}>
      <ReviewHeader>
        <ReviewHeaderWrapper>
          <ReviewAuthorImg src={img} alt={user?.username} />
          <ReviewAuthorColumnWrapper>
            <ReviewAuthorName>{user?.username}</ReviewAuthorName>
            <ReviewAuthorTime>{date}</ReviewAuthorTime>
          </ReviewAuthorColumnWrapper>
        </ReviewHeaderWrapper>

          <ButtonWithIcon
            size={45}
            icon={isLike ? "player/delete" : "player/add"}
            title={isLike ? language.delete : language.add}
            click={handleFavoriteClick}
          />
      </ReviewHeader>

      <ReviewContentWrapper>
        <ReviewDescription>{review.description}</ReviewDescription>

        <ReviewStatistic review={review} username={user?.username || ""} />
      </ReviewContentWrapper>
    </ReviewItem>
  );
};
