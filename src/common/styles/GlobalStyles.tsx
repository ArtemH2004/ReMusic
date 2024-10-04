import styled, { createGlobalStyle } from "styled-components";
import {
  colors,
  device,
  screen,
  transitions,
} from "@/common/styles/styleConstants";
import { resetLink, scrollBar } from "@/common/styles/mixins";

export const Container = styled("div")`
  max-width: calc(${screen.containerScreenWidth}px + 25px * 2);
  padding-inline: 25px;
  margin: 0 auto;

  @media ${device.mobileL} {
    max-width: calc(${screen.containerScreenWidth}px + 10px * 2);
    padding-inline: 10px;
  }

  @media ${device.mobileM} {
    max-width: calc(${screen.containerScreenWidth}px + 5px * 2);
    padding-inline: 5px;
  }
`;

export const VisuallyHidden = styled("span")`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(100%) !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;
`;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  :where(ul, ol):where([class]) {
    padding-left: 0;
  } 
  body,
  :where(blockquote, figure):where([class]) {
    margin: 0;
  } 
  :where(h1, h2, h3, h4, h5, h6, p, ul, ol, dl):where([class]) {
    margin-block: 0;
  } 
  :where(dd[class]) {
    margin-left: 0;
  } 
  :where(fieldset[class]) {
    margin-left: 0;
    padding: 0;
    border: none;
  } 
  :where(ul[class]) {
    list-style: none;
  } 
  p {
    margin-block: 0;
  } 
  p:where(:not([class]):not(:last-child)) {
    margin-bottom: var(--paragraphMarginBottom);
  } 
  img {
    display: block;
    max-width: 100%;
  } 
  input,
  textarea,
  select,
  button {
    font: inherit;
  } 
  html {
    height: 100%;
    scroll-behavior: smooth;
  } 
  body {
    min-height: 100%;
    line-height: 1.5;
  } 
  svg *[fill] {
    fill: currentColor;
  }
  svg *[stroke] {
    stroke: currentColor;
  } 
  svg * {
    transition-property: fill, stroke;
  } 

  html,
  body {
    scrollbar-gutter: stable;
  }

  body {
    font-family: "Montserrat", sans-serif;
    background-color: ${colors.grayBackground};
    color: ${colors.blackTotal};

    scrollbar-color: ${colors.grayAccent};
    scrollbar-width: thin;
  } 

  a:hover,
  button:hover {
    cursor: pointer;
  } 

  ${scrollBar}

  a,
  button,
  input,
  textarea,
  svg * {
    user-select: none;
    transition: ${transitions.fastTransition};
  }
  a {
    ${resetLink};
    color: ${colors.blackTotal};
  }
`;
