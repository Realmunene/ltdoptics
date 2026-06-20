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
        wave: "wave 2s ease-in-out infinite",
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

        wave: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-4px)",
          },
        },

      },
    },
  },

  plugins: [],
};