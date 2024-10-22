import { components } from "./components";
import { typography } from "./typography";
import {
  blue,
  gold,
  paste,
  marron,
  orange,
  bluish,
  primary,
  success,
  warning,
  themeColors,
} from "./theme-colors";

const THEMES = {
  GIFT: "GIFT",
  HEALTH: "HEALTH",
  DEFAULT: "DEFAULT",
  GROCERY: "GROCERY",
  PASTE: "PASTE",
  ORANGE: "ORANGE",
  GOLD: "GOLD",
  BLUISH: "BLUISH",
  GREEN: "GREEN",
  YELLOW: "YELLOW",
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1600,
    xxl: 1920,
  },
};

/*
WE CREATED MULTIPLE THEME OPTIONS FOR DIFFERENT SHOP VARIATION.

YOU CAN JUST KEEP [THEMES.DEFAULT] AND REMOVE OTHER THEME OPTIONS.
*/
const themesOptionList = {
  [THEMES.DEFAULT]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...primary, light: primary[100] }, ...themeColors },
  },
  [THEMES.GROCERY]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...primary, light: primary[100] }, ...themeColors },
  },
  [THEMES.PASTE]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...paste, light: paste[100] }, ...themeColors },
  },
  [THEMES.HEALTH]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...blue, light: blue[100] }, ...themeColors },
  },
  [THEMES.GIFT]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...marron, light: marron[100] }, ...themeColors },
  },
  [THEMES.ORANGE]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...orange }, ...themeColors },
  },
  [THEMES.GOLD]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...gold }, ...themeColors },
  },
  [THEMES.BLUISH]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...bluish }, ...themeColors },
  },
  [THEMES.GREEN]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...success }, ...themeColors },
  },

  [THEMES.YELLOW]: {
    typography,
    components,
    breakpoints,
    palette: { primary: { ...warning }, ...themeColors },
  },
};

export default function themeOptions(pathname: string) {
  const themeMappings = [
    { paths: ["/grocery-4"], theme: THEMES.GREEN },
    { paths: ["/gift-shop"], theme: THEMES.GIFT },
    { paths: ["/furniture-2"], theme: THEMES.ORANGE },
    { paths: ["/furniture-3"], theme: THEMES.GOLD },
    { paths: ["/furniture-1", "/medical"], theme: THEMES.PASTE },
    {
      paths: ["/gadget-3", "/health-beauty", "/admin", "/vendor"],
      theme: THEMES.HEALTH,
    },
  ];

  const selectedMapping = themeMappings.find((mapping) =>
    mapping.paths.some((path) => pathname.startsWith(path)),
  );

  const themeOption =
    themesOptionList[selectedMapping?.theme || THEMES.DEFAULT];

  /*
    IF YOU REMOVE THE themeMappings, selectedMapping and themeOption. YOU NEED TO ASSIGN VALUE TO themeOptions
    E.G. const themeOption = themesOptions[THEMES.DEFAULT];
  */
  // const themeOption = themesOptions[THEMES.DEFAULT];

  return themeOption;
}
