import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono]
    },
    extend: {
      backgroundImage: {
        'auth': "url('./images/auth_bg.jpeg')"
      },
      backgroundPosition: {
        'right-1': 'center right -12rem'
      },
      colors: {
        'txt-def': "#101828",
        'txt-sub': "#475467",
        'txt-dark': "#171717",
        'txt-label': "#344054",
        'txt-err': "#F04438",
        'btn-def': "#0B7DFF",
        'btn-hover': "#175CD3",
        'input-txt-def': "#667085",
        'input-err': "#FDA29B",
        'input-icon-def': "#98A2B3",
        'btn-border': "#E0E0E0"
      },
      spacing: {
        '120': '30rem',
        '8.5': '2.125rem'
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    }
  },
  plugins: [],
}

