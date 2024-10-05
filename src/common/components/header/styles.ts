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
  column-gap: 50px;
  padding-inline: 40px;
`;
