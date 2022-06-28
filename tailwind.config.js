/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      width: {
        '128': '32rem',
        '502':'31.375rem'
      },

      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        'h1xl':'3.5rem',
        'pxl':'.9375rem'
      },

      lineHeight: {
        'extra-loose': '2.5',
        '12': '3.5rem',
      },

      fontFamily: {
        'heading':['Space Mono', ...defaultTheme.fontFamily.sans],
        'body': ['Lexend Deca', ...defaultTheme.fontFamily.sans]
      }, 
      colors: {
        'bg-regal-blue': '#243c5a',
        'bg-red-crimson': '#f50f50',
        'bg-yellow':'#FCB72B',
        'bg-Dark-Navy':'#495567',
        'bg-Dim-Grey':'#939CAA',
        'bg-Light-Grey':'#E5ECF4',
        'bg-snow':'#F2F5F9',
        'bg-light-yellow':'FFF4DF'
      },

      padding: {
        '37px':'37px',
        '52px':'52px',       
        '165px': '165px',
        '300px':'300px',
        '400px':'400px',
        '500px':'500px'

      },

      margin: {
        '5px': '5px',
        '45px':'45px',
        '60px':'60px;',
        '64px':'64px',
        '137px':'137px',
        '154px':'154px;',
        '240px':'240px'
      }

    

    },
  },
  plugins: [],
}
