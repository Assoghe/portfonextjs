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
        letterSpacing: '0.03375rem',
        fontWeight: '400',
      }],
      'sm': ['0.8rem', {
        lineHeight: '1.4rem',
        letterSpacing: '0.02813rem',
        fontWeight: '300',
      }],
      'base': ['0.85rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0.03375rem',
        fontWeight: '400',
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
      '5xl': ['2.3rem', {
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

      secondary: {
        100: "#FFE3ED",
        200: "#FFC7E0",
        300: "#FFABD9",
        400: "#FF95DA",
        DEFAULT: "#FF73DC",
        600: "#DB54C6",
        700: "#B739B0",
        800: "#8F2493",
        900: "#6C167A",
      },
    },

    extend: {
      
    },
  },
  plugins: [],
};
export default config;
