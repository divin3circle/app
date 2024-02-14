/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        primary: '#fe1e00',
        'primary-light': '#473b33',
      },
    },
  },
  plugins: [],
};
