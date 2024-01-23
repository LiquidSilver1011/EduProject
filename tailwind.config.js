/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./home.html", "./explore.html"],
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
      "success": "#2563eb",
      "warning": "#fb923c",
      "error": "#ef4444",
      },
    },
    ],
  },
}

