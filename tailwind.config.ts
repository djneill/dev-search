import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#0079FF',
          secondary: '#697C9A',
          tertiary: '#4B6A9B',
          quaternary: '#2B3442',
          accent: '#F6F8FF',
          background: '#FEFEFE',
        },
        dark: {
          primary: '#0079FF',
          secondary: '#FFFFFF',
          tertiary: '#141D2F',
          quaternary: '#1E2A47',
        },
      },
    },
  },
  plugins: [],
};
export default config;
