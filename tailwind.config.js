import { nextui } from '@nextui-org/react'

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#4F0DA3',
        secondaryColor: '#FF8A15',
      },

      keyframes: {
        modalBox: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: 0.8,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
