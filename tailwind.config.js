/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Merriweather',
        body: 'Open Sans',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      colors: {
        text: '#050315',
        background: '#fbfbfe',
        primary: '#28A745',
        secondary: '#dedcff',
        accent: '#FFD700',
      },
    },
  },
  plugins: [],
};
