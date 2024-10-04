export const screen = {
  fullScreenWidth: 1440,
  containerScreenWidth: 1110,

  desktopScreenWidth: "1440px",
  desktopScreenWidthAbove: "1441px",

  tabletScreenWidth: "1024px",
  tabletScreenWidthAbove: "1025px",

  mobileScreenWidth: "768px",
  mobileScreenWidthAbove: "769px",

  lMobileScreenWidth: "480px",
  lMobileScreenWidthAbove: "481px",

  mMobileScreenWidth: "375px",
  mMobileScreenWidthAbove: "376px",

  sMobileScreenWidth: "320px",
  sMobileScreenWidthAbove: "321px",
};

//HELPER use in styled-components: @media ${device.tablet} { ... }
export const device = {
  desktopAbove: `(min-width: ${screen.desktopScreenWidthAbove})`,
  desktop: `(max-width: ${screen.desktopScreenWidth})`,

  tabletAbove: `(min-width: ${screen.tabletScreenWidthAbove})`,
  tablet: `(max-width: ${screen.tabletScreenWidth})`,

  mobileAbove: `(min-width: ${screen.mobileScreenWidthAbove})`,
  mobile: `(max-width: ${screen.mobileScreenWidth})`,

  mobileLAbove: `(min-width: ${screen.lMobileScreenWidthAbove})`,
  mobileL: `(max-width: ${screen.lMobileScreenWidth})`,

  mobileMAbove: `(min-width: ${screen.mMobileScreenWidthAbove})`,
  mobileM: `(max-width: ${screen.mMobileScreenWidth})`,

  mobileSAbove: `(min-width: ${screen.sMobileScreenWidthAbove})`,
  mobileS: `(max-width: ${screen.sMobileScreenWidth})`,
};

export const colors = {
  //White
  whiteTotal: "rgba(255, 255, 255, 1)",
  whiteAccent: "rgba(245, 245, 245, 1)",

  //Gray
  grayBackground: "rgba(234, 234, 234, 1)",
  grayAccent: "rgba(210, 210, 210, 1)",
  grayHover: "rgba(200, 200, 200, 1)",
  grayActive: "rgba(170, 170, 170, 1)",
  grayText: "rgba(131, 131, 131, 1)",
  grayScrollBar: "rgba(155, 155, 155, 1)",
  grayScrollBarHover: "rgba(140, 140, 140, 1)",
  grayScrollBarActive: "rgba(130, 130, 130, 1)",

  //Black
  blackTotal: "rgba(0, 0, 0, 1)",
  blackAccent: "rgba(16, 16, 16, 1)",
  blackShadow: "rgba(0, 0, 0, .1)",
  blackShadowHover: "rgba(0, 0, 0, .3)",
  blackShadowActive: "rgba(0, 0, 0, .5)",

  //Red
  red: "rgba(255, 0, 0, 1)",

  //Orange
  orange: "rgba(255, 165, 66, 1)",
  orangeAccent: "rgba(255, 206, 127, 1)",

  //Green 
  green: 'rgba(33, 160, 56, 1)',

  //Blue
  blue: 'rgba(28, 28, 39, 1)',
};

export const shadows = {
  defaultShadow: `0 0 20px 0 ${colors.blackShadow}`,
  hoverShadow: `0 0 20px 0 ${colors.blackShadowHover}`,
  activeShadow: `0 0 20px 0 ${colors.blackShadowActive}`,
};

export const borders = {
  defaultBorder: `1px solid ${colors.blackTotal}`,
  grayBorder: `1px solid ${colors.grayScrollBar}`,
  
  smallBorderRadius: "5px",
  mediumBorderRadius: "20px",
  defaultBorderRadius: "30px",
  circleBorderRadius: "50%",

  outline: `${colors.blackTotal} solid 2px`,
};

export const transitions = {
  fastTransition: "all 0.2s ease 0s",
  mediumTransition: "all 0.3s ease 0s",
  lowTransition: "all 0.8s ease 0s",
};

export const fonts = {
  // size
  sizes: {
    title: 30,
    titleModal: 25,
    titleMobile: 22,
    subtitle: 20,
    subtitleMobile: 18,
    main: 17,
    mainMobile: 15,
    small: 15,
    smallMobile: 12,
    extraSmall: 13, 
    extraSmallMobile: 11,
  },

  // weight
  weights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  },
};
