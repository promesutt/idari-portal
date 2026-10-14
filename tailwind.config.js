/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        meb: {
          red: '#c91f28',
          darkred: '#991118',
          blue: '#1b3b6f',
          darkblue: '#112344',
          gold: '#d4af37',
          gray: '#f4f6f9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        official: ['Times New Roman', 'Times', 'serif'],
      }
    },
  },
  plugins: [],
}
