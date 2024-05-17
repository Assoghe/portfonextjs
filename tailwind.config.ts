import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "490px",
      tablet: "1100px",
      desktop: "1620px",
    },
    fontSize: {
      'xs': ['0.7rem', {
        lineHeight: '0.9rem',
        letterSpacing: '0.02813rem',
        fontWeight: '300',
      }],

      'sm': ['0.85rem', {
        lineHeight: '1.4rem',
        letterSpacing: '0.02813rem',
        fontWeight: '300',
      }],
      'base': ['0.85rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0.03375rem',
        fontWeight: '300',
      }],
      'lg': ['0.93rem', {
        lineHeight: '1.3rem',
        letterSpacing: '0.0375rem',
        fontWeight: '400',
      }],
      'xl': ['0.9375rem', {
        lineHeight: '1.1em',
        letterSpacing: '0.075rem',
        fontWeight: '400',
      }],
      '2xl': ['1.125rem', {
        lineHeight: '2.3rem',
        letterSpacing: '0.045rem',
        fontWeight: '400',
      }],
      '3xl': ['1.3125rem', {
        lineHeight: '1.6rem',
        letterSpacing: '0.105rem',
        fontWeight: '400',
      }],
      '4xl': ['1.9rem', {
        lineHeight: '3rem',
        letterSpacing: '0.18rem',
        fontWeight: '400',
      }],
      '5xl': ['2.1rem', {
        lineHeight: '3.5rem',
        letterSpacing: '0.1rem',
        fontWeight: '400',
      }],
    },
    
    colors: {
      neutral: {
        DEFAULT: "#F7F7F8",
        100: "#EEEEF0",
        200: "#D9D9DE",
        300: "#B8B9C1",
        400: "#91939F",
        500: "#737584",
        600: "#5D5E6C",
        700: "#4C4D58",
        800: "#41414B",
        900: "#393941",
        950: "#18181B",
      },

      primary: {
        100: "#FFF0D4",
        200: "#FFDDA9",
        DEFAULT: "#FFB857",
        400: "#FE9F39",
        500: "#FC8113",
        600: "#ED6609",
        700: "#C54C09",
        800: "#9C3C10",
        900: "#7E3310",
      },

      secondary: {
        100: "#FDE6F5",
        200: "#FDCDED",
        DEFAULT: "#FDA4DD",
        400: "#FA6CC5",
        500: "#F440AC",
        600: "#E5278F",
        700: "#C6106F",
        800: "#A4105B",
        900: "#88134E",
      },
    },

    extend: {
      
    },
  },
  plugins: [],
};
export default config;
