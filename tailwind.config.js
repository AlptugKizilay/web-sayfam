/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    colors: {
      'amaranth': '#ea2678',
      'wild-sand': '#f4f4f4',
      'pattens-blue':"#ddeefe",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}

