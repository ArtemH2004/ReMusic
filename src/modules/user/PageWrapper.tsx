import { Header } from "@/common/components/header/Header";
import { NavPanel } from "@/common/components/navPanel/NavPanel";
import { colors } from "@/common/styles/styleConstants";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled("div")`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: grid;
  grid-template-columns: 20% 80%;
`;

const ContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 80px;
  background-color: ${colors.blackAccent};
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
