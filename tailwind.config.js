/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home.html", "./explore.html", "./Courses/Sanitation/main.html","./Courses/Digital Literacy/main.html", "./settings.html","./Courses/Digital Literacy/Digital Literacy/Digital Literacy Videos/WhatIsAComputerVideo.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], 
  daisyui:{
    themes:[{
    mytheme: {
      "primary": "#114084",
      "secondary": "#3466AA",
      "accent": "#a78bfa",
      "neutral": "#82b7dc",
      "base-100": "#F1f1f1",
      "info": "#374151",
      "success": "#08a045",
      "warning": "#fb923c",
      "error": "#ef4444",
      },
    },
    ],
  },
}

