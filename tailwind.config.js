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
      blur: {
        xs: '1px',
      }
    },
    screens: {
      'xsm': '140px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'ml': '900px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1836px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: ['12px','16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '28px'],
      '2xl': ['24px', '32px'],
      '3xl': ['30px ', '36px'],
      '4xl': ['36px ', '40px'],
      '5xl': ['48px ', '1'],
      '6xl': ['60px ', '1'],
      '7xl': ['72px ', '1'],
      '8xl': ['96px ', '1'],
      '9xl': ['128px', '1'],
      '9.5xl': ['160px', '1'],
      '10xl': ['200px', '1'],
      '11xl': ['260px', '1'],
      '12xl': ['280px', '1'],
      '15xl': ['360px', '1'],
    }

  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
