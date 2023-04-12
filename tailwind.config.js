/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./src/**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  darkMode: 'class',
  theme: {
    colors: {
      'amaranth': '#ea2678',
      'wild-sand': '#f4f4f4',
      'pattens-blue0':"#ddeefe",
      'pattens-blue1':"#D9F6F1",
      'pinkki': "#AF0C48",
      'grayki': "#777777",
      'white' : "#FFFFFF",
      "git": "#1769FF",
      "linke": "#0077B5",
      "blackdi": "#2A262B",
      "graydi": "#484148",
      "patten0":"#2D3235",
      "patten1": "#495351",
      "carddi" : "#525252",
      "white" : "#FFFFFF"



      
      
    },
    fontFamily: {
      inter: ['Inter', 'regular'],
      playfair: ['Playfair', 'display']
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
        '110': '28rem',
        '600': '42rem',
      },
      width: {
        '1440': '90rem',
        '921' : '60rem',
        '550' : '33rem',
        '530' : '31.25rem',
        '430' : '26.5rem'
      },
      margin: {
        '16p': '16,666%',
      },
      padding: {
        '30r': '30rem',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
}

