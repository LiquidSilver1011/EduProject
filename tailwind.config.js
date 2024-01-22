/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home.html", "./explore.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:["dark"]
  },
}

