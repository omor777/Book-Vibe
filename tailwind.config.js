/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      fontFamily: {
        "work-sans": ["'Work Sans', 'sans-serif'"],
        "playFair-display": ["'Playfair Display', 'serif'"],
      },
      colors: {
        black: {
          100: "#131313",
          80: "#131313CC",
          70: "#131313B2",
          60: "#13131399",
          5: "#1313130D",
        },
        green: {
          900: "#23BE0A",
          5: "#23BE0A0D",
        },
        "sky-blue": "#59C6D2",
        "sky-blue-2": "#50B1C9",
        "blue-100": "#328EFF",
        "blue-5": "#328EFF26",
        "gold-100": "#FFAC33",
        "gold-15": "#FFAC3326",
      },
      fontSize: {
        "28px": "1.75rem",
        "40px": "2.5rem",
      },
      lineHeight: {
        "26px": "1.625rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
