import { ReviewLoading } from "@/common/components/loading/ReviewLoading";
import { Reviews } from "@/common/components/review/Reviews";
import { ReviewList } from "@/common/components/review/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import {
  HomePageHeader,
  HomePageSection,
  HomePageTitle,
} from "@/modules/user/home/styles";
import { useGetAllReviewsQuery } from "@/store/reducers/review/reviewApi";

export const HomeReviews = () => {
  const { data, isLoading } = useGetAllReviewsQuery();
  const language = getLanguage();

  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>{language.newReviews}</HomePageTitle>
        <ButtonSeeAll />
      </HomePageHeader>

      <ReviewList>
        {isLoading ? (
          <ReviewLoading />
        ) : (
          data?.map((item) => (!!item &&  
            <Reviews
              key={item.review.id}
              review={item.review}
              artist={item.artist}
              album={item.album}
              song={item.song}
              isLoading={isLoading}
            />
          ))
        )}
      </ReviewList>
    </HomePageSection>
  );
};
