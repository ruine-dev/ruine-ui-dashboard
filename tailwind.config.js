const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        success: colors.emerald,
        danger: colors.rose,
        warning: colors.amber,
        info: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
