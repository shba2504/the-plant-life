/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        tenor: ["'Tenor Sans'", "sans-serif"],
      },
      colors: {
        banner: "#F3F3BF",
        feature: "#02622F",
        heading: "#FCFAED",
        home: "#F7F7F7",
      }
    },
  },
  plugins: [],
}

