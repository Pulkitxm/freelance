/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xs2: "400px",
      },
      colors: {
        appcolor: "#d69f7e",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["before"],
      gradientColorStops: ["before"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".before-gradient-overlay": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))",
            zIndex: "0",
          },
        },
        ["before"]
      );
    },
    function ({ addBase }) {
      addBase({
        html: { scrollBehavior: "smooth" },
        img: { pointerEvents: "none" },
      });
    },
  ],
};
