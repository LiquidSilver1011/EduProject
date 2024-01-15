/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**.{js,jsx,ts,tsx}", "./src/pages/home.tsx"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

