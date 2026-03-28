/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        bubblegum: { DEFAULT: '#FFC1CC', dark: '#e89aa8' },
        lavender: { DEFAULT: '#E6E6FA', light: '#F5F3FF', dark: '#9B8FC9' },
        gold: '#C9A96E',
        mint: { DEFAULT: '#F0FFF0', dark: '#7CB87C' },
        'soft-pink': '#FFF5F7',
        sass: {
          cream: '#FFFBF9',
          cream2: '#F9F3F5',
          bar: '#D9A8B8',
          barDeep: '#C995A8',
          blush: '#F5E4EA',
          rose: '#C77B94',
          ink: '#222222',
          muted: '#5C5C5C',
        },
      },
      boxShadow: {
        soft: '0 8px 32px rgba(26, 26, 26, 0.06)',
        luxury: '0 20px 60px rgba(26, 26, 26, 0.1)',
      },
    },
  },
  plugins: [],
}
