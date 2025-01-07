import { Header } from "@/common/components/header/Header";
import { NavPanel } from "@/common/components/navPanel/NavPanel";
import { colors, device } from "@/common/styles/styleConstants";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled("div")`
  width: 100%;
  min-height: 100vh;

  position: relative;
  display: grid;
  grid-template-columns: 20% 80%;

  background-color: ${colors.blackAccent};

  @media ${device.tablet} {
    grid-template-columns: 30% 70%;
  }

  @media ${device.mobile} {
    grid-template-columns: 100%;
  }
`;

const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${colors.blackAccent};
`;

export const Section = styled("section")`
  width: 100%;
  padding: 25px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  @media ${device.mobile} {
    padding: 20px 30px;
    row-gap: 20px;
  }

  @media ${device.mobileM} {
    padding: 15px 20px;
    row-gap: 15px;
  }
`;

export const PageWrapper = () => {
  return (
    <Wrapper>
      <NavPanel />
      <ContentWrapper>
        <Header />
        <Outlet />
      </ContentWrapper>
    </Wrapper>
  );
};
