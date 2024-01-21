/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["35px", "50px"],
      "4xl": ["48px", "58px"],
      "5xl": ["64px", "72px"],
      "6xl": ["72px", "80px"],
      "7xl": ["80px", "88px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "dark-bg": "hsl(207, 26%, 17%)",
        "light-text": "hsl(200, 15%, 8%)",
        "light-input": "hsl(0, 0%, 52%)",
        "light-bg": "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
