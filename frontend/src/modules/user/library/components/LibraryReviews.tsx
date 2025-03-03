import { ReviewLoading } from "@/common/components/loading/ReviewLoading";
import { Reviews } from "@/common/components/review/Reviews";
import { getLanguage } from "@/common/helpers/getLanguage";
import { useAppSelector } from "@/common/hooks/useAppSelector";
import {
  LibraryPageReviewsList,
  LibraryPageCount,
  LibraryPageHeader,
  LibraryPageTitle,
} from "@/modules/user/library/styles";
import { useGetAllFavoritesReviewsByUserIdQuery } from "@/store/reducers/favorite/favoriteReviewApi";

export const LibraryReviews = () => {
  const language = getLanguage();
  const authorizedUserId = useAppSelector(
    (state) => state.userReducer.authorizedUser.id
  );
  const { data: review, isLoading } =
    useGetAllFavoritesReviewsByUserIdQuery(authorizedUserId);

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>
          {language.likedReviews} <LibraryPageCount>{`(${!!review ? review.length : 0})`}</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageReviewsList>
        {isLoading ? (
          <>
            <ReviewLoading />
          </>
        ) : (
          review?.map((review) => <Reviews key={review.id} review={review} />)
        )}
      </LibraryPageReviewsList>
    </>
  );
};
