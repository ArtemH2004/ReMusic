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
import {
  useDeleteFavoriteReviewMutation,
  usePostFavoriteReviewMutation,
} from "@/store/reducers/favorite/favoriteReviewApi";
import { useEffect, useState } from "react";
import { User } from "@/store/reducers/user/types";
import { Album } from "@/store/reducers/album/types";
import { Song } from "@/store/reducers/song/types";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { useDeleteReviewByIdMutation } from "@/store/reducers/review/reviewApi";
import { Modal } from "@/common/components/modal/Modal";
import { ModalConfirm } from "@/common/components/modal/ModalConfirm";

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
  const authorizedUser = useAppSelector(
    (state) => state.userReducer.authorizedUser
  );
  const date = getFullDate(review.created_at);
  const language = getLanguage();
  const [liked, setLiked] = useState(review.liked);
  const [setFavorite] = usePostFavoriteReviewMutation();
  const [deleteFavorite] = useDeleteFavoriteReviewMutation();
  const [deleteReview] = useDeleteReviewByIdMutation();

  const [isModalDeleteOpen, setModalDeleteOpen] = useState(false);

  useEffect(() => {
    setLiked(review.liked);
  }, [review.liked]);

  const handleFavoriteClick = () => {
    if (!liked) {
      setFavorite(review.id).then(() => setLiked(true));
    } else {
      deleteFavorite(review.id).then(() => setLiked(false));
    }
  };

  const handleDeleteReview = () => {
    setModalDeleteOpen(true);
  };

  const handleModalDeleteCancel = () => {
    setModalDeleteOpen(false);
  }

  const handleModalDeleteConfirm = () => {
    setModalDeleteOpen(false);
    deleteReview(review.id);
    window.location.reload();
  }

  return (
    <>
      {isModalDeleteOpen && (
        <Modal
          title={language.deleteReview}
          isOpen={isModalDeleteOpen}
          setOpen={setModalDeleteOpen}
          children={
            <ModalConfirm
            text={language.deleteReviewText}
            buttonOneTitle={language.cancel}
            buttonTwoTitle={language.delete}
            onButtonOneClick={handleModalDeleteCancel}
            onButtonTwoClick={handleModalDeleteConfirm}
            />
          }
        />
      )}
      <ReviewItem $isAccentColor={isAccentColor}>
        <ReviewHeader>
          <ReviewHeaderWrapper>
            <ReviewAuthorImg src={img} alt={review.user_name} />
            <ReviewAuthorColumnWrapper>
              <ReviewAuthorName>{review.user_name}</ReviewAuthorName>
              <ReviewAuthorTime>{date}</ReviewAuthorTime>
            </ReviewAuthorColumnWrapper>
          </ReviewHeaderWrapper>

          <ReviewHeaderWrapper>
            {authorizedUser.id === review.user_id && (
              <>
                <ButtonWithIcon
                  size={45}
                  icon="player/edit"
                  title={language.edit}
                  // click={handleFavoriteClick}
                />
                <ButtonWithIcon
                  size={45}
                  icon="player/bin"
                  title={language.delete}
                  click={handleDeleteReview}
                />
              </>
            )}
            <ButtonWithIcon
              size={45}
              icon={liked ? "player/delete" : "player/add"}
              title={liked ? language.delete : language.add}
              click={handleFavoriteClick}
            />
          </ReviewHeaderWrapper>
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
    </>
  );
};
