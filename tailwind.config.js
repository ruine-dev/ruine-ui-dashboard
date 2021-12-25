const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        current: 'currentColor',
        primary: colors.blue,
        success: colors.emerald,
        danger: colors.rose,
        warning: colors.amber,
        info: colors.indigo,
      },
    },
  },
  plugins: [],
};
