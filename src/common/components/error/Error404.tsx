import {
  clampHeight,
  clampText,
  clampWidth,
  flexCenter,
  resetLink,
} from "@/common/styles/mixins";
import { borders, colors, fonts } from "@/common/styles/styleConstants";
import styled, { keyframes } from "styled-components";
import { Logo } from "@/common/components/Logo";
import { Link } from "react-router-dom";
import { BlackWhiteButton } from "@/common/styles/tags/button/BlackWhiteButton";

const zero = "/src/common/images/icons/error/zero.svg";
const four = "/src/common/images/icons/error/four.svg";

const rotateCounterClockwise = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const Wrapper = styled("div")`
  ${flexCenter}
  flex-direction: column;
  row-gap: 50px;

  width: 100vw;
  height: 100vh;
  background-color: ${colors.blackAccent};
`;

const LogoWrapper = styled("div")`
  ${flexCenter}
  pointer-events: none;
  transform: scale(2);
`;

const SpanWrapper = styled("div")`
  ${flexCenter}
  column-gap: 10px;
`;
const SpanFour = styled("img")`
  ${clampWidth(100, 150)}
  ${clampHeight(100, 150)}
  ${flexCenter}
  object-fit: contain;
  object-position: center;
`;

const SpanZero = styled("img")`
  ${clampWidth(100, 150)}
  ${clampHeight(100, 150)}
  ${flexCenter}
  border-radius: ${borders.circleBorderRadius};
  animation: ${rotateCounterClockwise} 5s linear infinite;
  object-fit: contain;
  object-position: center;
`;

const SpanText = styled("span")`
  ${clampText(fonts.sizes.subtitleMobile, fonts.sizes.subtitle)}
  text-transform: uppercase;
  font-weight: ${fonts.weights.medium};
  color: ${colors.whiteTotal};
`;

const ButtonLink = styled(Link)`
  ${resetLink}
  ${flexCenter}
  ${clampWidth(200, 500)}
`;

export const Error404 = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SpanWrapper>
        <SpanFour src={four} alt="4" />
        <SpanZero src={zero} alt="0" />
        <SpanFour src={four} alt="4" />
      </SpanWrapper>

      <SpanText>Page Not Found</SpanText>
      <ButtonLink to="/home">
        <BlackWhiteButton color="black" title="Return To Home" />
      </ButtonLink>
    </Wrapper>
  );
};