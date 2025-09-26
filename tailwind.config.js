/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  safelist: ["font-clash", "font-figtree"],
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem", // 18px
        5.5: "1.375rem", // 22px
        30.5: "7.625rem", // 122px
        39: "9.75rem", // 156px
        45: "11.25rem", // 180px
        47: "11.75rem", // 188px
        50: "12.5rem", // 200px
      },
      lineHeight: {
        6: "1.5rem", // 24px
        18: "4.5rem", // 72px
      },
    },
  },
  plugins: [],
};
