/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#212134",
        dark2: "#181826",
        primary: "#4945ff",
        secondary: "#c0c0cf",
        punch: {
          50: "#fff0f1",
          100: "#ffdee0",
          200: "#ffc3c7",
          300: "#ff999f",
          400: "#ff5e68",
          500: "#ff2c38",
          600: "#f60c1a",
          700: "#e20613",
          800: "#ab0913",
          900: "#8d0f16",
          950: "#4d0206",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: [
  //     // light theme
  //     {
  //       light: {
  //         ...require("daisyui/src/theming/themes")["[data-theme=light]"],
  //         "--primary": "#e20613",
  //       },
  //     },
  //   ],
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4945ff",
          secondary: "#c0c0cf",
        },
      },
    ],
  },
  content: [
    "components/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
};
