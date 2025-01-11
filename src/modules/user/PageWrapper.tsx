import { Header } from "@/common/components/header/Header";
import { NavPanel } from "@/common/components/navPanel/NavPanel";
import { Player } from "@/common/components/player/Player";
import { colors, device } from "@/common/styles/styleConstants";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled("div")<{$isPlayer: boolean}>`
  width: 100%;
  min-height: 100vh;
  padding-bottom: ${(props) => props.$isPlayer && '80px'};

  position: relative;
  display: grid;
  grid-template-columns: 20% 80%;

  @media ${device.tablet} {
    grid-template-columns: 30% 70%;
  }

  @media ${device.mobile} {
    grid-template-columns: 100%;
    padding-bottom: ${(props) => props.$isPlayer && '70px'};
  }

  @media ${device.mobileM} {
    padding-bottom: ${(props) => props.$isPlayer && '60px'};
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

  @media ${device.mobileL} {
    padding: 15px 20px;
    row-gap: 15px;
  }

  @media ${device.mobileM} {
    padding: 10px;
    row-gap: 10px;
  }
`;

export const PageWrapper = () => {
  const [isPlayerOpen, setPlayerOpen] = useState(true);
  return (
    <Wrapper $isPlayer={isPlayerOpen}>
      <NavPanel />
      <ContentWrapper>
        <Header />
        <Outlet />
      </ContentWrapper>

      {isPlayerOpen && <Player setClose={setPlayerOpen} />}
    </Wrapper>
  );
};
