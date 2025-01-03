import { Review } from "@/common/components/review/Review";
import { LibraryPageReviewsList, LibraryPageCount, LibraryPageHeader, LibraryPageTitle } from "@/modules/user/library/styles";

export const LibraryReviews = () => {
  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>Liked Reviews <LibraryPageCount>(27)</LibraryPageCount>
        </LibraryPageTitle>
      </LibraryPageHeader>

      <LibraryPageReviewsList>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </LibraryPageReviewsList>
    </>
  );
};
