/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: '#D6E0D9',
        second: '#7A807C' // Add your custom color here
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

"primary": "#6ff2d5",

"secondary": "#aaf3f7",

"accent": "#bf0d1c",

"neutral": "#1A1C23",

"base-100": "#000000",

"info": "#1CA7F2",

"success": "#1AD16C",

"warning": "#EA9F43",

"error": "#F42F67",
        },
      },
    ],
  },

}
