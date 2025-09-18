import { createTheme } from "@mui/material/styles";
import { designSystem } from "../config/designSystem";

const mobileMargin = designSystem.layout.sideMarginMobile;
const mediumMargin = designSystem.layout.sideMarginMedium;
const desktopMargin = designSystem.layout.sideMargin;
const mobileBreakpoint = designSystem.layout.breakpoint;
const lgBreakpoint = designSystem.breakpoints.lg;

const mobileWidth = `calc(100vw - ${mobileMargin * 2}px)`;
const mediumWidth = `calc(100vw - ${mediumMargin * 2}px)`;
const desktopWidth = `calc(100vw - ${desktopMargin * 2}px)`;

const theme = createTheme({
  palette: {
    primary: {
      main: designSystem.colors.primaryDark,
      light: designSystem.colors.primaryLight,
      dark: designSystem.colors.primary,
    },
    secondary: {
      main: designSystem.colors.secondary,
      light: designSystem.colors.accent,
      dark: designSystem.colors.primaryDark,
    },
    background: {
      default: designSystem.colors.background,
      paper: designSystem.colors.surface,
    },
    text: {
      primary: designSystem.colors.text.primary,
      secondary: designSystem.colors.text.secondary,
    },
    success: {
      main: designSystem.colors.success,
    },
    warning: {
      main: designSystem.colors.warning,
    },
    error: {
      main: designSystem.colors.error,
    },
    info: {
      main: designSystem.colors.info,
    },
  },
  typography: {
    fontFamily: designSystem.typography.fontFamily,
    h1: designSystem.typography.h1,
    h2: designSystem.typography.h2,
    h3: designSystem.typography.h3,
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body: designSystem.typography.body,
  },
  shape: {
    borderRadius: designSystem.borderRadius.medium,
  },
  spacing: 0,
  breakpoints: {
    values: designSystem.breakpoints,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "0px !important",
          paddingRight: "0px !important",
          paddingBottom: "0px",
          marginBottom: "0px",
          overflowX: "hidden",
          boxSizing: "border-box",
          [`@media (max-width: ${mobileBreakpoint}px)`]: {
            marginLeft: `${mobileMargin}px`,
            marginRight: `${mobileMargin}px`,
            maxWidth: mobileWidth,
            width: mobileWidth,
          },

          [`@media (min-width: ${mobileBreakpoint + 1}px) and (max-width: ${
            lgBreakpoint - 1
          }px)`]: {
            marginLeft: `${mediumMargin}px`,
            marginRight: `${mediumMargin}px`,
            maxWidth: mediumWidth,
            width: mediumWidth,
          },

          [`@media (min-width: ${lgBreakpoint}px)`]: {
            marginLeft: `${desktopMargin}px`,
            marginRight: `${desktopMargin}px`,
            maxWidth: desktopWidth,
            width: desktopWidth,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: designSystem.colors.background,
            borderRadius: "8px",
            "& fieldset": {
              borderColor: designSystem.colors.primaryDark,
            },
            "&:hover fieldset": {
              borderColor: designSystem.colors.primaryDark,
            },
            "&.Mui-focused fieldset": {
              borderColor: designSystem.colors.primaryDark,
            },
          },
          "& .MuiInputBase-input": {
            color: designSystem.colors.primaryDark,
            fontSize: "18px",
            lineHeight: "24px",
            fontFamily: designSystem.typography.fontFamily,
            "&::placeholder": {
              color: designSystem.colors.primaryDark,
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          fontWeight: 700,
          lineHeight: "24px",
          fontFamily: designSystem.typography.fontFamily,
          textTransform: "none",
          borderRadius: "8px",
        },
        containedPrimary: {
          backgroundColor: designSystem.colors.primaryDark,
          color: designSystem.colors.background,
          "&:hover": {
            backgroundColor: designSystem.colors.primaryHover,
          },
        },
        containedSecondary: {
          backgroundColor: designSystem.colors.secondary,
          color: designSystem.colors.primaryDark,
          "&:hover": {
            backgroundColor: designSystem.colors.secondaryHover,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: designSystem.typography.fontFamily,
        },
        body: {
          fontSize: "18px",
          lineHeight: "24px",
          color: designSystem.colors.text.primary,
        },
        h1: {
          fontSize: "44px",
          lineHeight: "52px",
          fontWeight: 500,
        },
        h2: {
          fontSize: "28px",
          lineHeight: "34px",
          fontWeight: 500,
        },
        h3: {
          fontSize: "22px",
          lineHeight: "28px",
          fontWeight: 500,
        },
        h4: {
          fontSize: "16px",
          lineHeight: "22px",
          fontWeight: 400,
        },
        md: {
          fontSize: "20px",
          lineHeight: "24px",
          fontWeight: 400,
        },
      },
    },
  },
});

export default theme;
