/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#06fffb",
        dark: "#000e68",
      },

      animation: {
        zoom: "zoom 20s ease-in-out infinite alternate",
      },

      keyframes: {
        zoom: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.2)",
          },
        },
      },
    },
  },

  plugins: [],
};