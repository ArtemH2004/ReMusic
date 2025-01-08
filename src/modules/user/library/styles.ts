import styled from "styled-components";
import { Section } from "@/modules/user/PageWrapper";
import { HomePageHeader, HomePageTitle } from "@/modules/user/home/styles";
import { clampText, flexCenter } from "@/common/styles/mixins";
import { borders, colors, device, fonts } from "@/common/styles/styleConstants";

export const LibraryPageSection = styled(Section)`
  padding-top: 105px;

  @media ${device.mobile} {
    padding-top: 90px;
  }

  @media ${device.mobileL} {
    padding-top: 85px;
  }

  @media ${device.mobileM} {
    padding-top: 70px;
  }
`;

export const LibraryPageNavigationWrapper = styled("div")`
  margin-inline: 0 auto;

  @media ${device.tabletAbove} {
    display: none;
  }

  @media ${device.mobileL} {
    margin-inline: auto;
  }
`;

export const LibraryPageHeader = styled(HomePageHeader)``;

export const LibraryPageTitle = styled(HomePageTitle)`
  @media ${device.mobileL} {
    ${clampText(fonts.sizes.main, fonts.sizes.subtitleMobile)}
  }
`;

export const LibraryPageCount = styled("span")`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
  font-weight: ${fonts.weights.bold};
  color: ${colors.grayPlaceholder};

  @media ${device.mobileL} {
    ${clampText(fonts.sizes.main, fonts.sizes.subtitleMobile)}
  }
`;

export const LibraryPageAlbumsList = styled("ul")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }

  @media ${device.mobile} {
    gap: 20px;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media ${device.mobileM} {
    gap: 10px;
  }
`;

export const LibraryPageReviewsList = styled("ul")`
  width: 100%;
  ${flexCenter}
  flex-direction: column;
  row-gap: 30px;
`;

export const LibraryPageSongsList = styled("ul")`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${borders.smallBorderRadius};
  background-color: ${colors.blackCover};
`;
