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
        'foreground': 'var(--color-foreground)',
        'background-start': 'var(--color-background-start)',
        'background-end': 'var(--color-background-end)',
        'link': 'var(--color-link)',
        'link-hover': 'var(--color-link-hover)',
      }
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio')],
}
