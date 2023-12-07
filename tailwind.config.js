const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: 'Figtree, sans-serif',
    },
    colors: {
      black: '#0B0B0B',
      orange: {
        'primary': '#FF5C00',
        'secondary': '#F6DCAC',
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '40px',
      '5xl': '3.052rem',
      'h1': '66px',
    },
    extend: {
      boxShadow: {
        custom: '4px 4px 0px 0px #000',
        md: 'none',
      },
      height: {
        'hero': '898px',
      },
      padding: {
        '150': '150px',
      }
    },
  },
  plugins: [],
});