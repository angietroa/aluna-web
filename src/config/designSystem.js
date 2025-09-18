export const designSystem = {
  colors: {
    primary: "#4D7C0F",
    primaryLight: "#84CC16",
    primaryHover: "#5f8926",
    primaryDark: "#4D7C0F",
    secondary: "#DFF2BB",
    secondaryHover: "#e1f3c0",
    accent: "#F9FFEF",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    text: {
      primary: "#000000",
      secondary: "#4D7C0F",
    },
    white: "#FFFFFF",
    black: "#000000",
    success: "#4D7C0F",
    warning: "#4D7C0F",
    error: "#dc2626",
    info: "#4D7C0F",
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "24px",
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  layout: {
    sideMargin: 120,
    sideMarginMedium: 48,
    sideMarginMobile: 16,
    breakpoint: 768,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 12,
    xlarge: 16,
  },
  shadows: {
    small: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    medium: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    large: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export const getColorWithOpacity = (color, opacity) => {
  const hex = color.replace("#", "");
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const getSpacing = (multiplier = 1) => {
  return designSystem.spacing.md * multiplier;
};
