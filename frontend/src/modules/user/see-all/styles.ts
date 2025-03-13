import { device } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { HomePageList } from "@/modules/user/home/styles";
import { LibraryPageCount, LibraryPageTitle } from "@/modules/user/library/styles";

export const SeeAllSection = styled("section")`
  padding: 80px 40px 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  @media ${device.mobile} {
    padding: 70px 30px 20px;
    row-gap: 20px;
  }

  @media ${device.mobileL} {
    padding: 70px 20px 20px;
    row-gap: 15px;
  }

  @media ${device.mobileM} {
    padding: 60px 10px 10px;
    row-gap: 10px;
  }
`;

export const SeeAllTitle = styled(LibraryPageTitle)``;

export const SeeAllCount = styled(LibraryPageCount)``;

export const SeeAllAlbumsList = styled(HomePageList)``;

