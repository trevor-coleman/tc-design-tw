const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: "class",
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: "production"
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['proxima-nova', 'sans-serif']
      },
      backgroundColor: {
        primary: colors.cyan['200'],
        contrast: {
          light: colors.yellow['100'],
          DEFAULT: colors.yellow['100'],
          dark: colors.yellow['300']
        }
      },
      textColor: {
        primary: {
          light: colors.trueGray['800'],
          dark: colors.trueGray['100'],
          DEFAULT: colors.trueGray['800'],
        }
      },
      colors: {
        'l-primary': colors.cyan['300'],
        'l-bg': {
          dark: colors.trueGray['800'],
          light: colors.trueGray['50'],
          DEFAULT: colors.trueGray['50']
        },
        'l-contrast':
          {
            light: colors.yellow['100'],
            DEFAULT: colors.yellow['100'],
            dark: colors.yellow['300']
          },
        'error': colors.red['400'],
        'success': colors.green['400'],
        'disabled': {
          dark: colors.trueGray['600'],
          light: colors.trueGray['400'],
          DEFAULT: colors.trueGray['400'],
        },
        'link': colors.pink['500'],
        'link-light': colors.pink['400'],
        'link-lighter': colors.pink['300'],
        'link-dark': colors.pink['600'],
        'link-darker': colors.pink['700'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
