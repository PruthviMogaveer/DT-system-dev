/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        ghostwhite: "#f8fbff",
        "color-6": "#8f8f8f",
        gray: {
          100: "#fafafa",
          200: "#111d15",
          300: "#101914",
          400: "#0d062d",
          500: "rgba(17, 17, 17, 0.12)",
          600: "rgba(0, 0, 0, 0.15)",
          700: "rgba(13, 6, 45, 0.16)",
        },
        color: "#213a1f",
        darkolivegreen: {
          100: "#546e52",
          200: "rgba(84, 110, 82, 0.09)",
        },
        gainsboro: {
          100: "#e6e6e6",
          200: "rgba(230, 230, 230, 0.09)",
        },
        "color-5": "#5d5f61",
        "color-4": "#fcfcea",
        blue: "#7f00ff",
      },
      spacing: {},
      fontFamily: {
        archivo: "Archivo",
        inter: "Inter",
        inherit: "inherit",
      },
      borderRadius: {
        "13xl-1": "32.1px",
        "8xs": "5px",
        xl: "20px",
        "81xl": "100px",
        "11xl": "30px",
        "3xs": "10px",
        "29xl": "48px",
      },
    },
    fontSize: {
      lg: "1.125rem",
      "smi-5": "0.781rem",
      base: "1rem",
      "35xl": "3.375rem",
      "24xl": "2.688rem",
      "13xl": "2rem",
      "7xl": "1.625rem",
      lgi: "1.188rem",
      "29xl": "3rem",
      "5xl": "1.5rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 900px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq500: {
        raw: "screen and (max-width: 500px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1210px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq1226: {
        raw: "screen and (max-width: 1226px)",
      },
      mq470: {
        raw: "screen and (max-width: 470px)",
      },
      mq644: {
        raw: "screen and (max-width: 644px)",
      },
      mq550: {
        raw: "screen and (max-width: 550px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq400: {
        raw: "screen and (max-width: 400px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq460: {
        raw: "screen and (max-width: 460px)",
      },
      mq430: {
        raw: "screen and (max-width: 430px)",
      },
      mq1240: {
        raw: "screen and (max-width: 1240px)",
      },
      mq520: {
        raw: "screen and (max-width: 520px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
