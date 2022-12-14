/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.tsx'],
   theme: {
      extend: {
         colors: {
            purple: '#8047F8',
            'purple-dark': '#4B2995',
            'purple-light': '#EBE5F9',
            yellow: '#DBAC2C',
            'yellow-dark': '#C47F17',
            'yellow-light': '#F1E9C9',
            'base-title': '#272221',
            'base-subtitle': '#403937',
            'base-text': '#574F4D',
            'base-label': '#8D8686',
            'base-hover': '#D7D5D5',
            'base-button': '#E6E5E5',
            'base-input': '#EDEDED',
            'base-card': '#F3F2F2',
            'base-title': '#272221',
            background: '#FAFAFA',
            white: '#FFFFFF',
         },
         backgroundImage: {
            backgroundBanner: "url('src/assets/img/Background.png')",
            teste: 'linear-gradient(280deg, rgba(149,114,252,1) 0%, rgba(225,213,93,1) 100%)',
         },
         fontFamily: {
            Baloo: "'Baloo 2', 'cursive'",
            Roboto: "'Roboto', 'sans-serif'",
         },
      },
   },
   plugins: [],
};