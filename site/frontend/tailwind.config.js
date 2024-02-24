/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#101828',
        'secondary': '#344054',
        'checkbox': '#D0D5DD',
        'stroke': '#E5E5E5',
        'amber': '#F7BD2E',
        'yellow': '#FFE100',
        'fields': '#F0F0F7',
        'purple-highlight': '#6502D4',
        'violet-contrast': '#9E6396',
        'purple-contrast': '#3D0053',
      },
      backgroundColor: {
        'defaultBg': '#DCDCDC',
      }
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    backgroundColor: {
      'purple-contrast': '#3D0053',
    }
  },
  plugins: [],
}

