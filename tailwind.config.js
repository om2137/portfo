module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      textShadow: {
        'default': '0 2px 0 #000',
        'md': '0 2px 2px #000',
        'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
        'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
    extend: {
      
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
