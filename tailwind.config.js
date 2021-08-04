// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '639px'},
      // => @media (min-width: 640px) { ... }

      'md': {'max': '767px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max': '1023px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'max': '1279px'},
      // => @media (min-width: 1280px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}