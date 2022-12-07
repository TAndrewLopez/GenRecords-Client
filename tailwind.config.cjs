/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "shade-1": "#f8f9fa",
        "shade-2": "#e9ecef",
        "shade-3": "#dee2e6",
        "shade-4": "#ced4da",
        "shade-5": "#adb5bd",
        "shade-6": "#6c757d",
        "shade-7": "#495057",
        "shade-8": "#343a40",
        "shade-9": "#212529",
        prim: "#2D4059",
        sec: "#EA5455",
        accent: "#F07B3F",
        highlight: "#FFD460",
      },
    },
  },
  plugins: [],
};
