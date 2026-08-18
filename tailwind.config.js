/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          hero: 'var(--bg-hero)',
          product: 'var(--bg-product)',
          deploy: 'var(--bg-deploy)',
          monitor: 'var(--bg-monitor)',
          cta: 'var(--bg-cta)',
        },
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        infra: {
          DEFAULT: '#3b82f6',
          light: '#60a5fa',
          dark: '#1d4ed8',
        },
        telemetry: {
          DEFAULT: '#06b6d4',
          light: '#38bdf8',
          dark: '#0e7490',
        },
        violet: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#6d28d9',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-brand': '0 0 40px -8px rgba(16, 185, 129, 0.28)',
        'glow-blue': '0 0 45px -10px rgba(59, 130, 246, 0.25)',
        'glow-cyan': '0 0 45px -10px rgba(6, 182, 212, 0.25)',
        'glow-violet': '0 0 45px -10px rgba(139, 92, 246, 0.25)',
      },
    },
  },
  plugins: [],
}
