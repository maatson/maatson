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
        "h-3xl": "118px",
        "h-2xl": "92px",
        "h-xl": "72px",
        h1: "60px",
        h2: "48px",
        h3: "36px",
        h4: "30px",
        h5: "24px",
        h6: "20px",
        "2xs": "10px",
        "3xs": "8px",
      },
      colors: {
        "primary-50": "#EAECF9",
        "primary-100": "#D7DAEE",
        "primary-200": "#C4C8E4",
        "primary-300": "#9EA4CF",
        "primary-400": "#525DA4",
        primary: "#2C398F",
        "primary-600": "#232E72",
        "primary-700": "#1A2256",
        "primary-800": "#121739",
        "primary-900": "#090B1D",

        "secondry-50": "#FDF6E9",
        "secondry-100": "#FCEED2",
        "secondry-200": "#F8DDA5",
        "secondry-300": "#F5CC79",
        "secondry-400": "#F1BB4C",
        secondry: "#EEAA1F",
        "secondry-600": "#BE8819",
        "secondry-700": "#8F6613",
        "secondry-800": "#5F440C",
        "secondry-900": "#302206",

        "tertiary-50": "#D7E6ED",
        "tertiary-100": "#C4D9E3",
        "tertiary-200": "#9FBECD",
        "tertiary-300": "#79A3B8",
        "tertiary-400": "#5488A2",
        tertiary: "#2E6D8D",
        "tertiary-600": "#255771",
        "tertiary-700": "#1C4155",
        "tertiary-800": "#122C38",
        "tertiary-900": "#09161C",

        "grey-ab-50": "#E9E9E9",
        "grey-ab-100": "#BABABA",
        "grey-ab-200": "#999999",
        "grey-ab-300": "#6A6A6A",
        "grey-ab-400": "#2B2A2A",
        "grey-ab": "#212121",
        "grey-ab-600": "#1E1E1E",
        "grey-ab-700": "#171717",
        "grey-ab-800": "#121212",
        "grey-ab-900": "#0E0E0E",

        "grey-50": "#FCFCFC",
        "grey-100": "#F6F6F6",
        "grey-200": "#F2F2F2",
        "grey-300": "#ECECEC",
        "grey-400": "#E8E8E8",
        grey: "#E2E2E2",
        "grey-600": "#CECECE",
        "grey-700": "#A0A0A0",
        "grey-800": "#7C7C7C",
        "grey-900": "#5F5F5F",

        "grey-aw-50": "#FDFDFD",
        "grey-aw-100": "#F9F9F9",
        "grey-aw-200": "#F7F7F7",
        "grey-aw-300": "#F3F3F3",
        "grey-aw-400": "#F1F1F1",
        "grey-aw": "#EDEDED",
        "grey-aw-600": "#D8D8D8",
        "grey-aw-700": "#A8A8A8",
        "grey-aw-800": "#828282",
        "grey-aw-900": "#646464",

        "warning-50": "#FFF5E9",
        "waarning-100": "#FFDEBA",
        "waarning-200": "#FFCF98",
        "waarning-300": "#FFB969",
        "waarning-400": "#FFAB4C",
        waarning: "#FF961F",
        "waarning-600": "#E8891C",
        "waarning-700": "#B56B16",
        "waarning-800": "#8C5311",
        "waarning-900": "#6B3F0D",

        "error-50": "#FDE6E6",
        "error-100": "#F8B0B0",
        "error-200": "#F58A8A",
        "error-300": "#F15455",
        "error-400": "#EE3334",
        error: "#EA0001",
        "error-600": "#C80008",
        "error-700": "#A60001",
        "error-800": "#810001",
        "error-900": "#620000",

        "success-50": "#E6FCEF",
        "success-100": "#B0F5CC",
        "success-200": "#8AF1B4",
        "success-300": "#54EA92",
        "success-400": "#33E67D",
        success: "#00E05C",
        "success-600": "#00CC54",
        "success-700": "#009F41",
        "success-800": "#007B33",
        "success-900": "#005E27",

        "green-50": "#E6F8F1",
        "green-100": "#B0EAD2",
        "green-200": "#8AE0BC",
        "green-300": "#54D29E",
        "green-400": "#33C98B",
        green: "#00BC6E",
        "green-600": "#00AB64",
        "green-700": "#00854E",
        "green-800": "#00673D",
        "green-900": "#004F2E",

        "blue-50": "#E6F4FF",
        "blue-100": "#B0DDFF",
        "blue-200": "#8ACCFF",
        "blue-300": "#54B5FF",
        "blue-400": "#33A7FF",
        blue: "#0091FF",
        "blue-600": "#0084E8",
        "blue-700": "#0067B5",
        "blue-800": "#00508C",
        "blue-900": "#003D6B",

        "pink-50": "#FFE6F9",
        "pink-100": "#FFB0EC",
        "pink-200": "#FF8AE3",
        "pink-300": "#FF54D7",
        "pink-400": "#FF33CF",
        pink: "#FF00C3",
        "pink-600": "#E800B1",
        "pink-700": "#B5008A",
        "pink-800": "#8C006B",
        "pink-900": "#6B0052",

        "red-50": "#FBE6E8",
        "red-100": "#F3B0B8",
        "red-200": "#ED8A96",
        "red-300": "#E55466",
        "red-400": "#E03348",
        red: "#D8001A",
        "red-600": "#C50018",
        "red-700": "#990012",
        "red-800": "#77000E",
        "red-900": "#5B000B",
      },

      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16,24,40,.2)",
        sm: "0px 0px 10px 0px rgba(0,0,0,.2)",
        // md: "0px 1px 2px 0px rgba(16,24,40,.2)",
        // lg: "0px 1px 2px 0px rgba(16,24,40,.2)",
        // xl: "0px 1px 2px 0px rgba(16,24,40,.2)",
        // "2xl": "0px 1px 2px 0px rgba(16,24,40,.2)",
        // "3xl": "0px 1px 2px 0px rgba(16,24,40,.2)",
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "32px",
        "3xl": "128px",
        "4xl": "256px",
      },
    },
  },
  plugins: [],
};
