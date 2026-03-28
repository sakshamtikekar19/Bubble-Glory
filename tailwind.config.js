/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        bubblegum: { DEFAULT: '#FFC1CC', dark: '#e89aa8' },
        lavender: { DEFAULT: '#E6E6FA', light: '#F5F3FF', dark: '#9B8FC9' },
        gold: '#C9A96E',
        mint: { DEFAULT: '#F0FFF0', dark: '#7CB87C' },
        'soft-pink': '#FFF5F7',
        sass: {
          cream: '#FDF8F5',
          blush: '#FCE8EE',
          rose: '#E8A4B8',
          ink: '#1A1A1A',
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
