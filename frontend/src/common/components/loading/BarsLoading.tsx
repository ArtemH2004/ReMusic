import styled, { keyframes } from "styled-components";

const l7 = keyframes`
  0% {
    background-size: 20% 50%, 20% 50%, 20% 50%;
  }
  20% {
    background-size: 20% 20%, 20% 50%, 20% 50%;
  }
  40% {
    background-size: 20% 100%, 20% 20%, 20% 50%;
  }
  60% {
    background-size: 20% 50%, 20% 100%, 20% 20%;
  }
  80% {
    background-size: 20% 50%, 20% 50%, 20% 100%;
  }
  100% {
    background-size: 20% 50%, 20% 50%, 20% 50%;
  }
`;

const Loader = styled("div")`
  width: 30px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#fff 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  animation: ${l7} 1.5s infinite ease alternate;
`;

export const BarsLoading = () => {
  return <Loader />;
};
