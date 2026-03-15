/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0F172A',
        'accent': '#3B82F6',
        'teal': '#14B8A6',
        'navy-light': '#1E293B',
        'navy-card': '#162032',
      },
      fontFamily: {
        'display': ['"Syne"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'slide-in-left': 'slideInLeft 0.5s ease forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink 0.75s step-end infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft: { from: { opacity: '0', transform: 'translateX(-30px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        glowPulse: { '0%, 100%': { boxShadow: '0 0 10px #3B82F6' }, '50%': { boxShadow: '0 0 25px #3B82F6, 0 0 50px #3B82F640' } },
      },
    },
  },
  plugins: [],
}
