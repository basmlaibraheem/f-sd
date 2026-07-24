/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        babyPink: {
          50: '#fff5f8',
          100: '#ffe4ee',
          200: '#ffc9dd',
          300: '#ffa6c5',
          400: '#ff7da9',
          500: '#f85c8e',
          600: '#e23d72',
          700: '#bd2a5b',
          800: '#9c244d',
          900: '#822144',
        },
        blush: {
          50: '#fff7f5',
          100: '#ffe9e6',
          200: '#ffd1cc',
          300: '#ffb0a8',
          400: '#ff8a7f',
          500: '#f76b5e',
          600: '#e04a3d',
          700: '#bd382e',
          800: '#9c2f28',
          900: '#822a24',
        },
        roseGold: {
          50: '#fdf6f0',
          100: '#f9e6d8',
          200: '#f2cbb0',
          300: '#e7a87e',
          400: '#dc8a55',
          500: '#c9703a',
          600: '#b05a2e',
          700: '#8f4727',
          800: '#763c24',
          900: '#623320',
        },
        warmPink: {
          50: '#fff0f6',
          100: '#ffd9e8',
          200: '#ffb8d4',
          300: '#ff8fb8',
          400: '#ff6a9e',
          500: '#ff4d86',
          600: '#e8336d',
          700: '#c4245a',
          800: '#a01d4b',
          900: '#821a40',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '33%': { transform: 'translateY(-15px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 40px rgba(255, 125, 169, 0.4)' },
          '50%': { boxShadow: '0 0 80px rgba(255, 125, 169, 0.7)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        loadingBar: {
          from: { width: '0%' },
          to: { width: '100%' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 12s ease-in-out infinite',
        spinSlow: 'spinSlow 40s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        scaleIn: 'scaleIn 0.6s ease-out forwards',
        shimmer: 'shimmer 3s linear infinite',
        gradientShift: 'gradientShift 8s ease infinite',
        loadingBar: 'loadingBar 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};
