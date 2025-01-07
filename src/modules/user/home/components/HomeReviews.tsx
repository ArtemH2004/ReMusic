import { Review } from "@/common/components/review/Review";
import { ReviewList } from "@/common/components/review/styles";
import { getLanguage } from "@/common/helpers/getLanguage";
import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { HomePageHeader, HomePageSection, HomePageTitle } from "@/modules/user/home/styles";

export const HomeReviews = () => {
  const language = getLanguage();
  
  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>{language.topReviews}</HomePageTitle>
        <ButtonSeeAll />
      </HomePageHeader>

      <ReviewList>
        <Review />
      </ReviewList>
    </HomePageSection>
  );
};
