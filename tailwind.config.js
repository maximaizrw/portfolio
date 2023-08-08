/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'dark-1': '#131620',
          'dark-2': '#15192D',
          'dark-3': '#192140',
          'dark-4': '#273E89',
          'blue-1': '#3E63DD',
          'blue-2': '#5373E7',
          'blue-3': '#849DFF',
          'gray-1': '#A0A0A0',
          'gray-2': '#707070',
          'gray-3': '#343434',
        },
      },
      fontFamily: {
        fira: ["var(--fira-mono)", "monospace"],
        inter: ["var(--inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
