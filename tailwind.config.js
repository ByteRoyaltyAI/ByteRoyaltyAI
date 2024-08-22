/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        icewhite: "#ebebeb",
        grey: "#5d5d5d",
        lightblue: "#9daaf2",
        darkblue: "#1a2238",
        blackblue: "#0c1220",
        orange: "#ff6a3d",
        tastycolor: "#70B9BE",
        silentmooncolor: "#FFD5BD",
        instorcolor: "#E3964A",
      },
      boxShadow: {
        'custom-shadow': '10px 10px 0px 3px rgba(0, 0, 0, 0.75)',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounce1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        bounce2: {
          '0%, 25%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        bounce3: {
          '0%, 50%, 100%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-in-out forwards',
        bounce1: 'bounce1 0.7s infinite',
        bounce2: 'bounce2 0.7s infinite',
        bounce3: 'bounce3 0.7s infinite',
      },
    },
  },
  plugins: [],
};
