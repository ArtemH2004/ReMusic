import {
  clampText,
  flexCenter,
  linearGradient,
} from "@/common/styles/mixins";
import { colors, fonts } from "@/common/styles/styleConstants";
import styled from "styled-components";
import { Section } from "@/modules/user/PageWrapper";

export const HomeNewSection = styled(Section)`
  padding-top: 80px;
  ${linearGradient(colors.red, colors.blackAccent)}
`;

export const HomeNewTitle = styled("h2")`
  ${clampText(fonts.sizes.titleMobile, fonts.sizes.title)}
`;

export const HomeNewList = styled("ul")`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 15px;
  column-gap: 30px;
  overflow-x: auto; 
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const HomePageSection = styled(Section)``;

export const HomePageHeader = styled("header")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
`;

export const HomePageTitle = styled("h2")`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
`;

export const HomePageList = styled("ul")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const HomePageItem = styled("li")`
  ${flexCenter}
`;
