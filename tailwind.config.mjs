/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#E91E8C',
        'brand-teal': '#00B4C5',
        'brand-navy': '#1a365d',
      },
      fontFamily: {
        'display': ['Quicksand', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
