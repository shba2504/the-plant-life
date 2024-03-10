/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Raleway", "sans-serif"],
        header: ["'Tenor Sans'", "sans-serif"],
    },
      colors: {
        banner: "hsl(52, 71%, 96%)",
        green: "hsl(148, 96%, 20%)",
        gray: "hsl(0, 0%, 97%)",
        drkgray: "hsl(217, 14%, 39%)",
        transparent: "hsl(0, 0%, 93%, 75%)",
      },
    },
  },
  plugins: [],
}

