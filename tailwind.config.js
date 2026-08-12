export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: { DEFAULT: '#0b1120', 2: '#0f1829', 3: '#152035', 4: '#1c2d46' },
        teal: { DEFAULT: '#f59e0b', 2: '#fcd34d', dim: 'rgba(245,158,11,0.15)' },
        amber: { DEFAULT: '#f59e0b', 2: '#fcd34d', dim: 'rgba(245,158,11,0.15)' },
        blue: { DEFAULT: '#3b82f6', 2: '#93c5fd', dim: 'rgba(59,130,246,0.15)' },
        slate: { DEFAULT: '#94a3b8', 2: '#cbd5e1' },
        cream: { DEFAULT: '#f1f5f9' },
        emerald: { DEFAULT: '#10b981', 2: '#6ee7b7' },
        violet: { DEFAULT: '#8b5cf6', 2: '#c4b5fd' },
        rose: { DEFAULT: '#ec4899', 2: '#f9a8d4' },
        orange: { DEFAULT: '#f97316', 2: '#fdba74' },
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(20px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #3b82f6 0%, #10b981 50%, #8b5cf6 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(59,130,246,0.05) 0%, rgba(16,185,129,0.035) 45%, rgba(139,92,246,0.03) 75%, transparent 100%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(59,130,246,0.10) 0%, rgba(16,185,129,0.08) 40%, rgba(139,92,246,0.06) 70%, transparent 90%)',
      },
    },
  },
  plugins: [],
};
