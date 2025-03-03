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
import { getImgByName } from "@/common/helpers/getImgByName";
import { getFullDate } from "@/common/helpers/getFullDate";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  useDeleteFavoriteReviewMutation,
  useGetFavoriteReviewByIdAndUserIdQuery,
  usePostFavoriteReviewMutation,
} from "@/store/reducers/favorite/favoriteReviewApi";
import { useEffect, useState } from "react";
import { User } from "@/store/reducers/user/types";
import { Album } from "@/store/reducers/album/types";
import { Song } from "@/store/reducers/song/types";

const defaultUserImg = "/public/images/default-user.svg";

interface ReviewProps {
  review: Review;
  artist?: User;
  album?: Album;
  song?: Song;
  isLoading: boolean;
  isAccentColor?: boolean;
}
export const Reviews = ({
  review,
  artist,
  album,
  song,
  isLoading,
  isAccentColor,
}: ReviewProps) => {
  const img = !!review.user_photo
    ? getImgByName(review.user_photo)
    : defaultUserImg;
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
          <ReviewAuthorImg src={img} alt={review.user_name} />
          <ReviewAuthorColumnWrapper>
            <ReviewAuthorName>{review.user_name}</ReviewAuthorName>
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

        <ReviewStatistic
          isLoading={isLoading}
          artist={artist}
          album={album}
          song={song}
          review={review}
          username={review.user_name}
        />
      </ReviewContentWrapper>
    </ReviewItem>
  );
};
