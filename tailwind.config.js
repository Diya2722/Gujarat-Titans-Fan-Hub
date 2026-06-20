/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gt-navy': '#002D62',
        'gt-red': '#E30613',
        'gt-gold': '#FFD700',
        'gt-dark': '#010B1F',
        'gt-darker': '#000D1F',
        'gt-card': '#0A1628',
        'gt-border': '#1a2a4a',
      },
      fontFamily: {
        'display': ['Bebas Neue', 'Impact', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gt-gradient': 'linear-gradient(135deg, #002D62 0%, #010B1F 50%, #1a0005 100%)',
        'gold-gradient': 'linear-gradient(90deg, #FFD700, #FFA500)',
        'red-gradient': 'linear-gradient(90deg, #E30613, #FF4444)',
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 5px #FFD700' },
          '50%': { boxShadow: '0 0 20px #FFD700, 0 0 40px #FFD700' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
