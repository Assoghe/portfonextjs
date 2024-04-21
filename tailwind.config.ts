import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "490px",
      tablet: "1040px",
      desktop: "1620px",
    },
    fontSize: {
      'sm': ['0.9375rem', {
        lineHeight: '1.8rem',
        letterSpacing: '0.02813rem',
        fontWeight: '300',
      }],
      'base': ['1.125rem', {
        lineHeight: '1.8rem',
        letterSpacing: '0.03375rem',
        fontWeight: '300',
      }],
      'lg': ['0.93rem', {
        lineHeight: '1.575rem',
        letterSpacing: '0.0375rem',
        fontWeight: '400',
      }],
      'xl': ['0.9375rem', {
        lineHeight: '1.40625rem',
        letterSpacing: '0.075rem',
        fontWeight: '400',
      }],
      '2xl': ['1.125rem', {
        lineHeight: '2.7rem',
        letterSpacing: '0.045rem',
        fontWeight: '400',
      }],
      '3xl': ['1.3125rem', {
        lineHeight: '2.7rem',
        letterSpacing: '0.105rem',
        fontWeight: '400',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '3.6rem',
        letterSpacing: '0.18rem',
        fontWeight: '400',
      }],
      '5xl': ['2.5rem', {
        lineHeight: '4.5rem',
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
        100: "#FFF4EA",
        200: "#FFE6D6",
        300: "#FFD6C2",
        400: "#FFC6B3",
        DEFAULT: "#FFAC9A",
        600: "#DB7B70",
        700: "#B7504D",
        800: "#933135",
        900: "#7A1D29",
      },
    },

    extend: {
      
    },
  },
  plugins: [],
};
export default config;
