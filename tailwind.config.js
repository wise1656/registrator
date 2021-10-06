module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': {'min': '0px', 'max': '400px'},
      'md': {'min': '400px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      backgroundImage: {
        'autumn': "url('./img/bg.jpg')",
        'wood': "url('./img/wood.png')",
        'leaf': "url('./img/leaf.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
