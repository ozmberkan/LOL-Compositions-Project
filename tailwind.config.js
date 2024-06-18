/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sourceSansPro: ["Source Sans 3", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
      },
    },
  },
  plugins: [],
};
