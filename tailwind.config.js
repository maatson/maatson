/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      // => @media (min-width: 400px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      fontSize: {
        h1: "60px",
        "2xs": "10px",
        "3xs": "8px",
      },
      colors: {
        "primary-50": "#EAECF9",
        "primary-100": "#D7DAEE",
        "grey-a-50": "#E9E9E9",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16,24,40,.2)",
      },
      borderRadius: {
        sm: "8px",
      },
    },
  },
  plugins: [],
};
