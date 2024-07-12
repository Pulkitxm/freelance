/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        xs2: "400px",
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
