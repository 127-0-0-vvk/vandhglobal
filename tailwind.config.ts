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
          light: '#EEEEEE',
          cyan: '#00ADB5',
          medium: '#3A4750',
          dark: '#303841',
        },
        gladia: {
          purple: '#947afc',
          gray: '#99a6b2',
          darkest: '#020405',
          lightBlue: '#64b7e3',
          white: '#ffffff',
          blue: '#3266a6',
          darkBlue: '#112e46',
          lightPurple: '#bd85f0',
          purpleBlue: '#9380ff',
        },
        mineral: {
          light: '#e9e9e9',
          dark: '#2e2e2e',
          yellow: '#faf5b2',
          orange: '#fe5e0e',
        },
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.7s ease-out',
        'slide-in-right': 'slideInRight 0.7s ease-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
