/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  paragra:{
'textpro':'text-blk font-bold text-3xl'
  },
  theme: {
    screens: {
      'xs': '475px',
      
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
  
        'md': '960px',
        // => @media (min-width: 960px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'bg-white':'#230052',
      'purplecolor':'#5b21b6',
      'backroundcol':'#E5E5E5',
      'txtcol':'2B2B2B',
      'txtcol2':'767676',
      'divbg':'#FFFFFF',
      'yellow':'#FFB400',
      'blk':'#2B2B2B',
      'lightdark':'#767676',
         'lighter' :'#F0F0F6'

    },
    extend: {},
  },
  plugins: [],
}

