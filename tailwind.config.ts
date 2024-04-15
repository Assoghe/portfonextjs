import type { Config } from "tailwindcss";

const config: Config = {
  content: [
  "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
        fontWeight: '500',
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


    extend: {
      
    },
  },
  plugins: [],
};
export default config;
