const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    colors: {
      white: '#ffffff',
      'dark-blue': '#001D5f',
      'dark-blue-soft': '#364193',
      crimson: '#811b2a',
      copy: {
        light: '#ffffff2e',
        DEFAULT: '#587790',
        dark: '#12304a',
      },
      link: {
        light: '#ffffff2e',
        DEFAULT: '#587790',
        dark: '#12304a',
      },
      'lightest-blue': '#ffffff2e',
      'body-copy': '#587790',
      'header-copy': '#12304a',
      'bright-blue': '#47b2e4',
      'bright-blue-light': '#dcebfc',
      'light-link': '#97a3be',
      section: '#F1F5F7',
      instagram: '#E4405F',
      facebook: '#3B5998',
      twitter: '#3B8ACA',
      pinterest: '#B90B20',
      linkedin: '#0077B5',
      youtube: '#cc181e',
      transparent: 'transparent',
      red: {
        light: '#e74e47',
        DEFAULT: '#e2231a',
        dark: '#b41c14',
      },
      yellow: '#edda65',
      gold: '#e6bc3b',
      orange: {
        light: '#dca555',
        DEFAULT: '#e2871a',
        dark: '#b65044',
      },
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      height: {
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        128: '32rem',
      },
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
        mono: ['Inter var', ...defaultTheme.fontFamily.sans],
        icomoon: ['icomoon'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
