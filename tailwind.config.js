/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', 'body[class="tw-bg-stone-900"]'],
  prefix: 'tw-',
  content: [
      './index.php',
      './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
      extend: {
          colors: {
              ddcyan: '#a6dbd7',
              ddblue: '#004c54',
              ddyellow: '#fcaf17'
          }
      },
  },
  plugins: [],
}
