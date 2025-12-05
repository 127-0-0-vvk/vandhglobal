import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#463F3A',
          medium: '#8A817C',
          light: '#BCB8B1',
          lighter: '#F4F3EE',
          accent: '#E0AFA0',
        },
      },
    },
  },
  plugins: [],
}
export default config
