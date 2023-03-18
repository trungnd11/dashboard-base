export const Color = {
  orange: "#f3565d",
  white: "#fff",
  black: "#000",
  gray: "#D9D9D9",
  grayBland: "#f0f2f5",
  green: "#25A45E",
  greenBland: "#DEF1E7",
  red: "#ff4d4f",
  violet: "#5D2D88",
  violetBland: "#E4C7FF",
  blueLight: "#007dfdd9",
  defaultBtn: "#505050",
  blueText: "#0C83F1"
};

export const HeaderComponent = {
  height: "64px"
};

export const BorderRadius = {
  border6: "6px",
};

// Responsives
const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const Devices = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
