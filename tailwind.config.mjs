/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Tight', 'sans-serif'],
      },
      colors: {
        raisin: '#232528',
        olivine: '#9CB380',
        magnolia: '#F7F0F5',
        umber: '#8B5D33',
      },
    },
  },
  plugins: [],
}