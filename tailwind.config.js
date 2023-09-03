/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        cspurple : '#802BB1',
        csmidnight : '#2D283E',
        csgray : '#564F6F',
        csslate : '#4C495D',
        cswhite : '#D1D7E0',
      },
    },
  },
  plugins: [],
}
