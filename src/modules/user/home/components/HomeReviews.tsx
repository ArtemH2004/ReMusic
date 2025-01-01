import { ButtonSeeAll } from "@/common/styles/tags/button/ButtonSeeAll";
import { HomePageHeader, HomePageSection, HomePageTitle } from "@/modules/user/home/styles";

export const HomeReviews = () => {
  return (
    <HomePageSection>
      <HomePageHeader>
        <HomePageTitle>Top Reviews</HomePageTitle>
        <ButtonSeeAll />
      </HomePageHeader>
    </HomePageSection>
  );
};
