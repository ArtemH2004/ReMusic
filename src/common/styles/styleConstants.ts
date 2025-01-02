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
  whiteActive: "rgba(255, 255, 255, .3)",
  whiteHover: "rgba(255, 255, 255, .1)",

  //Gray
  grayText: "rgba(179, 179, 179, 1)",
  grayHover: "rgba(170, 170, 170, .4)",
  grayActive: "rgba(160, 160, 160, .3)",
  grayScrollBar: "rgba(155, 155, 155, .5)",
  grayScrollBarHover: "rgba(140, 140, 140, .5)",
  grayScrollBarActive: "rgba(130, 130, 130, .5)",
  grayPlaceholder: "rgba(117, 117, 117, 1)",

  //Black
  blackTotal: "rgba(0, 0, 0, 1)",
  blackBackground: "rgba(7, 7, 7, 1)",
  blackAccent: "rgba(18, 18, 18, 1)",
  blackCover: "rgba(27, 27, 27, 1)",
  blackPlaylist: "rgba(0, 0, 0, .5)",
  blackShadow: "rgba(0, 0, 0, .1)",

  //Red
  red: "rgba(255, 0, 0, 1)",

  //Statistic
  value0: "rgba(255, 0, 0, 1)",
  value1: "rgba(255, 50, 0, 1)",
  value2: "rgba(255, 100, 0, 1)",
  value3: "rgba(255, 150, 0, 1)",
  value4: "rgba(255, 200, 0, 1)",
  value5: "rgba(255, 255, 0, 1)",
  value6: "rgba(200, 255, 0, 1)",
  value7: "rgba(150, 255, 0, 1)",
  value8: "rgba(100, 255, 0, 1)",
  value9: "rgba(50, 255, 0, 1)",
  value10: "rgba(0, 255, 0, 1)",
};

export const shadows = {
  defaultShadow: `0 0 10px 10px ${colors.blackShadow}`,
  grayShadow: `0px 0px 0px 2px ${colors.grayPlaceholder}`,
};

export const borders = {
  defaultBorder: `1px solid ${colors.blackTotal}`,
  grayBorder: `1px solid ${colors.grayScrollBar}`,
  
  smallBorderRadius: "5px",
  mediumBorderRadius: "20px",
  searchBorderRadius: "25px",
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
    extraTitle: 100,
    extraTitleMobile: 60,
    title: 40,
    titleMobile: 30,
    subtitle: 30,
    subtitleMobile: 25,

    main: 18,
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
