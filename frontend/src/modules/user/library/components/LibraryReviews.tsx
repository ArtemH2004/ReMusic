import { ReviewLoading } from "@/common/components/loading/ReviewLoading";
import { Reviews } from "@/common/components/review/Reviews";
import { getLanguage } from "@/common/helpers/getLanguage";
import {
  LibraryPageReviewsList,
  LibraryPageCount,
  LibraryPageHeader,
  LibraryPageTitle,
  LibraryPageNotFound,
} from "@/modules/user/library/styles";
import { useGetAllFavoritesReviewsByUserIdQuery } from "@/store/reducers/favorite/favoriteReviewApi";

export const LibraryReviews = () => {
  const language = getLanguage();
  const { data, isLoading } = useGetAllFavoritesReviewsByUserIdQuery();

  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>
          {language.likedReviews}{" "}
          <LibraryPageCount>{`(${!!data ? data.length : 0})`}</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageReviewsList>
        {isLoading ? (
          <>
            <ReviewLoading />
          </>
        ) : data?.length !== 0 ? (
          data?.map((data) => (
            <Reviews
              key={data.review.id}
              review={data.review}
              artist={data.artist}
              album={data.album}
              song={data.song}
              isLoading={isLoading}
            />
          ))
        ) : (
          <LibraryPageNotFound>{language.notFound}</LibraryPageNotFound>
        )}
      </LibraryPageReviewsList>
    </>
  );
};
