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
      'pinkki': "#AF0C48",
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '1.5xl': '18px',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '4.5xl': '2.625rem',
      '5xl': '3.052rem',
    },
    
    extend: {
      height: {
        '128': '46.125rem',
      },
      width: {
        '1440': '90rem',
      },
      margin: {
        '16p': '16,666%',
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}

