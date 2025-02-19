import { Review } from "@/common/components/review/Reviews";
import { getLanguage } from "@/common/helpers/getLanguage";
import { LibraryPageReviewsList, LibraryPageCount, LibraryPageHeader, LibraryPageTitle } from "@/modules/user/library/styles";

export const LibraryReviews = () => {
  const language = getLanguage();
  
  return (
    <>
      <LibraryPageHeader>
        <LibraryPageTitle>{language.likedReviews} <LibraryPageCount>(27)</LibraryPageCount>
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
