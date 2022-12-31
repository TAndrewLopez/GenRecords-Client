/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        shopperBG: `url(/vinylShopper.jpg)`,
        recordPlayerClose: `url(/recordPlayerClose.jpg)`,
      },
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
        errorRed: "#cc0000",
        prim: "#2D4059",
        sec: "#EA5455",
        accent: "#F07B3F",
        highlight: "#FFD460",
      },
      animation: {
        loading: "1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
      },
    },
  },
  plugins: [],
};
