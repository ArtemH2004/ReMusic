import { Review } from "@/common/components/review/Review";
import { ReviewList } from "@/common/components/review/styles";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { HomePageHeader, HomePageSection, HomePageTitle } from "@/modules/user/home/styles";

export const HomeReviews = () => {
  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>Top Reviews</HomePageTitle>
        <ButtonSeeAll />
      </HomePageHeader>

      <ReviewList>
        <Review />
      </ReviewList>
    </HomePageSection>
  );
};
