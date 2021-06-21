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
    enabled: "production",
    options: {
      safelist: ['bg-postitpink', 'bg-postityellow', 'bg-postitgreen', 'bg-postitblue',
        'border-postitpink', 'border-postityellow', 'border-postitgreen', 'border-postitblue',
      ],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "500"
            }
          }
        }
      },
      screens: {
        'xs': {
          min: '440px',
          max: '639px'
        }
      },
      maxWidth: {
        logoThumb: '10ch'
      },
      fontFamily: {
        sans: ['proxima-nova', 'sans-serif']
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'postitblue': colors.cyan['100'],
        'postitpink': colors.pink['100'],
        'postityellow': colors.yellow['100'],
        'postitgreen': colors.lime['100'],
        white: {
          light: colors.trueGray['50'],
          dark: colors.trueGray['800'],
          DEFAULT: colors.trueGray['50']
        },
        primary: colors.cyan['100'],
        contrast: {
          light: colors.yellow['100'],
          DEFAULT: colors.yellow['100'],
          dark: colors.yellow['300']
        },
        linklighter: colors.pink[100],

      }),
      textColor: {
        primary: {
          light: colors.trueGray['800'],
          dark: colors.trueGray['100'],
          DEFAULT: colors.trueGray['800'],
        },
        secondary: {
          light: colors.trueGray['600'],
          DEFAULT: colors.trueGray['600'],
          dark: colors.trueGray['300']
        }
      },
      borderColor: theme => ({
        ...theme('colors')
      }),
      colors: {
        'cyan': colors.cyan,
        'postitblue': colors.cyan['100'],
        'postitpink': colors.pink['100'],
        'postityellow': colors.yellow['100'],
        'postitgreen': colors.lime['100'],
        'primary': colors.cyan['300'],
        'bg': {
          dark: colors.trueGray['800'],
          light: colors.trueGray['50'],
          DEFAULT: colors.trueGray['50']
        },
        'contrast':
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
        'linklight': colors.pink['400'],
        'linklighter': colors.pink['300'],
        'linkdark': colors.pink['600'],
        'linkdarker': colors.pink['700'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],

};
