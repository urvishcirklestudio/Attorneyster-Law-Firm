/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    fontFamily: {
      'Outfit': ['"Outfit", sans-serif'],
      'Cormorant': ['"Cormorant Garamond", sans-serif'],
      'luxurious': ['"Luxurious Script", sans-serif']
    },
    extend: {
      colors: {
        'highLight': '#D1B06B',  
        'offwhite': '#D7D7D7',  
        'darkblue-900': '#161d27',
        'darkblue-700': '#1F2732',
        'darkblue-600': '#2E3947',
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          'container': '1440px', 
        },
      }, 
      // screens: {
      //   '2xl': {'max':'1366px'},
      //   'xl': {'max':'1280px'},
      //   '1140lg': {'max':'1140px'},
      //   'lg': {'max':'991px'},
      //   'md': {'max':'768px'},
      //   'sm': {'max':'640px'},
      // },
      screens: {
        '3xl': '1500px',  
        '2xl': '1366px',  
        'xl': '1280px',        
        '1140lg': '1140px',        
        'lg': '992px',        
        'md': '768px',  
        'sm': '576px',
      }, 
    },
  },
  plugins: [],
}

