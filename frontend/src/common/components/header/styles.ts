import { flexCenter } from "@/common/styles/mixins";
import { device } from "@/common/styles/styleConstants";
import styled from "styled-components";

export const HeaderWrapper = styled("header")`
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50%;
  z-index: 10;

  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
  padding-inline: 40px;

  @media ${device.mobile} {
    padding-inline: 30px;
    height: 70px;
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    padding-inline: 20px;
    height: 60px;
    column-gap: 5px;
  }
`;

export const HeaderContentWrapper = styled("div")`
  ${flexCenter}
  column-gap: 22px;

  @media ${device.mobileL} {
    column-gap: 15px;
  }

  @media ${device.mobileM} {
    column-gap: 10px;
  }
`;

export const HeaderLibraryWrapper = styled("div")`
  @media ${device.tablet} {
    display: none;
  }
`;
